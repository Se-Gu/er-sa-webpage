import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function BlogCard({ post }) {
  const { name, slug, topPicture, blogPost } = post.fields;

  return (
    <Link href={"/blogs/" + slug}>
      <Image
        src={"https:" + topPicture.fields.file.url}
        width={topPicture.fields.file.details.image.width / 5}
        height={topPicture.fields.file.details.image.height / 5}
        alt={topPicture.fields.description}
      />
      <div>
        <h4>{name}</h4>
      </div>
      <div>{documentToReactComponents(blogPost)}</div>
    </Link>
  );
}
