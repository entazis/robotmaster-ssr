import path from 'path';
import * as fs from 'fs';
import mustache from 'mustache';
import aws from 'aws-sdk';
import countryList from '../../localization/country-list.json';

function sendEmail(pathToTemplate, ses, sourceEmailAddress, destEmailAddress, subject, emailBody) {
  fs.readFile(pathToTemplate, "utf8", function (err, template) {
    if (err) {
      console.log(err);
    } else {
      ses.sendEmail({
        Source: sourceEmailAddress,
        Destination: {
          ToAddresses: [destEmailAddress]
        },
        Message: {
          Subject: {
            Data: subject
          },
          Body: {
            Text: {
              Data: mustache.render(template, emailBody)
            }
          }
        }
      }, function (err) {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}

function handlePostRequest(req, res) {
  var response = {
    success: true,
    messages: []
  };

  if (!req.body.name) {
    response.success = false;
    response.messages.push("You must include your name.");
  }

  if (!req.body.email) {
    response.success = false;
    response.messages.push("You must include an email address.");
  }

  if (!req.body.company) {
    response.success = false;
    response.messages.push("You must include a company name.");
  }

  if (!req.body.country) {
    response.success = false;
    response.messages.push("You must include a country.");
  }

  if (!req.body.phone) {
    response.success = false;
    response.messages.push("You must include a phone number.");
  }

  if (req.body.robot) {
    response.success = false;
    response.messages.push("You must be a human.");
  }

  if (req.body.requestingPage === "trial_request") {
    response.success = true
  }

  if (response.success) {
    response.messages.push("Your request has been sent, someone will be in touch with you shortly.");

    const language = req.body.language;
    const locale = require('../../localization/' + language + '/pages');
    const confirmationEmailMessage = {
      name: req.body.name,
      message: req.body.requestingPage === "live-demo" ? locale["confirmation-email-live-demo-message"]
          : locale["confirmation-email-contact-message"]
    };
    const ses = new aws.SES();

    if (req.body.requestingPage === "trial_request") {
      let sourceEmailAddress = "trials@robotmaster.com";
      let destEmailAddress = "trials@robotmaster.com";
      sendEmail(
          path.join(__dirname, req.body.formName),
          ses,
          sourceEmailAddress,
          destEmailAddress,
          "Robotmaster Information Request - Page: " + req.body.requestingPage,
          req.body
      );
    } else {
      let sourceEmailAddress = (req.body.requestingPage === "live-demo") ? "sales@robotmaster.com" : "info@robotmaster.com";
      let destEmailAddress = req.body.state ?
          countryList.find(country => country.countryCode === 'US').states.find(state => state.stateCode === req.body.state).email
          : countryList.find(country => country.name === req.body.country).email;

      sendEmail(
          path.join(__dirname, "form.tpl"),
          ses,
          sourceEmailAddress,
          destEmailAddress,
          "Robotmaster Information Request - Page: " + req.body.requestingPage,
          req.body
      );

      sendEmail(
          path.join(__dirname, "../../localization/" + language + "/confirmationMail.tpl"),
          ses,
          '"Robotmaster" <' + sourceEmailAddress + '>',
          req.body.email,
          locale["confirmation-email-subject"],
          confirmationEmailMessage
      );
    }
  }

  res.json(response);
}

export default {
  handlePostRequest
}

