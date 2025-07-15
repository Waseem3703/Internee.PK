import HomeImage from "../components/Home/HomeImage";
import HeroSection from "../components/Home/HeroSection";
import HomeCard from "../components/Home/HomeCard";
import TextCard from "../components/Home/TextCard";
import TextCard1 from "../components/Home/TextCard1";


const CardData = [
  { imageSrc: "/src/assets/HomeImage/card1.webp", title: "Graphic Design" },
  { imageSrc: "/src/assets/HomeImage/card2.webp", title: "Chatbot Development" },
  { imageSrc: "/src/assets/HomeImage/card3.webp", title: "Other Internships" },
  { imageSrc: "/src/assets/HomeImage/card4.webp", title: "Frontend Internship" },
  { imageSrc: "/src/assets/HomeImage/card5.webp", title: "App Development" },
  { imageSrc: "/src/assets/HomeImage/card6.webp", title: "Backend Development" },
];

function Home() {
  return (
    <>
      <HeroSection />
      <HomeImage />
      <HomeCard cards= {CardData}/>
      <TextCard/>
      <TextCard1/>
    </>
  );
}

export default Home;
