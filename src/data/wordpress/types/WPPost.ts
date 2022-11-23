import { WPTag } from "./WPTag";

type HTMLString = string;
type DateString = string;

export interface WPPost extends WPPostPreload {
  title: string;
  featured_image: string;
  excerpt: HTMLString;
  date: DateString;
  content: HTMLString;
  tags: { [tagName: string]: WPTag };
}

export interface WPPostPreload {
  ID: string;
  slug: string;
}
