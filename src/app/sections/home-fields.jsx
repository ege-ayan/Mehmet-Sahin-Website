import FieldCard from "../components/cards/field-card";

export default function HomeFields() {
  const fields = [
    { title: "Retina", imageUrl: "/images/field-retina.jpg", href: "/retina" },
    {
      title: "Göz Estetiği",
      imageUrl: "/images/field-eye-aesthatic.jpg",
      href: "/cataract",
    },
    {
      title: "Excimer Lazer",
      imageUrl: "/images/field-excimer-laser.jpg",
      href: "/glaucoma",
    },
    {
      title: "Keratokonus",
      imageUrl: "/images/field-keratokonus.jpg",
      href: "/laser",
    },
  ];

  return (
    <div className="flex flex-col gap-5 items-center py-16 justify-center">
      <div className="text-gray-900 text-3xl md:text-5xl font-bold text-center">
        UZMANLIK ALANLARIM
      </div>
      <div className="container flex flex-wrap gap-10 items-center justify-center p-5">
        {fields.map((field, index) => (
          <div key={index} className="w-full md:max-w-[600px]">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <div className="absolute inset-0">
                <FieldCard
                  title={field.title}
                  imageUrl={field.imageUrl}
                  href={field.href}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
