import { createClient } from "contentful";
import MyCarousel from "@/components/MyCarousel";

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
  return <MyCarousel />;
}
