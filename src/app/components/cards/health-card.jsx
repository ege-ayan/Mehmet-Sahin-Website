import Image from "next/image";
import Link from "next/link";

export default function HealthCard({ title, imageUrl, href, description }) {
  return (
    <div className="border rounded-lg overflow-hidden w-80 shadow-lg">
      <Link href={href} passHref>
        <div className="text-gray-900 no-underline">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={300}
            priority
            className="object-cover w-full h-52"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
