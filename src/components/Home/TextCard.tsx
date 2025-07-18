import CardText from "../../assets/CardText.json";
import * as DiIcons from "react-icons/di";
import { CiCircleCheck } from "react-icons/ci";

function HomeCard() {
  const startIndex = 0;
  const limit = 6;
  const displayedCard = CardText.slice(startIndex, startIndex + limit);

  return (
    <div className="bg-gray-200 dark:bg-black dark:text-white min-h-screen py-12 px-4 sm:px-6 md:px-12 font-urbanist transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-12">
          <div className="inline-block bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold pl-1 pr-2 py-2 rounded-full mb-4">
            <span className="bg-[#171717] dark:bg-gray-200 text-white dark:text-black p-1 rounded-full px-3 mr-2">
              Trending
            </span>
            Task Management Platform
          </div>
          <h1 className="text-3xl md:text-[46px] mt-4 font-medium text-[#171717] dark:text-white leading-tight">
            Master Real-World Skills with Our Task Portal at
            <div className="mt-2">internee.pk</div>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base sm:text-lg max-w-3xl mx-auto">
            Transform theoretical knowledge into practical expertise through our comprehensive task portal. Build, learn,
            and grow with industry-standard projects from our virtual internships on internee.pk.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {displayedCard.map((item, index) => {
            const IconComponent = DiIcons[item.icon as keyof typeof DiIcons];

            return (
              <div
                key={index}
                className="bg-white dark:bg-[#1e1e1e] p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon & Title */}
                {item.iconPosition === "above" ? (
                  <>
                    <IconComponent className={`${item.iconClass} h-14 w-14 rounded-xl mb-4`} />
                    <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
                      {item.title}
                    </h3>
                  </>
                ) : (
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className={`${item.iconClass} text-2xl rounded-lg`} />
                    <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm sm:text-base">
                  {item.description}
                </p>

                {/* Tags */}
                <ul className="space-y-2">
                  {item.tags.map((tag: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-300"
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
