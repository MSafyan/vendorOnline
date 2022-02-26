import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/solid';
import useActivePage from '../../hooks/useActivePage';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import useLoggedIn from '../../hooks/useLoggedIn';

const Header = () => {
  const { isLoggedIn, logout } = useLoggedIn();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const { activePage } = useActivePage();

  return (
    <header className="w-full border-b-2 border-primary-600 py-3 px-8 md:px-12 lg:px-20">
      <div className="grid w-full grid-cols-3">
        <nav className="flex items-center">
          <ul className="flex gap-10 text-sm lg:gap-16">
            <li>
              <Link
                to="/"
                className={`
                mt-1 border-b-[3px] pb-0.5 transition
              ${
                activePage === 'home' || !activePage
                  ? 'border-primary-500'
                  : 'border-transparent'
              }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/post-job"
                className={`
                mt-1 border-b-[3px] pb-0.5 transition
              ${
                activePage === 'post-job'
                  ? 'border-primary-500'
                  : 'border-transparent'
              }`}
              >
                Post Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className={`
                mt-1 border-b-[3px] pb-0.5 transition
              ${
                activePage === 'jobs'
                  ? 'border-primary-500'
                  : 'border-transparent'
              }`}
              >
                Find Jobs
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          to="/"
          className="text-center text-4xl font-semibold text-primary-500"
        >
          Gigwaiting
        </Link>
        <div className="flex items-center justify-end text-sm">
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="flex items-center gap-1">
                <UserIcon className="h-6 w-6 text-primary-500" />
                Mike
              </Link>
              <div className="ml-8">
                <button
                  className="rounded-xl border border-primary-500 py-1.5 px-6 font-semibold text-primary-500 transition hover:border-primary-600 hover:text-primary-600"
                  onClick={logout}
                >
                  Sign out
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                className="rounded-xl bg-primary-500 py-1.5 px-8 font-semibold text-white transition hover:bg-primary-600"
                onClick={() => {
                  setIsLoginModalOpen(true);
                }}
              >
                Sign in
              </button>
              <button
                className="ml-4 rounded-xl border border-primary-500 py-1.5 px-8 font-semibold text-primary-500 transition hover:border-primary-600 hover:text-primary-600"
                onClick={() => {
                  setIsSignupModalOpen(true);
                }}
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        setIsOpen={setIsLoginModalOpen}
        openSignUp={() => {
          setIsSignupModalOpen(true);
        }}
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        setIsOpen={setIsSignupModalOpen}
        openLogin={() => {
          setIsLoginModalOpen(true);
        }}
      />
    </header>
  );
};

export default Header;
