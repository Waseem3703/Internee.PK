const programs = [
  {
    id: "1",
    title: "Health Care",
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodapp-lqii.appspot.com/o/medical-banner-with-doctor-working-laptop.jpg?alt=media&token=3a95b449-3d2b-4a66-980c-52d0ff0d5422",
    description:
      "Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action. Join the frontlines of impact and make your mark in the future of healthcare.",
  },
  {
    id: "2",
    title: "Engineering",
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodapp-lqii.appspot.com/o/studio%20photoshooot.webp?alt=media&token=e1162dae-2827-458b-83b0-42b5c81c34fd",
    description:
      "Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver’s seat of innovation. Whether it’s civil, electrical, mechanical, or software get ready to design, build, and disrupt.",
  },
  {
    id: "3",
    title: "Information Technology",
    image:
      "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-97395.jpg?t=st=1744116424~exp=1744120024~hmac=e2290c6d51bbac21f4c169634764167e5488fea6e81c91e05bda3b7ced293f9d&w=1380",
    description:
      "Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing our IT internships equip you to lead the tech revolution. Step in, gear up, and shape the future of technology.",
  },
];

function GraduatePrograms() {
  return (
    <>
      <div className="bg-white dark:bg-black text-[#171717] dark:text-white transition-colors duration-300 min-h-screen py-20">
        {/* Header Section */}
        <section className="bg-white dark:bg-[#000000] py-10 sm:py-16 lg:py-20">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-black dark:text-white sm:text-5xl lg:text-6xl">
              Graduate Programs
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive graduate programs designed to advance your career and expand your knowledge.
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-16">
          <h2 className="text-center text-3xl font-bold mb-8 text-[#171717] dark:text-white">
            Explore Categories
          </h2>

          <section className="mt-12 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <div
                  key={program.id}
                  className="group relative w-full rounded-xl overflow-hidden bg-white dark:bg-[#000000] shadow-lg dark:shadow-white/10 hover:shadow-xl dark:hover:shadow-white/20 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <a className="block" href={`graduateprogram/${program.title.replace(/\s+/g, '-')}`}>
                    <div className="relative">
                      <img
                        alt={program.title}
                        className="w-full h-64 object-cover rounded-t-xl"
                        src={program.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-xl"></div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-semibold text-black dark:text-white group-hover:text-[#43A724] transition duration-200">
                        {program.title}
                      </h3>
                      <p className="mt-3 text-sm text-black dark:text-white">
                        {program.description}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
    </>
  );
}

export default GraduatePrograms;
