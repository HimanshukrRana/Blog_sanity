import { urlForImage } from "@/lib/sanity";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function CoverImage({ title, slug, image: source }: any) {
  const imgPath = source?.asset?.url;
  const image = imgPath ? (
    <div
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    >
      <Image
        className="w-full h-auto"
        layout="responsive"
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
        // src={imgPath}
        sizes="100vw"
        // priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
