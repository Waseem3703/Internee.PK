import CardText from "../../assets/CareerCard.json";
import * as DiIcons from "react-icons/di";
import { CiCircleCheck } from "react-icons/ci";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaRegFileAlt } from "react-icons/fa";
import { FiChevronRight, FiMessageSquare } from "react-icons/fi";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { IoMdBook } from "react-icons/io";

const iconMap = {
  FaRegFileAlt,
  FiMessageSquare,
  MdOutlineSignalCellularAlt,
  IoMdBook,
};

const BtnData = [
  {
    num: "1000+",
    txt: "Active Internships",
  },
  {
    num: "500+",
    txt: "Partner Companies",
  },
  {
    num: "10000+",
    txt: "Success Stories",
  },
  {
    num: "50+",
    txt: "Industry Sectors",
  },
];
const coltxt = [
  {
    txt: "Phase 1: Foundation",
    class: "w-[90%]",
  },
  {
    txt: "Phase 2: Practical Skills",
    class: "w-[85%]",
  },
  {
    txt: "Phase 3: Industry Project",
    class: "w-[95%]",
  },
];

const col2txt = [
  {
    txt: "Resume Templates",
    icon: "FaRegFileAlt",
  },
  {
    txt: "Mock Interviews",
    icon: "FiMessageSquare",
  },
  {
    txt: "Skill Analysis",
    icon: "MdOutlineSignalCellularAlt",
  },
  {
    txt: "Learning Paths",
    icon: "IoMdBook",
  },
];

function HomeCard() {
  const startIndex = 0;
  const limit = 6;
  const displayedCard = CardText.slice(startIndex, startIndex + limit);

  return (
    <div
      className="bg-gray-200 dark:bg-black dark:text-white min-h-screen py-16 px-6 md:px-12 font-urbanist
     transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-12">
          <div className="inline-flex items-center bg-[#43A724]/10 text-[#43A724] px-4 py-2 rounded-full mb-6">
            <HiOutlineAcademicCap className="text-2xl" />
            Professional Development
          </div>
          <h1 className="text-3xl md:text-[46px] mt-4 font-medium text-[#171717] dark:text-white">
            Launch Your Career with Internee.pk
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg px-50">
            Pakistan's innovative platform for career growth and professional
            development. Join our virtual internships to gain practical
            experience and kickstart your professional journey.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 px-8">
          {BtnData.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-[#43A724]">
                {item.num}
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {item.txt}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7">
          {displayedCard.map((item, index) => {
            const IconComponent = DiIcons[item.icon as keyof typeof DiIcons];

            return (
              <div
                key={index}
                className="bg-white dark:bg-[#1e1e1e] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon & Title */}
                {item.iconPosition === "above" ? (
                  <>
                    <IconComponent
                      className={`${item.iconClass} h-14 w-14 rounded-xl mb-4`}
                    />
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      {item.title}
                    </h3>
                  </>
                ) : (
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent
                      className={`${item.iconClass} text-2xl rounded-lg`}
                    />
                    <h3 className="text-2xl font-bold text-black dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                  {item.description}
                </p>

                <ul className="space-y-2">
                  {item.tags.map((tag: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <CiCircleCheck className="text-lg text-green-800 dark:bg-green-900 dark:text-green-300" />
                      <span className="text-[15px]">{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-16  py-20 px-6">
        <div className="bg-[#f9f9f9] dark:bg-[#1e1e1e] rounded-xl p-8">
          <h3 className="text-xl font-bold text-black dark:text-white mb-6">
            Your Learning Journey
          </h3>
          <div className="space-y-6">
            {coltxt.map((item, index) => (
              <div
                key={index}
                className="bg-white text-black dark:text-white dark:bg-[#2c2c2c] p-4 rounded-lg"
              >
                <h4 className="font-semibold mb-2">{item.txt}</h4>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div
                    className={`h-2 bg-[#43A724] rounded-full ${item.class}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#f9f9f9] dark:bg-[#1e1e1e] rounded-xl p-8 ">
          <h3 className="text-xl font-bold text-black dark:text-white mb-6">
            Career Resources
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {col2txt.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#2c2c2c] text-black dark:text-white p-4 rounded-lg flex items-center gap-3"
                >
                  {Icon && <Icon className="text-xl text-[#43A724]" />}
                  {item.txt}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center bg-[#f1f8f4] dark:bg-[#1e1e1e] rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
          Begin Your Professional Journey with <strong>Internee.pk</strong>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Join our <strong>virtual internships</strong> program and transform
          your career prospects with hands-on experience and expert guidance.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <div
            className="bg-[#43A724] dark:bg-[#30781a] dark:hover:bg-[#1d4a10] font-urbanist text-white 
            hover:bg-[#30781a] text-lg font-semibold px-8 py-3 rounded-2xl inline-flex items-center transition-all duration-300 shadow-md"
          >
            Explore Opportunities
            <FiChevronRight className="ml-2 h-5 w-5" />
          </div>
          <div
            className="bg-white dark:bg-[#2c2c2c] font-urbanist text-[#43A724] hover:bg-gray-50 dark:hover:bg-[#252525] text-lg font-semibold px-8 py-3 rounded-2xl inline-flex items-center transition-all duration-300 shadow-md"
          >
            View Programs
            <FiChevronRight className="ml-2 h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
