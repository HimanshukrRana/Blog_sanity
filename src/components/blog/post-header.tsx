import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Date from "./date";
import PostTitle from "./post-title";

export default function PostHeader({
  title,
  coverImage,
  date,
  excerpt,
  author,
}: any) {
  return (
    <div className="sm:mt-[11rem] xl:mt-[8rem]">
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:flex">
        {author && <Avatar name={author.name} picture={author.image} />}
        <div className=" text-[13px] font-bold flex items-center pl-4">
          <Date dateString={date} />
        </div>
      </div>
      <p className="text-[2.5rem] mb-4 leading-relaxed">{excerpt}</p>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage
          title={title}
          image={coverImage}
          priority
          slug={undefined}
        />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.image} />}
          <div className="mb-6 text-[13px] font-bold pl-4">
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </div>
  );
}
