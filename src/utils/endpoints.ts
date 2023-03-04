export const Endpoints = {
  NewsletterSubscribtion: createEndpoint("subscribeToNewsletter"),
  InsightAudiosSubscription: createEndpoint("applyForInsightAudios"),
};

function createEndpoint(endpointName: string): string {
  return `/.netlify/functions/${endpointName}`;
}
