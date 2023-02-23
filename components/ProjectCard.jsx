import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ProjectCard({ post }) {
  const { projectTitle, slug, topPicture, projectPost } = post.fields;

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 text-white">
      <Link href={"/projects/" + slug} className="h-48 w-96 relative">
        {/* <Image
          src={"https:" + topPicture.fields.file.url}
          fill // required
          className="object-contain h-48 w-96 md:object-scale-down" // just an example
        /> */}
        <div className="h-45 w-90 relative">
          <Image
            src={"https:" + topPicture.fields.file.url}
            alt="A picture"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4>{projectTitle}</h4>
        </div>
        <div>{documentToReactComponents(projectPost)}</div>
      </Link>
    </div>
  );
}
