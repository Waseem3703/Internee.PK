import image_1 from "/HomeImage/Internee-home-1.webp";
import Typewriter from "typewriter-effect";
import { MdOutlineArrowOutward } from "react-icons/md";

function HeroSection() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-20 py-16 gap-10 mt-20">
        {/* Left Content */}
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-5xl text-[rgb(30,37,54)] font-bold">
            <Typewriter
              options={{
                strings: [
                  "Looking for dream internship?",
                  "Join us at Internee.pk!",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </h2>

          <p className="text-lg md:text-xl text-[rgb(30,37,54)] pt-5 pr-6">
            Internee.pk kickstarts students' tech careers with first
            internships, providing industry exposure, practical skills, and
            networking opportunities.
          </p>

          <div className="flex pt-5 gap-4 flex-wrap">
            <button className="cursor-pointer px-6 py-3 rounded-xl border border-[rgb(67,167,36)] hover:bg-[rgb(67,167,36)] hover:text-white duration-300">
              Our Job Portal
            </button>

            <button className="cursor-pointer px-6 py-3 rounded-xl bg-[rgb(43,42,42)] hover:bg-[rgb(34,34,34)] text-white duration-300 flex items-center gap-2">
              Dashboard <MdOutlineArrowOutward size={20} />
            </button>
          </div>
        </div>

        <div className="relative ">
          <img
            src={image_1}
            alt="Home"
            className="relative z-10 w-full object-contain rounded-xl"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
