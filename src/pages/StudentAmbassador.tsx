import { FiArrowRight } from "react-icons/fi";
import { LuNotebook, LuUsers, LuTrophy, LuSquareCheckBig, LuGraduationCap, LuCode } from "react-icons/lu";
  
const reasons = [
  {
    icon: <LuGraduationCap className="w-12 h-12 text-[#43A724] mb-4" />,
    title: "Learn and Grow",
    description:
      "Access exclusive learning resources and certifications to build your technical skills.",
  },
  {
    icon: <LuUsers className="w-12 h-12 text-[#43A724] mb-4" />,
    title: "Build Community",
    description:
      "Connect with fellow students and mentors from around the world.",
  },
  {
    icon: <LuCode className="w-12 h-12 text-[#43A724] mb-4" />,
    title: "Create Solutions",
    description:
      "Work on real projects using cutting-edge Internee's technologies.",
  },
];

const cards = [
  {
    title: "Get started",
    description: "Become a Student Ambassador",
    href: "studentambassadors/agree",
    icon: <LuNotebook className="text-[#43A724] w-10 h-10" />,
  },
  {
    title: "Community",
    description: "Explore Student Ambassador profiles",
    href: "studentambassadors/community",
    icon: <LuUsers className="text-[#43A724] w-10 h-10" />,
  },
  {
    title: "Startup Competition",
    description: "Student competition for AI startups",
    href: "studentambassadors/startup",
    icon: <LuTrophy className="text-[#43A724] w-10 h-10" />,
  },
  {
    title: "Founders Hub",
    description: "A platform for entrepreneurs at any stage",
    href: "https://learn.internee.pk/",
    icon: <LuSquareCheckBig className="text-[#43A724] w-10 h-10" />,
  },
];
function StudentAmbassador() {
  return (<>
    <div className="relative h-[500px]">
      <img
        alt="Students collaborating"
        className="w-full h-full object-cover dark:brightness-50"
        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl font-semibold text-white md:ml-[10%] ml-8">
            Internee.pk <br/>Student Ambassadors
          </h1>
        </div>
        </div>
      </div>
      <div className="relative -mt-40 md:flex hidden container mx-auto px-4 justify-end">
      <div className="w-[95%] bg-[#F3F4F6] dark:bg-[#1e1e1e] rounded-tl-xl rounded-bl-xl rounded-b-xl p-8 shadow-lg relative z-10">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Become a Student Ambassador</h2>
        <div className="flex">
          <p className="text-md text-black/80 dark:text-white/80 w-[70%]">
            Join our global community of students who are passionate about building AI-driven
            solutions with Microsoft technology. Accelerate innovation and grow the skills you need
            to have greater impact in the projects and communities that matter to you.
          </p>
          <button className="bg-[#43A724] dark:bg-[#002f06] text-white px-6 py-5 h-12 ml-12 rounded-xl hover:opacity-90 focus:ring-2 focus:ring-[#008000] focus:outline-none transition-all duration-300 flex items-center gap-2 text-md">
            Get Started
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="relative container mx-auto px-4 flex items-center h-screen mt-16">
          <div className="w-[50%] h-full flex justify-center items-center">
            <img
              alt="Unlock Your Potential"
              className="h-[80%] object-cover rounded-xl shadow-lg ml-16"
              src="https://images.unsplash.com/photo-1570701123784-2d41777f5e93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="absolute left-[30%] w-[45%] bg-[#f5f5f5] dark:bg-[#121212] rounded-xl p-8 shadow-xl z-10">
            <h2 className="text-6xl mb-4 font-semibold dark:text-white">Unlock Your Potential</h2>
            <p className="text-lg text-black/80 dark:text-white/80">
              Discover new opportunities and enhance your skills.
            </p>
            <p className="text-lg text-black/80 dark:text-white/80">
              Gain real-world experience with hands-on projects.
            </p>
            <p className="text-lg text-black/80 dark:text-white/80">
              Connect with a network of like-minded individuals.
            </p>
          </div>
        </div>
      </div>
    </div>
      <section className="py-12 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className="flex flex-col sm:flex-row rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-[#002f06] group hover:scale-105"
            >
              <div className="bg-gray-100 dark:bg-[#1a1a1a] p-6 flex items-center justify-center">
                {card.icon}
              </div>
              <div className="bg-white dark:bg-[#121212] p-4 flex-1">
                <h3 className="font-semibold text-md text-black dark:text-white mb-1 group-hover:text-[#43A724] transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {card.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
     <div className="container mx-auto px-4 py-16">
      <h2 className="text-xl font-semibold dark:text-white">Why you should join</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-[#1a1a1a] p-8 rounded-lg"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-3 dark:text-white">{item.title}</h3>
            <p className="text-black/70 dark:text-white/70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
 </> );
}

export default StudentAmbassador;
