import { FiUserPlus, FiFileText, FiAward } from "react-icons/fi";

const steps = [
  {
    id: 1,
    title: "Sign Up & Choose a Domain",
    description:
      "Explore a wide range of internships across various industries, tailored to match your skills.",
    icon: <FiUserPlus />,
    stepBg: "#41A223",
  },
  {
    id: 2,
    title: "Fill out the Desired Form",
    description:
      "Fill out a quick application form to and secure your internship opportunity.",
    icon: <FiFileText />,
    stepBg: "#1b1b1b",
  },
  {
    id: 3,
    title: "Earn Your Certificate",
    description:
      "Complete your internship, gain valuable hands-on experience, and receive a certificate",
    icon: <FiAward />,
    stepBg: "#1a1a1a",
  },
];

function HowItWorkCard() {
  return (
    <section className="bg-gray-100 dark:bg-black text-black dark:text-white px-4 sm:px-8 py-12 min-h-screen flex flex-col lg:flex-row items-center justify-around font-urbanist">
      <div className="text-center lg:text-left max-w-sm sm:max-w-xl mb-10 lg:mb-0">
        <div className="px-4 py-1 text-sm bg-white dark:bg-gray-800 font-medium text-black dark:text-white rounded-full w-fit mx-auto lg:mx-0">
          How It Works
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-[42px] 2xl:text-5xl mt-5 tracking-wider leading-tight font-semibold">
          <span className="block mb-4">A Simple and Seamless</span>
          <span className="block mb-4">Process to Start Your</span>
          <span>Internship Journey</span>
        </h2>
      </div>

      <div className="w-full max-w-xl relative">
        <div className="pl-6 sm:pl-10">
          {/* vertical line */}
          <div className="absolute left-9 sm:left-14 top-0 h-full w-0.5 border-l-2 border-gray-400 dark:border-gray-600 border-dashed"></div>

          {steps.map((step) => (
            <div className="flex items-start sm:items-center mb-6" key={step.id}>
              <div
                className="text-white px-4 py-2 2xl:py-3 rounded-full z-10 text-sm 2xl:text-base font-semibold min-w-20 text-center"
                style={{ backgroundColor: step.stepBg }}
              >
                Step {step.id}
              </div>
              <div className="ml-4 sm:ml-6 bg-white dark:bg-[#43a72418] shadow-md rounded-xl py-6 px-5 sm:px-6 2xl:py-8 2xl:px-10 w-full">
                <h3 className="text-lg 2xl:text-xl py-2 font-semibold flex items-center gap-2">
                  {step.icon}
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm 2xl:text-md leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <a
          className="mt-6 inline-block bg-[#41A223] hover:bg-[#368a1d] text-white px-6 py-3 2xl:px-8 2xl:py-4 rounded-3xl text-sm 2xl:text-lg shadow-md"
          href="/internship"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
}

export default HowItWorkCard;
