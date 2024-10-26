import Image from "next/image";
import Link from "next/link";

export default function FieldCard({ title, imageUrl, href }) {
  return (
    <Link href={href}>
      <div className="relative block w-full h-full rounded-lg overflow-hidden shadow-xl group">
        <Image
          src={imageUrl}
          alt={title}
          fill
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <h2 className="absolute bottom-8 left-8 text-white text-3xl font-semibold z-10">
          {title}
        </h2>
      </div>
    </Link>
  );
}
