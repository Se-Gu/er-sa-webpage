import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ProjectCard({ post }) {
  const { projectTitle, slug, topPicture, projectPost } = post.fields;

  return (
    <Link href={"/blogs/" + slug}>
      <Image
        src={"https:" + topPicture.fields.file.url}
        width={topPicture.fields.file.details.image.width / 5}
        height={topPicture.fields.file.details.image.height / 5}
        alt={topPicture.fields.description}
      />
      <div>
        <h4>{projectTitle}</h4>
      </div>
      <div>{documentToReactComponents(projectPost)}</div>
    </Link>
  );
}
