// Public API v1.1
// Example endpoint: https://public-api.wordpress.com/rest/v1.1/sites/samgielis.wordpress.com/posts?category=aanbod
// (slugs only): https://public-api.wordpress.com/rest/v1.1/sites/samgielis.wordpress.com/posts?category=aanbod&fields=posts,slug,id

import { WPPost, WPPostPreload } from "./WPPost";

export interface WPCategory {
  found: number;
  posts: WPPost[];
}

export interface WPCategoryPreload {
  found: number;
  posts: WPPostPreload[];
}
