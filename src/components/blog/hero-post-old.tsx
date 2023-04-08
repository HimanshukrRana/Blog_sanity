// import Link from "next/link";
// import { useRouter } from "next/router";

// import Avatar from "@/components/blog/avatar";
// import CoverImage from "@/components/blog/cover-image";

// import Date from "./date";

// export default function HeroPost({
//   title,
//   coverImage,
//   date,
//   excerpt,
//   author,
//   slug,
//   categories,
// }) {
//   const router = useRouter();
//   const handleCreateLink = (title) => {
//     router.replace(`categories/${title}`);
//   };
//   return (
//     <section className="flex flex-col lg:flex-row">
//       <div className="mb-4 md:mb-16">
//         <CoverImage slug={slug} title={title} image={coverImage} priority />
//       </div>
//       <div className="mb-20 md:mb-28 md:grid md:grid-rows-2 md:gap-x-16 lg:gap-x-8">
//         <div>
//           <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
//             <Link href={`/posts/${slug}`} className="hover:underline">
//               {title}
//             </Link>
//           </h3>
//           <p className="mb-4 text-[15px] leading-relaxed">{excerpt}</p>
//         </div>
//         <div>
//           {author && (
//             <Avatar name={author.name} picture={author?.image?.asset?.url} />
//           )}
//           {/* <p>{categories}</p> */}
//           <div className="mb-2 flex gap-4">
//             {categories.map((category) => {
//               return (
//                 <div
//                   className="box flex w-fit gap-3 border border-gray-300 p-2 text-gray-500"
//                   key={category._id}
//                   onClick={() => {
//                     handleCreateLink(category.title);
//                   }}
//                 >
//                   <p>{category.title}</p>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="mb-4 text-[13px] font-bold md:mb-0">
//             <Date dateString={date} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
