import AddressCard from "../components/cards/address-card";
import Map from "../components/map";

export default function Contact() {
  return (
    <div className="flex flex-col pt-32 sm:pt-48 pb-20 w-full items-center min-h-screen  gap-10 px-5">
      <div className="text-gray-900 text-3xl md:text-5xl font-bold text-center">
        İLETİŞİM
      </div>
      <div className="container flex flex-col xl:flex-row justify-center items-center gap-6 xl:gap-12">
        <div className="h-[350px] xl:h-[500px] w-full xl:w-1/2">
          <Map />
        </div>
        <div className="h-[350px] xl:h-[500px] w-full xl:w-1/2">
          <AddressCard />
        </div>
      </div>
    </div>
  );
}
