import Image from "next/image";
import Link from "next/link";

export default function FieldCard({ title, imageUrl, href }) {
  return (
    <Link href={href}>
      <div className="relative block w-80 h-48 rounded-lg overflow-hidden shadow-lg group">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <h2 className="absolute bottom-4 left-4 text-white text-xl font-semibold z-10">
          {title}
        </h2>
      </div>
    </Link>
  );
}
