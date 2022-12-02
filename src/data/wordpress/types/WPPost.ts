import { WPTag } from "./WPTag";

type HTMLString = string;
type DateString = string;

export interface WPPost extends WPPostPreload {
  content: HTMLString;
}

export interface WPPostPreload {
  ID: string;
  title: string;
  slug: string;
  tags: { [tagName: string]: WPTag };
  excerpt: HTMLString;
  featured_image: string;
  date: DateString;
}
