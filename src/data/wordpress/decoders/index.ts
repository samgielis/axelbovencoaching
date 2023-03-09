import { WPCategoryPreload } from "../types/WPCategory";
import { WPPost, WPPostPreload } from "../types/WPPost";

function decodeHtml(htmlString: string): string {
  var txt = document.createElement("textarea");
  txt.innerHTML = htmlString;
  return txt.value;
}

export function decodePost(rawPost: WPPost): WPPost {
  return {
    ...decodePreloadPost(rawPost),
    content: decodeHtml(rawPost.content),
  };
}

export function decodePreloadPost(rawPost: WPPostPreload): WPPostPreload {
  return {
    ...rawPost,
    title: decodeHtml(rawPost.title),
    excerpt: decodeHtml(rawPost.excerpt),
  };
}

export function decodePreloadCategory(
  rawCategory: WPCategoryPreload | null
): WPCategoryPreload | null {
  if (!rawCategory) return null;
  return {
    ...rawCategory,
    posts: rawCategory.posts.map((p) => decodePreloadPost(p)),
  };
}
