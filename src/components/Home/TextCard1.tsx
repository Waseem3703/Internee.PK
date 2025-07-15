import CardText from "../../assets/CardText1.json";
import { FiUpload, FiUserCheck, FiDollarSign, FiPieChart } from 'react-icons/fi';
import { CiCircleCheck } from "react-icons/ci";

function HomeCard() {
  const startIndex = 0;
  const limit = 6;
  const displayedCard = CardText.slice(startIndex, startIndex + limit);

  // Map icon names to actual icon components
  const iconComponents = {
    "FiUpload": FiUpload,
    "FiUserCheck": FiUserCheck,
    "FiDollarSign": FiDollarSign,
    "FiPieChart": FiPieChart
  };

  return (
    <div className="bg-[#B3CEE5] dark:bg-black dark:text-white min-h-screen py-16 px-6 md:px-12 font-urbanist transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-12">
          <h1 className="text-3xl md:text-[46px] mt-4 font-medium text-[#171717] dark:text-white">
            Tech Instructor or Content Creator?
          </h1>
          <p className="text-green-700 dark:text-gray-400 mt-4 text-xl px-50 font-medium">
            Create in Your Native Language & Start Earning
          </p>
        </div>
        <div className="flex justify-center pb-6">
          <button className="bg-[rgb(45,114,24)] px-6 py-3 rounded-xl border border-[rgb(67,167,36)] hover:bg-[rgb(67,167,36)] text-white duration-300 cursor-pointer text-xl font-medium">
            Start Teaching Today
          </button>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-7">
          {displayedCard.map((item, index) => {
            const IconComponent = iconComponents[item.icon as keyof typeof iconComponents];

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

                {/* Tags - Only render if tags exist */}
                {item.tags && item.tags.length > 0 && (
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