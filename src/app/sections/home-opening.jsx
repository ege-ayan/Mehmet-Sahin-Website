import Image from "next/image";

export default function HomeOpening() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex max-w-[1500px]">
        <div className="w-1/2">
          <Image
            src={"/images/homepage-opening.jpg"}
            alt="Op. Dr. Mehmet Şahin"
            quality={100}
            width={750}
            height={500}
          />
        </div>
        <div className="w-1/2">Op. Dr. Mehmet Şahin</div>
      </div>
    </div>
  );
}
