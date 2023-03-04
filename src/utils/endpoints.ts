export const Endpoints = {
    NewsletterSubscribtion: createEndpoint("subscribeToNewsletter"),
}

function createEndpoint(endpointName: string): string {
    return `/.netlify/functions/${endpointName}`;
}
