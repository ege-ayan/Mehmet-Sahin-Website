import FieldCard from "../components/cards/field-card";

export default function HomeFields() {
  return (
    <div className="flex flex-col gap-10 items-center py-16 justify-center">
      <div className="text-gray-900 text-5xl font-bold">UZMANLIK ALANLARIM</div>
      <div>
        <FieldCard
          title="Retina"
          imageUrl="/images/field-retina.jpg"
          href="/retina"
        />
      </div>
    </div>
  );
}
