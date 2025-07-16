import CardText from "../../assets/CareerCard.json";
import * as DiIcons from "react-icons/di";
import { CiCircleCheck } from "react-icons/ci";
import { HiOutlineAcademicCap } from "react-icons/hi2";

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

function HomeCard() {
  const startIndex = 0;
  const limit = 6;
  const displayedCard = CardText.slice(startIndex, startIndex + limit);

  return (
    <div className="bg-gray-200 dark:bg-black dark:text-white min-h-screen py-16 px-6 md:px-12 font-urbanist transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-12">
          <div className="inline-flex items-center bg-[#43A724]/10 text-[#43A724] px-4 py-2 rounded-full mb-6">
            <HiOutlineAcademicCap className="text-2xl"/>
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
    </div>
  );
}

export default HomeCard;
