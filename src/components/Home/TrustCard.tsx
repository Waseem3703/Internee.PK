import { FaSearch } from "react-icons/fa"; // Add this at the top of your file

function TrusCard(){
    return(<>

<div className="bg-white dark:bg-[#0a0a0a] text-black dark:text-white">
  <section className="py-12 flex flex-col lg:flex-row items-center justify-around font-urbanist px-6 md:px-14 pb-32">
    <div className="text-center md:text-left max-w-xl 2xl:max-w-3xl">
      <div className="px-4 py-1 text-sm 2xl:text-base bg-gray-100 dark:bg-gray-800 font-medium text-black dark:text-white rounded-full w-fit mx-auto md:mx-0">
        Trusted By Thousands
      </div>
      <h2 className="text-3xl sm:text-5xl mt-9 leading-tight mb-12">
        <div className="mb-3">Join a Global Community</div>
        <div className="mb-3">Of Learners Achieving</div>
        <div>Their Dreams</div>
      </h2>
      <div className="mt-6">
        <a
          className="bg-[#41A223] text-white px-6 py-3 2xl:px-8 2xl:py-4 rounded-xl text-sm 2xl:text-lg font-medium shadow-md hover:bg-[#368A1D] inline-block"
          href="/internship"
        >
          Join Our Community
        </a>
      </div>
    </div>
    <div className="w-full max-w-xl 2xl:max-w-2xl">
      <div className="relative flex flex-col items-center w-full max-w-md mx-auto">
        <div className="relative bg-gray-100 p-6 rounded-xl shadow-lg text-center w-full">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <img
              alt="Mohammad Rafiq"
              className="w-20 h-20 rounded-full border-4 border-white shadow-md"
              src="https://image.lexica.art/full_webp/66d982e5-6477-4253-8518-f04c7b2c8e15"
            />
          </div>
          <h3 className="mt-10 text-lg font-semibold text-[#171717]">
            Mohammad Rafiq
          </h3>
          <p className="text-gray-600">Larkana, Pakistan</p>
          <p className="mt-4 text-gray-700 text-sm">
            “I find internee.pk to be an outstanding to get hands on experience.
            Sometimes you have to spend to make lot of projects.”
          </p>
          <div className="mt-4 flex justify-center text-yellow-500 text-lg">
            ★★★★☆
          </div>
        </div>
        <div className="mt-4 flex space-x-2">
          <button className="w-3 h-3 rounded-full bg-gray-300 transition-all"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 transition-all"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 transition-all"></button>
          <button className="w-3 h-3 rounded-full bg-green-500 transition-all"></button>
        </div>
      </div>
    </div>
  </section>

  <div className="w-11/12 2xl:w-10/12 mx-auto">
    <div className="bg-[#0A1733] dark:bg-[#0A1733] text-white flex items-center justify-center p-6 min-h-[80vh] rounded-xl">
      <div className="text-center mt-4 md:mt-4">
        <div className="inline-block bg-white text-gray-700 text-xs sm:text-sm font-semibold pl-1 pr-2 py-2 rounded-full mb-8 2xl:mb-12 font-urbanist">
          <span className="bg-[#171717] text-white p-1 rounded-full px-3 mr-2">
            Trending
          </span>
          Explore Internship Opportunities
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-5xl font-medium leading-relaxed mb-8 sm:mb-12 2xl:mb-12 font-urbanist">
          <div>Unlock New Opportunities</div>
          <div className="md:mt-3">With Top-tier Internships.</div>
        </h1>
        <p className="text-gray-400 text-lg sm:text-base mb-8 sm:mb-2 px-2 sm:px-0 max-w-3xl mx-auto">
          Take the first step toward a successful career with Internee.pk.
          Explore top internships, gain hands-on experience, and earn a
          valuable certificate.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-6">
          <a
            className="bg-[#41A223] hover:bg-[#368A1D] text-white px-6 lg:px-8 py-3 text-sm sm:text-base rounded-xl font-semibold transition hover:scale-105 w-fit"
            href="/graduateprogram"
          >
            Get Started Now
          </a>
          <a
            className="flex items-center text-white border border-white px-6 lg:px-8 py-3 text-sm sm:text-base rounded-xl font-semibold hover:bg-white hover:text-black transition hover:scale-105 w-fit"
            href="/internship"
          >
            <FaSearch className="mr-2 text-lg" />
            Explore Internships
          </a>
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 px-6 py-10 mt-8">
      <div className="text-center">
        <p className="text-6xl font-semibold text-black dark:text-white">
          20+
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Expert-Led Internships
        </p>
      </div>
      <div className="hidden md:block w-px bg-gray-300 dark:bg-gray-600 h-16"></div>
      <div className="text-center">
        <p className="text-6xl font-semibold text-black dark:text-white">
          1,500+
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Successful Graduates
        </p>
      </div>
      <div className="hidden md:block w-px bg-gray-300 dark:bg-gray-600 h-16"></div>
      <div className="text-center">
        <p className="text-6xl font-semibold text-black dark:text-white">
          50,000+
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          LinkedIn Followers
        </p>
      </div>
    </div>
  </div>
</div>

    </>)
}

export default TrusCard;