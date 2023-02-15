import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
import BlogCard from "@/components/BlogCard";

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
  console.log(posts);
  return (
    <div>
      {posts?.map((post) => {
        return (
          <BlogCard
            className="flex items-center h-screen justify-center font-poppins text-2xl"
            key={post.sys.id}
            post={post}
          />
        );
      })}
    </div>
  );
}
