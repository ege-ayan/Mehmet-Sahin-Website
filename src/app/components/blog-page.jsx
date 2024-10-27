import Image from "next/image";

export default function BlogPage({ title, imageSrc, children }) {
  return (
    <main className="bg-gradient-to-r from-blue-600 to-blue-900 w-full flex flex-col items-center px-5 pt-36 pb-20 min-h-screen">
      <article className="container max-w-4xl flex flex-col items-center text-white">
        <header className="text-3xl md:text-5xl font-bold text-center tracking-wide mb-10">
          <h1>{title}</h1>
        </header>

        <figure className="w-full md:w-2/3 flex justify-center mb-10">
          <div className="relative w-full pb-[60.25%] rounded-lg shadow-lg border-4 border-white overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              quality={100}
              priority
              fill
              className="object-cover"
            />
          </div>
        </figure>

        <section className="text-lg md:text-xl leading-relaxed text-justify space-y-6">
          {children}
        </section>
      </article>
    </main>
  );
}
