import { Link } from 'react-router-dom';
import logoFull from '../assets/logo-full.png';

export default function Navbar() {
  return (
    <nav className="bg-[var(--color-raimes-purple)] px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logoFull}
            alt="Responsible AI Mining Evaluation System"
            className="h-12"
          />
        </div>

        <div className="flex items-center gap-12">
          <Link
            to="/"
            className="text-white font-semibold hover:text-[var(--color-raimes-yellow)] transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/assessment-results"
            className="text-white font-semibold hover:text-[var(--color-raimes-yellow)] transition-colors"
          >
            Assessment Results
          </Link>
          <Link
            to="/data-validation"
            className="text-white font-semibold hover:text-[var(--color-raimes-yellow)] transition-colors"
          >
            Data Validation
          </Link>
          <Link
            to="/final-report"
            className="text-white font-semibold hover:text-[var(--color-raimes-yellow)] transition-colors"
          >
            Final Report
          </Link>
        </div>

        <div className="flex items-center">
          <div className="w-3 h-12 bg-[var(--color-raimes-yellow)]"></div>
          <div className="ml-6 w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center overflow-hidden">
            <svg
              className="w-10 h-10 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
