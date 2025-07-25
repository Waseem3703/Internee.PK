const imageList = [
  "/HomeImage/image1.png",
  "/HomeImage/image2.png",
  "/HomeImage/image3.png",
  "/HomeImage/image4.png",
  "/HomeImage/image5.png",
  "/HomeImage/image6.png",
];

function HomeImage() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <h2 className="text-center text-sm sm:text-base font-medium 2xl:text-lg text-gray-700 dark:text-gray-300">
          Collaborated with Trusted Worldwide Partners
        </h2>
      </div>
      <div className="flex justify-center sm:justify-around items-center mt-6 flex-wrap gap-4 2xl:gap-12">
        {imageList.map((item: string, index: number) => (
          <img
            key={index}
            src={item}
            className="w-[120px] h-[50px] sm:w-[140px] sm:h-[60px] 2xl:w-[200px] 2xl:h-[100px] object-contain transition-opacity duration-500 mb-6 dark:brightness-90"
            alt={`Partner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
export default HomeImage;
