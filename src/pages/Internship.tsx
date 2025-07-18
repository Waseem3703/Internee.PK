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

const stats = [
  { title: "Internships Available", count: 30 },
  { title: "Industry Partners", count: 50 },
  { title: "Success Rate", count: 95 },
];

export default function Internship() {
  return (
    <main className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 py-20 min-h-screen bg-white text-black dark:bg-black dark:text-white transition-all">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 min-h-[60vh]">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold text-[#43A724] dark:text-[#43A724]">
            Unlock Your Future

          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 font-sm">
Discover world-class internships and gain hands-on experience with top industry leaders.

          </p>
          <button className="bg-[#43A724] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#368A1D] transition">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="p-8 bg-[#43A724] text-white rounded-xl shadow text-2xl font-semibold text-center">
            Find Your Dream Internship Today!
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="mt-12 min-h-[80vh] px-6 py-12 bg-gray-100 rounded-xl dark:bg-[#121212] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#171717] dark:text-[#43A724]">
          Internship Categories
        </h2>
        <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Choose the path that fits your passion and build real-world skills.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map(({ title, icon: Icon, image, link }, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl hover:shadow-2xl transition"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5 flex items-center gap-2">
                <Icon className="w-5 h-5 text-[#43A724]" />
                <h3 className="text-lg font-semibold text-[#171717] dark:text-white">
                  {title}
                </h3>
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-green-50 dark:bg-[#1a1a1a]">
                <a href={link}>
                  <button className="w-full bg-[#43A724] text-white font-medium py-2 rounded-xl hover:bg-[#368A1D] transition">
                    Apply Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="mt-20 border-t border-b border-gray-200 dark:border-gray-700 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {stats.map(({ title, count }, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-4xl font-bold text-[#43A724] dark:text-white">{count}</h3>
            <p className="text-gray-700 dark:text-gray-300">{title}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
