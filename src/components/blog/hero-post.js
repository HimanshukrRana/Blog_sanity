import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="">
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Latest Blog
      </h2>
      <div className="grid-rows">
        <div className="mb-8 md:mb-16">
          <CoverImage slug={slug} title={title} image={coverImage} />
        </div>
        <div className="mb-20 md:grid md:grid-col md:gap-x-16 lg:gap-x-8 md:mb-28">
          <div>
            <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
              <Link href={`/blogs/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div className="mb-4 text-lg md:mb-0">
              <Date dateString={date} />
            </div>
          </div>
          <div>
            <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
            {author && <Avatar name={author.name} picture={author.image} />}
          </div>
        </div>
      </div>
    </section>
  );
}
