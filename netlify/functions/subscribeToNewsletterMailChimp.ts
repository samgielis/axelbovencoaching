import Chimp from "@mailchimp/mailchimp_marketing";
import { Handler } from "@netlify/functions";
import { Response } from "@netlify/functions/dist/function/response";
const mailchimp: typeof Chimp = require("@mailchimp/mailchimp_marketing");

const NEWSLETTER_CONTACT_LIST_ID = "b7b5d204f4";

interface SubsribeToNewsLetterPayload {
  email?: string;
  name?: string;
}

const handler: Handler = (event, context, callback) => {
  if (!callback) throw new Error("expected callback");
  try {
    const payload: SubsribeToNewsLetterPayload = JSON.parse(event.body || "");
    const name = payload.name || "";
    if (!payload.email) {
      return callback(undefined, createError("No email provided", 400));
    }
    addToMailChimpList(payload.email, name)
      .then((response) => {
        callback(undefined, createResponse("Subscription complete"));
      })
      .catch((error) => {
        console.log("MailChimp", error);
        callback(createError("MailChimp error"), { statusCode: 400 });
      });
  } catch (e) {
    console.log("catch", e);
    return callback(createError("Unknown error", 400), { statusCode: 400 });
  }

  return callback(undefined, createResponse("Subscription complete"));
};

function createError(message: string, code?: number): Response {
  return {
    statusCode: code || 500,
    body: JSON.stringify({ error: message }),
  };
}

function createResponse(message: string): Response {
  return {
    statusCode: 200,
    body: JSON.stringify({ error: message }),
  };
}

export { handler };

async function addToMailChimpList(email: string, name: string): Promise<any> {
  mailchimp.setConfig({
    apiKey: process.env.MC_API_KEY,
    server: "us21",
  });
  const response = await mailchimp.lists.addListMember(NEWSLETTER_CONTACT_LIST_ID, {
    email_address: email,
    tags: ['nieuwsbrief'],
    status: "pending",
  });
  return response;
}
