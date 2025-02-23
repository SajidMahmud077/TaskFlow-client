import { useState, useEffect } from "react";
import logo from '../../assets/flowlogo.png';
import TaskBoard from '../TaskBoard/TaskBoard'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const user = {
    name: "Sajid Mahmud",
    avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest("#logo-sidebar") && !event.target.closest("#menu-btn")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 w-64 h-screen bg-white  text-white shadow-xl transition-transform flex flex-col justify-center items-center ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <a href="#" className="flex gap-3 text-2xl font-bold mb-8">
            <img className="h-12 w-12" src={logo} alt="Logo" />
            <span className="text-gray-700 font-roboto text-3xl">Task<span className='text-orange-500  font-roboto text-3xl'>FLOW</span></span>
          </a>

          {/* Sidebar Items */}
          <ul className="space-y-6">
            <li>
              <a href="#" className="block text-gray-800 font-roboto px-4 py-2 text-lg font-medium  rounded-lg">
                Your Task
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 font-roboto px-4 py-2 text-lg font-medium  rounded-lg">
                Create Task
              </a>
            </li>
            <li>
              <a href="#" className="block font-roboto text-gray-800 px-4 py-2 text-lg font-medium  rounded-lg">
                Manage Task
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 sm:ml-64">
        {/* Navbar */}
        <nav className="bg-white z-40 shadow-md p-4 flex items-center justify-between fixed top-0 left-0 right-0 sm:left-64 ">
          {/* Sidebar Toggle Button (Small Screens) */}
          <button
            id="menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white rounded-lg sm:hidden hover:bg-gray-700"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>

          
          <div className="flex-1 flex justify-start">
          <a href="#" className="flex gap-3 text-2xl font-bold mb-8 mt-4">
            <img className="h-8 w-8" src={logo} alt="Logo" />
            <span className="text-gray-700 font-roboto text-3xl">Task<span className='text-orange-500  font-roboto text-3xl'>FLOW</span></span>
          </a>
          </div>

          {/* Profile Dropdown */}
          <div id="profile-dropdown" className="relative lg:mr-18">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img className="rounded-full" alt="User Profile" src={user.avatar} />
              </div>
            </button>

            {isDropdownOpen && (
              <ul className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                <li className="px-4 py-2 text-gray-700">{user.name}</li>
                <hr />
                <li>
                  <button
                    className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                    onClick={() => console.log("Logged out")}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </nav>

        {/* Page Content */}
        <main className="p-4 mt-24">
        <TaskBoard/>
        </main>
      </div>
    </div>
  );
};

export default SideBar;
