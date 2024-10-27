import Footer from "./components/partials/footer";
import Navbar from "./components/partials/navbar";
import "./globals.css";

export const metadata = {
  title:
    "Op. Dr. Mehmet Şahin | Katarakt ve Refraktif Cerrahisi (Excimer Laser)",
  description:
    "Ankara’da göz sağlığı alanında uzman Dr. Mehmet Şahin, katarakt ameliyatı, miyop ve astigmat tedavisi gibi pek çok göz problemi için modern çözümler sunmaktadır. Katarakt ameliyatında kullanılan akıllı mercek teknolojisi ve göz çizme işlemlerinde excimer lazer gibi gelişmiş yöntemlerle hastalarına daha net bir görüş sağlamayı hedeflemektedir. Dr. Mehmet Şahin, alanında deneyimli bir göz doktoru olarak, hastalarına güvenilir tanı ve tedavi süreçleri sunarak, göz sağlığında Ankara’nın en iyi göz doktorları arasında yer almaktadır.",
  authors: [{ name: "Ege Ayan", url: "https://github.com/ege-ayan" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
