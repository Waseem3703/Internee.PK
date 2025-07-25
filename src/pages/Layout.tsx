import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";
import Footer from "../components/Home/Footer";

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <>
      <header className="flex justify-between items-center px-6 md:px-16 py-4 bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 top-0 text-gray-800 dark:text-gray-100">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-2xl">
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex gap-6 font-medium items-center">
          <Link to="/">Home</Link>
          <Link to="/internship">Internship</Link>
          <Link to="/graduate-program">Graduate Program</Link>
          <Link to="/Student-Ambassador">Student Ambassador</Link>
        </nav>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex gap-3 items-center">
          <button className="px-4 py-2 rounded-xl border border-[rgb(67,167,36)] bg-[rgb(67,167,36)] text-white hover:bg-white hover:text-[rgb(67,167,36)] duration-300">
            Job Portal
          </button>
          <button className="px-4 py-2 rounded-xl border border-[rgb(67,167,36)] hover:bg-[rgb(67,167,36)] hover:text-white duration-300">
            Dashboard
          </button>
          <FaUserCircle className="text-xl" />
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 rounded-full text-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            title="Toggle Dark Mode"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-white dark:bg-gray-900 shadow-lg mt-[64px] space-y-4 z-40 relative text-gray-800 dark:text-gray-100 transition-colors duration-300">
          <nav className="flex flex-col gap-3 font-medium">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/internship" onClick={() => setMobileMenuOpen(false)}>Internship</Link>
            <Link to="/graduate-program" onClick={() => setMobileMenuOpen(false)}>Graduate Program</Link>
            <Link to="/student-ambassador" onClick={() => setMobileMenuOpen(false)}>Student Ambassador</Link>
          </nav>
          <div className="flex flex-col gap-2 pt-4">
            <button className="bg-[rgb(67,167,36)] text-white px-4 py-2 rounded-xl hover:bg-white hover:text-[rgb(67,167,36)] hover:border hover:border-[rgb(67,167,36)] duration-300">
              Job Portal
            </button>
            <button className="px-4 py-2 rounded-xl border border-[rgb(67,167,36)] hover:bg-[rgb(67,167,36)] hover:text-white duration-300">
              Dashboard
            </button>
            <button
              onClick={() => {
                toggleDarkMode();
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 rounded-md text-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      )}

      {/* Main */}
      <main className="bg-white dark:bg-gray-950 min-h-screen pt-[70px] transition-colors duration-300">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
