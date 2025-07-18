const programs = [
  {
    id: "1",
    title: "Health Care",
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodapp-lqii.appspot.com/o/medical-banner-with-doctor-working-laptop.jpg?alt=media&token=3a95b449-3d2b-4a66-980c-52d0ff0d5422",
    description:
      "Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action.",
  },
  {
    id: "2",
    title: "Engineering",
    image:
      "https://firebasestorage.googleapis.com/v0/b/foodapp-lqii.appspot.com/o/studio%20photoshooot.webp?alt=media&token=e1162dae-2827-458b-83b0-42b5c81c34fd",
    description:
      "Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver’s seat of innovation.",
  },
  {
    id: "3",
    title: "Information Technology",
    image:
      "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-97395.jpg?t=st=1744116424~exp=1744120024~hmac=e2290c6d51bbac21f4c169634764167e5488fea6e81c91e05bda3b7ced293f9d&w=1380",
    description:
      "Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing — our IT internships equip you to lead the tech revolution.",
  },
];

function GraduatePrograms() {
  return (
    <div className="bg-white dark:bg-black text-[#171717] dark:text-white transition-colors duration-300 min-h-screen py-10 sm:py-16 lg:py-20">
      {/* Header */}
      <section className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white">
          Graduate Programs
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our comprehensive graduate programs designed to advance your career and expand your knowledge.
        </p>
      </section>

      {/* Categories */}
      <section className="mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#171717] dark:text-white mb-8">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group rounded-xl overflow-hidden bg-white dark:bg-[#111111] shadow-md dark:shadow-white/10 hover:shadow-lg dark:hover:shadow-white/20 transition-transform duration-300 transform hover:scale-105"
            >
              <a
                href={`graduateprogram/${program.title.replace(/\s+/g, "-")}`}
                className="block"
              >
                <div className="relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-52 sm:h-64 object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-xl" />
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-xl font-semibold text-black dark:text-white group-hover:text-[#43A724] transition-colors duration-200">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-sm text-black dark:text-gray-300">
                    {program.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default GraduatePrograms;
