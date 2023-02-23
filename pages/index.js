import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
import ProjectCard from "@/components/ProjectCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "post" });
  return {
    props: {
      posts: res.items,
    },
  };
}

export default function Home({ posts }) {
  return <div>Home</div>;
}
