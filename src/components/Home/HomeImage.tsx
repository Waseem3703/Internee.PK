const imageList = [
  "/src/assets/HomeImage/image1.png",
  "/src/assets/HomeImage/image2.png",
  "/src/assets/HomeImage/image3.png",
  "/src/assets/HomeImage/image4.png",
  "/src/assets/HomeImage/image5.png",
  "/src/assets/HomeImage/image6.png",
];

function HomeImage() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h2 className="text-center text-md font-medium 2xl:text-lg text-gray-700 dark:text-gray-300">
            Collaborated with Trusted Worldwide Partners
          </h2>
        </div>
        <div className="flex justify-around items-center mt-6 flex-wrap gap-4 2xl:gap-12">
          {imageList.map((item: string, index: number) => (
            <img
              key={index}
              src={item}
              className="w-[140px] h-[60px] 2xl:w-[200px] 2xl:h-[100px] object-contain transition-opacity 
            duration-500 mb-10"
            />
          ))}
          
        </div>
      </div>
    </>
  );
}
export default HomeImage;
