import { useState } from "react";
import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/solid";
import useActivePage from "../../hooks/useActivePage";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { activePage } = useActivePage();

  return (
    <header className="w-full py-3 px-8 md:px-12 lg:px-20 border-b-2 border-primary-600">
      <div className="grid grid-cols-3 w-full">
        <nav className="flex items-center">
          <ul className="flex gap-10 lg:gap-16 text-sm">
            <li>
              <Link
                to="/"
                className={`
                border-b-[3px] pb-0.5 mt-1 transition
              ${
                activePage === "home" || !activePage
                  ? "border-primary-500"
                  : "border-transparent"
              }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/post-job"
                className={`
                border-b-[3px] pb-0.5 mt-1 transition
              ${
                activePage === "post-job"
                  ? "border-primary-500"
                  : "border-transparent"
              }`}
              >
                Post Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className={`
                border-b-[3px] pb-0.5 mt-1 transition
              ${
                activePage === "jobs"
                  ? "border-primary-500"
                  : "border-transparent"
              }`}
              >
                Find Jobs
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          to="/"
          className="text-center font-semibold text-primary-500 text-4xl"
        >
          Gigwaiting
        </Link>
        <div className="flex justify-end items-center text-sm gap-8">
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="flex gap-1 items-center">
                <UserIcon className="w-6 h-6 text-primary-500" />
                Mike
              </Link>
              <div>
                <button
                  className="border border-primary-500 text-primary-500 font-semibold hover:text-primary-600 hover:border-primary-600 py-1.5 px-6 rounded-xl transition"
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                >
                  Sign out
                </button>
              </div>
            </>
          ) : (
            <button
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-1.5 px-8 rounded-xl transition"
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              Sign in
            </button>
          )}
        </div>{" "}
      </div>
    </header>
  );
};

export default Header;
