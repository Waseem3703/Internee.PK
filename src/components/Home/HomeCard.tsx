type Card = {
  imageSrc: string;
  title: string;
};

type HomeCardListProps = {
  cards: Card[];
};

function HomeCard({ cards }: HomeCardListProps) {
  return (
    <>
      <div
        className=" bg-gray-100 dark:bg-black dark:text-white min-h-screen py-16 px-6 md:px-12 
      font-urbanist transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 mt-12">
            <div
              className="inline-block bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                          text-sm font-semibold pl-1 pr-2 py-2 rounded-full mb-4"
            >
              <span
                className="bg-[#171717] dark:bg-gray-200 text-white dark:text-black p-1 
                            rounded-full px-3 mr-2"
              >
                Trending
              </span>
              Explore Internship Opportunities
            </div>
            <h1 className="text-3xl md:text-[46px]  mt-4 font-medium text-[#171717] dark:text-white">
              Your Dream Internship is Just One
              <div className="mt-4 ">Click Away!</div>
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  px-7">
            {cards.map((card, index) => (
              <div
                key={index}
                className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-50 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeCard;
