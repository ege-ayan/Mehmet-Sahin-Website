import HomeFields from "./sections/home-fields";
import HomeHealth from "./sections/home-health";
import HomeOpening from "./sections/home-opening";
import HomeVideos from "./sections/home-videos";

export default function Home() {
  return (
    <div>
      <HomeOpening />
      <HomeFields />
      <HomeVideos />
      <HomeHealth />
    </div>
  );
}
