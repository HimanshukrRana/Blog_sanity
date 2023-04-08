import Image from "next/image";
import { urlForImage } from "../../lib/sanity";

export default function Avatar({ name, picture }: any) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <Image
          src={
            picture?.asset?.url
              ? urlForImage(picture).height(96).width(96).fit("crop").url()
              : "https://source.unsplash.com/96x96/?face"
          }
          className="rounded-full"
          height={96}
          width={96}
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}

// import Image from "next/image";

// export default function Avatar({ name, picture }: any) {
//   return (
//     <div className="mb-3 flex items-center">
//       <div className="relative mr-4 h-[20px] w-4">
//         <Image
//           src={picture ? picture.asset : "/favicon/apple-touch-icon.png"}
//           className="h-5 w-5 rounded-full"
//           height={56}
//           width={56}
//           alt={name}
//         />
//       </div>
//       <div className="w-max font-mono text-xl">{name}</div>
//     </div>
//   );
// }
