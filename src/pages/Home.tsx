import HomeImage from "../components/Home/HomeImage";
import HeroSection from "../components/Home/HeroSection";
import HomeCard from "../components/Home/HomeCard";
import TextCard from "../components/Home/TextCard";
import TextCard1 from "../components/Home/TextCard1";
import CareerCard from "../components/Home/CareerCard";
import MockCard from "../components/Home/MockCard";


const CardData = [
  { imageSrc: "/HomeImage/card1.webp", title: "Graphic Design" },
  { imageSrc: "/HomeImage/card2.webp", title: "Chatbot Development" },
  { imageSrc: "/HomeImage/card3.webp", title: "Other Internships" },
  { imageSrc: "/HomeImage/card4.webp", title: "Frontend Internship" },
  { imageSrc: "/HomeImage/card5.webp", title: "App Development" },
  { imageSrc: "/HomeImage/card6.webp", title: "Backend Development" },
];

function Home() {
  return (
    <>
      <HeroSection />
      <HomeImage />
      <HomeCard cards= {CardData}/>
      <TextCard/>
      <TextCard1/>
      <CareerCard/>
      <MockCard/>
    </>
  );
}

export default Home;
