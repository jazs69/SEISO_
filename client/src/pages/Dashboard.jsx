import Navbar from "../components/Navbar";
import { useUser } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useUser();

  // Sanitize username before rendering
  const sanitize = (str) =>
    typeof str === "string" ? str.replace(/[^a-zA-Z0-9_]/g, "") : "Guest";

  return (
    <div className="min-h-screen bg-[#151515] opacity-90 px-[8vw]">
      <h1>Welcome, {sanitize(user?.username) || "Guest"}!</h1>
      <p>Your seiso amount: {user?.seisoAmount || 0}</p>
      <p>Your seiso coins: {user?.seisoCoins || 0}</p>

      <div className="flex max-w-3xl lg:max-w-4xl mx-auto shadow-xl rounded-r-2xl overflow-hidden">
        <div className="w-1/3 lg:w-[300px] flex-shrink-0 relative bg-lime-100 p-3 sm:p-4 flex flex-col">
          <div className="absolute top-4 left-4 sm:top-5 sm:left-5 text-fuchsia-600 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </div>

          <div className="relative flex-grow flex items-center justify-center pt-8 sm:pt-10 md:pt-12">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Jenna Kutcher"
              className="block max-w-[80%] max-h-[80%] object-contain"
            />

            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 150"
              preserveAspectRatio="xMidYMid meet"
              style={{ pointerEvents: "none" }}
            >
              <path
                d="M50 12
                 C 18 15, 10 45, 20 75     /* Top-left to mid-left */
                 C 25 95, 15 120, 30 135  /* Mid-left to bottom-left */
                 L 40 140                  /* Bottom curve start */
                 C 60 145, 70 140, 75 130  /* Bottom curve to bottom-right */
                 C 90 115, 95 85, 80 55  /* Bottom-right to mid-right */
                 C 70 30, 65 15, 50 12 Z" /* Mid-right to top-center, closing the loop */
                fill="none"
                stroke="#D90094"
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="w-2/3 lg:flex-grow bg-slate-50 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col relative rounded-r-2xl">
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)",
              backgroundSize: "3rem 3rem",
              opacity: 0.25,
            }}
          ></div>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-semibold text-black leading-tight mb-auto">
            “This is a must-have for creators and entrepreneurs. Seriously a
            game-changer!”
          </p>

          <div className="mt-6 sm:mt-8">
            <p className="text-[0.8rem] sm:text-sm font-semibold text-gray-800">
              JENNA KUTCHER,
            </p>
            <p className="text-[0.7rem] sm:text-xs text-gray-500 tracking-wider">
              1M FOLLOWERS
            </p>
          </div>

          <a
            href="#"
            className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 text-[0.7rem] sm:text-xs font-bold text-gray-700 flex items-center group"
          >
            READ MORE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 sm:ml-1.5 transform transition-transform duration-200 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
