import CardText from "../../assets/CardText1.json";
import { FiUpload, FiUserCheck, FiDollarSign, FiPieChart } from 'react-icons/fi';
import { CiCircleCheck } from "react-icons/ci";

function HomeCard() {
  const startIndex = 0;
  const limit = 6;
  const displayedCard = CardText.slice(startIndex, startIndex + limit);

  const iconComponents = {
    FiUpload,
    FiUserCheck,
    FiDollarSign,
    FiPieChart,
  };

  return (
    <div className="bg-[#B3CEE5] dark:bg-black dark:text-white min-h-screen py-12 px-4 sm:px-6 md:px-12 font-urbanist transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 mt-10">
          <h1 className="text-2xl sm:text-3xl md:text-[46px] font-medium text-[#171717] dark:text-white">
            Tech Instructor or Content Creator?
          </h1>
          <p className="text-green-700 dark:text-gray-400 mt-4 text-lg sm:text-xl font-medium">
            Create in Your Native Language & Start Earning
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center pb-6">
          <button className="bg-[rgb(45,114,24)] px-6 py-3 rounded-xl border border-[rgb(67,167,36)] hover:bg-[rgb(67,167,36)] text-white duration-300 cursor-pointer text-base sm:text-lg font-medium">
            Start Teaching Today
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 px-2 sm:px-4 md:px-6">
          {displayedCard.map((item, index) => {
            const IconComponent = iconComponents[item.icon as keyof typeof iconComponents];

            return (
              <div
                key={index}
                className="bg-white dark:bg-[#1e1e1e] p-6 sm:p-8 rounded-2xl shadow-md dark:shadow-none border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon & Title */}
                {item.iconPosition === "above" ? (
                  <>
                    <IconComponent
                      className={`${item.iconClass} h-12 w-12 sm:h-14 sm:w-14 rounded-xl mb-4`}
                    />
                    <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">
                      {item.title}
                    </h3>
                  </>
                ) : (
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent
                      className={`${item.iconClass} text-2xl sm:text-3xl rounded-lg`}
                    />
                    <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-5 text-[15px] sm:text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <ul className="space-y-2">
                    {item.tags.map((tag: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <CiCircleCheck className="text-green-700 dark:text-green-300" />
                        <span className="text-[14px]">{tag}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
