export const Endpoints = {
  NewsletterSubscribtion: createEndpoint("subscribeToNewsletter"),
  NewsletterSubscribtionMailChimp: createEndpoint("subscribeToNewsletterMailChimp"),
  InsightAudiosSubscription: createEndpoint("applyForInsightAudios"),
};

function createEndpoint(endpointName: string): string {
  return `/.netlify/functions/${endpointName}`;
}
