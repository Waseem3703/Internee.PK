import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-6 md:px-16 py-4 bg-white shadow-md fixed w-full z-50 top-0">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
          <Link to="/">Home</Link>
          <Link to="/Internship">Internship</Link>
          <Link to="/Graduate-Program">Graduate Program</Link>
          <Link to="/Student-Ambassador">Student Ambassador</Link>
        </nav>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex gap-3 items-center">
          <button className="bg-[rgb(67,167,36)] text-white px-4 py-2 rounded-xl hover:bg-white hover:text-[rgb(67,167,36)] hover:border hover:border-[rgb(67,167,36)] duration-300">
            Job Portal
          </button>
          <button className="px-4 py-2 rounded-xl border border-[rgb(67,167,36)] hover:bg-[rgb(67,167,36)] hover:text-white duration-300">
            Dashboard
          </button>
          <FaUserCircle className="text-xl" />
          <MdOutlineWbSunny className="text-xl" />
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-white shadow-lg mt-[64px] space-y-4 z-40 relative">
          <nav className="flex flex-col gap-3 text-gray-700 font-medium">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/Internship" onClick={() => setMobileMenuOpen(false)}>Internship</Link>
            <Link to="/Graduate-Program" onClick={() => setMobileMenuOpen(false)}>Graduate Program</Link>
            <Link to="/Student-Ambassador" onClick={() => setMobileMenuOpen(false)}>Student Ambassador</Link>
          </nav>
          <div className="flex flex-col gap-2 pt-4">
            <button className="bg-[rgb(67,167,36)] text-white px-4 py-2 rounded-xl hover:bg-white hover:text-[rgb(67,167,36)] hover:border hover:border-[rgb(67,167,36)] duration-300">
              Job Portal
            </button>
            <button className="px-4 py-2 rounded-xl border border-[rgb(67,167,36)] hover:bg-[rgb(67,167,36)] hover:text-white duration-300">
              Dashboard
            </button>
          </div>
        </div>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
