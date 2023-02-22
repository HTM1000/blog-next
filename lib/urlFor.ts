import { client } from "./sanity.client";
import ImageUrlBuilder from "@sanity/image-url";

const builder = ImageUrlBuilder();

export default function urlFor(source: any) {
  return builder.image(source)
}