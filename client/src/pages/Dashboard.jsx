import Navbar from "../components/Navbar";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Dashboard = () => {
  const { user } = useUser();

  // Sanitize username before rendering
  const sanitize = (str) =>
    typeof str === "string" ? str.replace(/[^a-zA-Z0-9_]/g, "") : "Guest";

  return (
    <div className="min-h-screen bg-[#151515] opacity-90 px-[8vw] py-28">
      <p className="mt-[10%] sm:mt-[46px] text-[45px] md:text-[80px] lg:text-[98px] leading-snug sm:leading-tight w-[80%] sm:w-[100%] lg:max-w-[1024px]">
        Welcome, {sanitize(user?.username)}😙
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full border-b-2 border-white pb-32 md:space-x-16">
        <div className="text-center border-b border-black py-16">
          <p className="text-[45px] md:text-[80px] lg:text-[98px] leading-snug sm:leading-tight text-green-500">
            {user?.seisoAmount}
          </p>
          <p className="font-mono tracking-wider leading-[1.75em] text-[18px] font-light">
            Total waste disposed
          </p>
        </div>
        <div className="text-center border-b border-black py-16">
          <p className="text-[45px] md:text-[80px] lg:text-[98px] leading-snug sm:leading-tight text-green-500">
            {user?.seisoCoins}
          </p>
          <p className="font-mono tracking-wider leading-[1.75em] text-[18px] font-light">
            Total rewards earned
          </p>
        </div>
        <div className="text-center border-b border-black py-16">
          <p className="text-[45px] md:text-[80px] lg:text-[98px] leading-snug sm:leading-tight text-green-500">
            {user?.seisoAmount}
          </p>
          <p className="font-mono tracking-wider leading-[1.75em] text-[18px] font-light">
            Highest waste disposer
          </p>
          <p className="font-mono tracking-wider leading-[1.75em] text-[18px] font-light">
            {user?.highestWasteDisposer}
          </p>
        </div>
        <div className="flex w-[180px] sm:w-[270px] h-[50px] lg:h-[65px] border-[white] border-t-[2px] sm:border-t-[3px] mt-[20%] sm:mt-[100px] group cursor-pointer">
          <Link
            to="/verify-waste"
            className="flex items-center justify-baseline gap-3 hover:gap-7 self-end text-[18px] sm:text-[28px] transition-all duration-300 animate__animated animate__pulse animate__infinite"
          >
            <div>Redeem reward</div>
            <ChevronRight size={28} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
