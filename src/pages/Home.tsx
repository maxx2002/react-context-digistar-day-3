import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-900 bg-gray-200 pb-32">
      <div className="flex flex-col items-center">
        <div className="size-48 rounded-full overflow-hidden mb-4 border-4 border-gray-900">
          <img
            src="/images/max.jpeg"
            alt="Maximus Aurelius"
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-5xl font-bold text-gray-900">
          Maximus Aurelius Wiranata
        </h1>
        <p className="my-6 text-xl text-gray-600">
          Welcome to my portfolio. Explore my work and get in touch!
        </p>
      </div>
      <div className="flex flex-col items-center space-y-2 text-gray-600">
        <Link to="mailto:maxwiranata@gmail.com" target="_blank">
          Email: maxwiranata@gmail.com
        </Link>
        <Link
          to="https://www.linkedin.com/in/maximus-aurelius-wiranata/"
          target="_blank"
        >
          LinkedIn: linkedin.com/in/maximus-aurelius-wiranata
        </Link>
        <Link to="https://github.com/maxx2002" target="_blank">
          GitHub: github.com/maxx2002
        </Link>
      </div>
    </div>
  );
};

export default Home;
