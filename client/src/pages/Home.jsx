import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function Home() {
  return (
    <div>
      <Navbar />
      <main className="relative w-full h-full">
        <div className="">
          <div className="w-full h-[100svh] min-h-[735px] max-h-[1000px] bg-midnight pt-[150px] sm:pt-[200px] text-white antialiased">
            <div className="container mx-auto pb-12 px-[1rem]">
              <p className="font-mono tracking-wider leading-[1.75em] text-[18px] md:w-[50%] font-light max-w-[600px]">
                Seiso rewards you for the responsible disposal of your waste,
                Creating waste into opportunity.
              </p>
              <p className="mt-[10%] sm:mt-[46px] text-[45px] md:text-[80px] lg:text-[98px] leading-snug sm:leading-tight w-[80%] sm:w-[100%] lg:max-w-[1024px]">
                Use Seiso & Earn. One Bin at a time.
              </p>
              <div className="flex w-[180px] sm:w-[270px] h-[50px] lg:h-[65px] border-[white] border-t-[2px] sm:border-t-[3px] mt-[20%] sm:mt-[100px] group cursor-pointer">
                <Link
                  to="/verify-waste"
                  className="flex items-center justify-baseline gap-3 hover:gap-7 self-end text-[18px] sm:text-[28px] transition-all duration-300"
                >
                  <div>Verify waste</div>
                  <ChevronRight size={28} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
