import logo from "../../assets/logo.png";
import { CiLinkedin, CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <>
      <footer className="bg-gray-100 text-gray-700 dark:bg-[#121212] dark:text-gray-300 font-urbanist">
        <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-12">
          <div className="border-b border-gray-300 dark:border-gray-700 pb-8 flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                Subscribe to Newsletter
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
                Subscribe to our newsletter and get exclusive insights, industry
                trends.
              </p>
            </div>
            <div className="flex items-center w-full max-w-sm rounded-full bg-white dark:bg-[#1e1e1e] shadow-md overflow-hidden">
              <input
                type="email"
                className="flex h-10 w-full rounded-md border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 border-none focus:ring-0 bg-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500 px-6 py-2"
                placeholder="Enter your email"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium 
              ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
              focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-14 bg-[#41a223] hover:bg-green-600 text-white px-8 py-2 mr- rounded-full">
                Subscribe
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between gap-6">
            <div className="flex flex-col items-start">
              <img
                alt="Logo"
                loading="lazy"
                width="180"
                height="80"
                decoding="async"
                data-nimg="1"
                className="block dark:hidden"
                src={logo}
              />
              <p className="text-sm text-[#556276] dark:text-gray-400 mt-4 max-w-sm">
                The ultimate platform designed to turbocharge the IT sector in
                Pakistan.
              </p>
              <p className="mt-6 flex items-center space-x-2 text-sm">
                <span className="text-gray-500 dark:text-gray-400">📞</span>
                <span>+92 312 3023645</span>
              </p>
              <div className="mt-4 flex space-x-3">
                <div className="bg-[#41a223] flex items-center justify-center p-2 rounded-full text-white text-2xl">
                  <CiFacebook />
                </div>

                <div className="bg-[#41a223] flex items-center justify-center p-2 rounded-full text-white text-2xl">
                  <CiTwitter />
                </div>

                <div className="bg-[#41a223] flex items-center justify-center p-2 rounded-full text-white text-2xl">
                  <CiLinkedin />
                </div>

                <div className="bg-[#41a223] flex items-center justify-center p-2 rounded-full text-white text-2xl">
                  <CiInstagram />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-16 md:gap-32">
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-3">
                  Company
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>Home</li>
                  <li>Student Ambassador</li>
                  <li>Interns Profiles</li>
                  <li>About Us</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-3">
                  Resources
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>Community</li>
                  <li>Certification</li>
                  <li>Scholarships</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between text-xs text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 pt-4">
            <p>Copyright © 2025 internee.pk</p>
            <div className="flex space-x-4">
              <div>Terms of Use</div>
              <div>Privacy Policy</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
