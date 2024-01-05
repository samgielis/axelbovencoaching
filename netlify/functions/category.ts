import { Handler } from "@netlify/functions";
import { Response } from "@netlify/functions/dist/function/response";
import fetch from "node-fetch";

const blogId = "coaching942.wordpress.com";
export const WPConfig = {
  blogId,
  apiEndpoint: `https://public-api.wordpress.com/rest/v1.1/sites/${blogId}`,
};

const handler: Handler = (event, context, callback) => {
  if (!callback) throw new Error("expected callback");
  const categoryName =
    event.queryStringParameters && event.queryStringParameters["categoryName"];
  if (!categoryName) throw new Error("no categoryName");

  try {
    fetch(
      `${WPConfig.apiEndpoint}/posts?category=${categoryName}&fields=slug,ID,excerpt,title,featured_image,tags,date`
    )
      .then((response) => response.json())
      .then((data) => callback(undefined, createResponse(data)))
      .catch((e) => {
        return callback(createError("Unknown error", 400), { statusCode: 400 });
      });
  } catch (e) {
    console.log("catch", e);
    return callback(createError("Unknown error", 400), { statusCode: 400 });
  }
};

function createError(message: string, code?: number): Response {
  return {
    statusCode: code || 500,
    body: JSON.stringify({ error: message }),
  };
}

function createResponse(message: any): Response {
  return {
    statusCode: 200,
    body: JSON.stringify(message),
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  };
}

export { handler };
