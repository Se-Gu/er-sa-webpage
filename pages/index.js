import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";

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
      <Navbar />
      <ul>
        {posts?.map((post) => {
          return (
            <ProjectCard
              className="flex items-center h-screen justify-center font-poppins text-2xl"
              key={post.sys.id}
              post={post}
            />
          );
        })}
      </ul>
    </div>
  );
}
