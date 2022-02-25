import { Link } from 'react-router-dom';
import FacebookIcon from '../../assets/icons/FacebookIcon';
import LinkedInIcon from '../../assets/icons/LinkedInIcon';
import TwitterIcon from '../../assets/icons/TwitterIcon';

const Footer = () => {
  return (
    <footer className="bg-primary-500/10">
      <section className="grid grid-cols-3 px-40 py-10">
        <div className="space-y-2">
          <Link
            to="/"
            className="text-center text-4xl font-semibold text-primary-500"
          >
            Gigwaiting
          </Link>
          <h6 className="text-lg font-medium">Follow Us</h6>
          <div className="flex gap-4 text-gray-500">
            <button className="transform hover:text-primary-600">
              <FacebookIcon className="h-4 w-4 " />
            </button>
            <button className="transform hover:text-primary-600">
              <TwitterIcon className="h-5 w-5" />
            </button>
            <button className="transform hover:text-primary-600">
              <LinkedInIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div>
          <nav className="flex justify-center">
            <ul className="text-lg font-bold text-gray-800">
              <li>
                <Link to="/" className="mt-1 border-b-[3px] pb-0.5 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="mt-1 border-b-[3px] pb-0.5 transition"
                >
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/post-job"
                  className="mt-1 border-b-[3px] pb-0.5 transition"
                >
                  Post Jobs
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h6 className="text-lg font-medium">Support</h6>
          <p className="text-gray-800">Email: gigwaiting@gmail.com</p>
        </div>
      </section>
      <div className="bg-primary-500 p-4 text-center text-sm text-white">
        COPYRIGHT © 2020 GIGWAITING. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
