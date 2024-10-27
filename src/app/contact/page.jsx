import AddressCard from "../components/cards/address-card";
import Map from "../components/map";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center w-full items-center min-h-screen  gap-10 px-5">
      <div className="text-gray-900 text-3xl md:text-5xl font-bold text-center">
        İLETİŞİM
      </div>
      <div className="container flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12">
        <div className="h-[300px] lg:h-[500px] w-full lg:w-1/2">
          <Map />
        </div>
        <div className="h-[300px] lg:h-[500px] w-full lg:w-1/2">
          <AddressCard />
        </div>
      </div>
    </div>
  );
}
