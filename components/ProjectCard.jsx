import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ProjectCard({ post }) {
  const { projectTitle, slug, topPicture, projectPost } = post.fields;

  return (
    <Link href={"/projects/" + slug}>
      <Image
        src={"https:" + topPicture.fields.file.url}
        width={300}
        height={topPicture.fields.file.details.image.height / 5}
        // className="object-contain"
        alt={topPicture.fields.description}
      />
      <div>
        <h4>{projectTitle}</h4>
      </div>
      <div>{documentToReactComponents(projectPost)}</div>
    </Link>
  );
}
