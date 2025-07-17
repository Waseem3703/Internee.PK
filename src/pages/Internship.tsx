import { DollarSign, Code, Brush, Bot, Smartphone, Server } from "lucide-react";

const categories = [
  {
    title: "Graphic Design",
    icon: Brush,
    image: "/HomeImage/card1.webp",
    link: "/internship/graphic-design",
  },
  {
    title: "Chatbot Development",
    icon: Bot,
    image: "/HomeImage/card2.webp",
    link: "/internship/chatbot-dev",
  },
  {
    title: "Other Internships",
    icon: DollarSign,
    image: "/HomeImage/card3.webp",
    link: "/internship/other",
  },
  {
    title: "Frontend Internship",
    icon: Code,
    image: "/HomeImage/card4.webp",
    link: "/internship/frontend",
  },
  {
    title: "App Development",
    icon: Smartphone,
    image: "/HomeImage/card5.webp",
    link: "/internship/app-dev",
  },
  {
    title: "Backend Development",
    icon: Server,
    image: "/HomeImage/card6.webp",
    link: "/internship/backend-dev",
  },
];

function Internship() {
  return (    <>

    <section className="mt-12 min-h-[80vh] px-6 py-12 bg-gray-100 rounded-xl dark:bg-[#121212] text-center">
      <h2 className="text-4xl font-extrabold text-[#171717] dark:text-[#43A724]">
        Explore Internship Categories
      </h2>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Choose from a wide range of internship opportunities and kickstart your professional journey.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {categories.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl transition-all hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5 flex items-center gap-2">
                <Icon className="w-5 h-5 text-[#43A724]" />
                <h2 className="text-lg font-semibold text-[#171717] dark:text-white">{item.title}</h2>
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-green-50 dark:bg-[#121212]">
                <a href={item.link}>
                  <button className="w-full bg-[#43A724] text-white font-medium py-2 rounded-xl hover:bg-[#368A1D] transition">
                    Apply Now
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
 </> );
}
export default Internship;