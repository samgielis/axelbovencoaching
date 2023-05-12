import { Handler } from "@netlify/functions";
import { Response } from "@netlify/functions/dist/function/response";
import Mailjet from 'node-mailjet'

const NEWSLETTER_CONTACT_LIST_ID = 10215580;
const INSIGHT_AUDIOS_CONTACT_LIST_ID = 10215581;

interface SubsribeToNewsLetterPayload {
    email?: string;
    name?: string;
}

const handler: Handler = (event, context, callback) => {
    if (!callback) throw new Error('expected callback');
    try {
        const payload: SubsribeToNewsLetterPayload = JSON.parse(event.body || '');
        const name = payload.name || "";
        if (!payload.email) {
            return callback(undefined, createError("No email provided", 400));
        }
        addToMailjetList(payload.email, name, INSIGHT_AUDIOS_CONTACT_LIST_ID).then(() => {
            addToMailjetList(payload.email || '', name, NEWSLETTER_CONTACT_LIST_ID).then((response) => {
                callback(undefined, createResponse("Subscription complete"))
            }).catch(error => {
                console.log("Mailjet", error)
                callback(createError("Mailjet error"), {statusCode: 400});
            })
        })
    } catch (e) {
        console.log("catch", e)
        return callback(createError("Unknown error", 400), {statusCode: 400});
    }

    return callback(undefined, createResponse("Subscription complete"));
};

function createError(message: string, code?: number): Response {
    return {
        statusCode: code || 500,
        body: JSON.stringify({ error: message })
    }
}

function createResponse(message: string): Response {
    return {
        statusCode: 200,
        body: JSON.stringify({ message })
    }
}

export { handler };

function addToMailjetList(email: string, name: string, listId: number): Promise<any> {
    const mailjet = Mailjet.apiConnect(process.env.MJ_APIKEY_PUBLIC || '', process.env.MJ_APIKEY_PRIVATE || '');
    return mailjet
        .post("contactslist", { 'version': 'v3' })
        .id(listId)
        .action("managecontact")
        .request({
            "Name": name,
            "Properties": JSON.stringify({Name: name}),
            "Action": "addnoforce",
            "Email": email
        });
}
