import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: "68f3de3x",
  apiVersion: "2023-03-04", // or today's date for latest
  useCdn: process.env.NODE_ENV === "production",
};

const sanityClient = createClient(config);
export const imageBuilder = imageUrlBuilder(sanityClient);
export default sanityClient;

// Set up Portable Text serialization
export const MyPortableText = (props) => <PortableText {...props} />;
