import * as Icons from "lucide-react";
import { LucideTrophy, LucideSparkles, LucideDollarSign } from "lucide-react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

const btnfeatures = [
  {
    icon: LucideTrophy,
    title: "Comprehensive Guidance",
    description: "Everything you need to succeed in the AI industry",
  },
  {
    icon: LucideSparkles,
    title: "Industry-Ready Insights",
    description: "Stay updated on the latest AI trends",
  },
  {
    icon: LucideDollarSign,
    title: "Monetization Options",
    description: "Share your AI knowledge and earn income",
  },
];

export default function AICard() {
  const features = [
    {
      id: 1,
      title: "AI Resume Building",
      description:
        "Stand out in the AI job market with our professional resume-building guide. Learn how to highlight your AI skills, experience, and key accomplishments to catch the attention of top employers.",
      icon: "PenTool",
    },
    {
      id: 2,
      title: "Cover Letter Creation",
      description:
        "Create compelling cover letters that showcase your passion for AI and demonstrate your value to employers. Make a strong first impression that speaks directly to your AI expertise.",
      icon: "BookOpen",
    },
    {
      id: 3,
      title: "Interview Preparation",
      description:
        "Ace your AI job interviews with confidence through practice questions, interview strategies, and tips for answering technical AI-related queries.",
      icon: "Users",
    },
    {
      id: 4,
      title: "Industry Insights",
      description:
        "Stay ahead of the curve with up-to-date insights on the latest AI trends, market demands, and emerging technologies in the AI industry.",
      icon: "Lightbulb",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80')",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center bg-[#43A724]/10 text-[#43A724] px-4 py-2 rounded-full mb-6">
              <Icons.Brain className="w-5 h-5 mr-2" />
              Your AI Career Journey
            </div>
            <h1 className="text-5xl font-extrabold text-black dark:text-white mb-6 leading-tight">
              AI Career Coach: Your Ultimate Guide to Building a Successful AI
              Career
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Looking to kickstart your career in the AI industry? Our AI Career
              Coach platform offers expert guidance in resume building, cover
              letter creation, interview preparation, quizzes, and industry
              insights.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {features.map((item, index) => {
            const Icon = (Icons[item.icon as keyof typeof Icons] ||
              Icons.Zap) as React.ComponentType<{ className?: string }>;
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#1e1e1e] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 transform hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 bg-[#f1f8f4] dark:bg-[#2c2c2c] rounded-2xl flex items-center justify-center">
                    <Icon className="text-[#43A724] w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-black dark:text-white ml-4">
                    {item.title}
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-24 bg-[#f1f8f4] dark:bg-[#1e1e1e] rounded-3xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center bg-[#43A724]/10 text-[#43A724] px-6 py-2 rounded-full mb-6">
              <HiOutlineCurrencyDollar className="w-5 h-5 mr-2" />
              Monetize Your Expertise
            </div>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
              Share Your Knowledge & Earn
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-12">
              Are you an AI expert? Share your knowledge through courses,
              tutorials, or content. Build your personal brand and generate
              income while helping others succeed in their AI careers.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Why Choose AI Career Coach?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {btnfeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1e1e1e] p-8 rounded-2xl text-center"
                >
                  <Icon className="text-[#43A724] w-8 h-8 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
