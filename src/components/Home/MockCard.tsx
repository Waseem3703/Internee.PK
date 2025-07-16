import { LuBrain, LuChevronRight, LuMessageSquare, LuTarget } from "react-icons/lu";

function MockCard() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] font-urbanist">
      <div className="relative overflow-hidden py-24 px-6 md:px-16">
        <div className="absolute inset-0 bg-[#f1f8f4] dark:bg-[#1e1e1e]" />
        <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-[url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80')] bg-cover bg-center" />

        <div className="relative max-w-6xl mx-auto space-y-20 z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side */}
            <div className="md:w-1/2">
              <div className="inline-flex items-center bg-[#43A724]/10 text-[#43A724] px-4 py-2 rounded-full mb-6">
                <LuBrain className="w-5 h-5 mr-2" />
                AI Mock Interviews
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-6 leading-tight">
                AI Mock Interview Platform for Virtual Internships in Pakistan
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Prepare for <strong>technical</strong>, <strong>marketing</strong>, or <strong>business interviews</strong> with our AI-powered mock interview system. Join <strong>Internee.pk’s virtual internship program</strong> to get unlimited access, real-time feedback, and role-specific practice.
              </p>

              <button className="bg-[#43A724] dark:bg-[#30781a] dark:hover:bg-[#1d4a10] font-urbanist text-white hover:bg-[#30781a] text-lg font-semibold px-8 flex items-center py-3 rounded-2xl transition-all duration-300 shadow-md">
                Apply Now for Virtual Internship
                <LuChevronRight className="mt-1 ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 space-y-6">
              {/* Card 1 */}
              <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 flex items-start gap-4">
                <div className="h-12 w-12 bg-[#f1f8f4] dark:bg-[#2c2c2c] rounded-xl flex items-center justify-center flex-shrink-0">
                  <LuMessageSquare className="text-[#43A724] w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-black dark:text-white mb-2">
                    Realistic AI Interview Simulations
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Simulate real interview environments powered by AI. Perfect for students seeking <strong>online internship interview practice</strong> or job readiness.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 flex items-start gap-4">
                <div className="h-12 w-12 bg-[#f1f8f4] dark:bg-[#2c2c2c] rounded-xl flex items-center justify-center flex-shrink-0">
                  <LuBrain className="text-[#43A724] w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-black dark:text-white mb-2">
                    Smart Feedback with AI
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Instantly analyze your answers, tone, and relevance. Improve every time with feedback tailored for <strong>virtual internship candidates</strong>.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 flex items-start gap-4">
                <div className="h-12 w-12 bg-[#f1f8f4] dark:bg-[#2c2c2c] rounded-xl flex items-center justify-center flex-shrink-0">
                  <LuTarget className="text-[#43A724] w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-black dark:text-white mb-2">
                    Role-Based Mock Interviews
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Practice interviews for <strong>software engineering</strong>, <strong>product management</strong>, <strong>business</strong>, and <strong>digital marketing</strong> roles in our <strong>internee.pk platform</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default MockCard;
