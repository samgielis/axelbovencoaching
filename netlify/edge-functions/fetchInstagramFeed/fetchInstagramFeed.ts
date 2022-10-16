import type { Context } from "https://edge.netlify.com";

export default async (_request: Request, context: Context) => {
  const igHTML = await fetch('https://instagram.com/axel.boven.coaching').then(r => r.text());
  return context.json({ hello: igHTML });
};
