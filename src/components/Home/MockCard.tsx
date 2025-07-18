import {
  LuBrain,
  LuChevronRight,
  LuMessageSquare,
  LuTarget,
  LuAward,
  LuFileText,
  LuChartArea
} from "react-icons/lu";

const cardDataPrimary = [
  {
    icon: <LuMessageSquare className="text-[#43A724] w-6 h-6" />,
    title: "Realistic AI Interview Simulations",
    description:
      "Simulate real interview environments powered by AI. Perfect for students seeking online internship interview practice or job readiness.",
  },
  {
    icon: <LuBrain className="text-[#43A724] w-6 h-6" />,
    title: "Smart Feedback with AI",
    description:
      "Instantly analyze your answers, tone, and relevance. Improve every time with feedback tailored for virtual internship candidates.",
  },
  {
    icon: <LuTarget className="text-[#43A724] w-6 h-6" />,
    title: "Role-Based Mock Interviews",
    description:
      "Practice interviews for software engineering, product management, business, and digital marketing roles in our internee.pk platform.",
  },
];

const cardDataSecondary = [
  {
    icon: <LuAward className="text-[#43A724] w-8 h-8 mb-4" />,
    title: "Build Real Interview Confidence",
    description:
      "Reduce anxiety and increase success rate through repeated AI-based mock interview sessions.",
  },
  {
    icon: <LuChartArea className="text-[#43A724] w-8 h-8 mb-4" />,
    title: "Become Job-Ready Fast",
    description:
      "Structured interview training that prepares you for real-world scenarios. Perfect for students applying for internships.",
  },
  {
    icon: <LuFileText className="text-[#43A724] w-8 h-8 mb-4" />,
    title: "Track Progress with Reports",
    description:
      "Access detailed performance reports you can share with mentors and hiring managers.",
  },
];

function MockCard() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] font-urbanist">
      <div className="relative overflow-hidden py-16 px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-[#f1f8f4] dark:bg-[#1e1e1e] z-0" />
        <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-[url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80')] bg-cover bg-center z-0" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto space-y-20 z-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left Column */}
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center bg-[#43A724]/10 text-[#43A724] px-5 py-2 rounded-full mb-6">
                <LuBrain className="w-5 h-5 mr-2" />
                AI Mock Interviews
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6 leading-tight">
                AI Mock Interview Platform for Virtual Internships in Pakistan
              </h1>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8">
                Prepare for <strong>technical</strong>, <strong>marketing</strong>, or <strong>business interviews</strong> with our AI-powered mock interview system. Join <strong>Internee.pk’s virtual internship program</strong> to get unlimited access, real-time feedback, and role-specific practice.
              </p>
              <button className="bg-[#43A724] dark:bg-[#30781a] dark:hover:bg-[#1d4a10] text-white hover:bg-[#30781a] text-base sm:text-lg font-semibold px-6 py-3 flex items-center rounded-2xl transition-all duration-300 shadow-md">
                Apply Now for Virtual Internship
                <LuChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 space-y-6">
              {cardDataPrimary.map((card, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 flex items-start gap-4"
                >
                  <div className="h-12 w-12 bg-[#f1f8f4] dark:bg-[#2c2c2c] rounded-xl flex items-center justify-center flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-black dark:text-white mb-2">
                      {card.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid Section */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cardDataSecondary.map((card, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800"
              >
                {card.icon}
                <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MockCard;
