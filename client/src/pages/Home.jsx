import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <main className="relative w-full h-full bg-[#151515] opacity-90 md:px-[8vw]">
        <div className="">
          <div className="w-full h-[100svh] min-h-[735px] max-h-[1000px] bg-midnight pt-[180px] sm:pt-[200px] text-white antialiased">
            <div className="container mx-auto pb-12 px-[1rem]">
              <p className="font-mono tracking-wider leading-[1.75em] text-[18px] md:w-[50%] font-light max-w-[600px]">
                Seiso rewards you for the responsible disposal of your waste,
                Creating waste into opportunity.
              </p>
              <p className="mt-[10%] sm:mt-[46px] text-[45px] md:text-[80px] lg:text-[98px] leading-snug sm:leading-tight w-[80%] sm:w-[100%] lg:max-w-[1024px]">
                Use Seiso & Earn.
                <br /> One Bin at a time.
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
          <div className="container mx-auto px-[1rem] flex flex-col gap-y-12 lg:grid lg:grid-cols-[0.2fr_0.8fr] py-16 lg:py-[150px] antialiased border-b border-b-[#eee]">
            <h2 className="text-[34px] select-none">What ?</h2>
            <p className="text-[22px] sm:text-[32px] tracking-[0.2px] leading-[1.4em]">
              Founded by Jayesh Yadav, Raj Bhargava and Deepak Vishwakarma in
              2024, Seiso is an impact-driven startup transforming waste
              disposal through smart, IoT-enabled dustbins and a reward-based
              digital ecosystem. Our mission is to make sustainability
              effortless by integrating technology, behavioral change, and
              real-world incentives. With our doorstep waste collection service,
              you no longer need to step out—Seiso comes to you. Clean living,
              delivered.
            </p>
          </div>
          <div className="container mx-auto antialiased">
            <h2 className="px-[1rem] text-[34px] select-none pt-16 md:pt-[150px] pb-4 sm:pb-[36px]">
              {" "}
              Why{" "}
            </h2>
            <div className="w-full flex flex-col gap-y-12 lg:grid lg:grid-cols-2 pb-12 md:pb-[100px] border-b border-b-[#eee]">
              <div className="p-[10%] pb-0">
                <p className="text-[18px] font-proxima opacity-75">01</p>
                <p className="text-[48px] sm:text-[72px] lg:text-[110px] font-bold leading-[1.15em] pt-[40px]">
                  {" "}
                  A cleaner future starts with a smarter system.{" "}
                </p>
              </div>
              <div className="p-[10%] bg-midnight font-proxima text-[white]">
                <p className="text-[18px] opacity-75">01</p>
                <p className="text-[36px] sm:text-[40px] leading-[1.2em] pt-[40px]">
                  {" "}
                  “Change begins when doing the right thing becomes the easiest
                  thing to do.”{" "}
                </p>
                <p className="text-[22px] opacity-75 pt-6 pb-12">- Plato</p>
                <p className="text-[18px] leading-[1.8em] pb-6">
                  {" "}
                  At Seiso, we believe environmental responsibility shouldn't be
                  inconvenient—it should be engaging, rewarding, and accessible
                  to all. Traditional waste systems are broken:
                  under-incentivized, poorly managed, and disconnected from the
                  people they serve. Seiso empowers individuals and communities
                  to participate in sustainability through smart bins, real-time
                  tracking, and doorstep collection. We're not just managing
                  waste—we’re building habits, creating value from garbage, and
                  helping people become part of the solution. The world doesn't
                  need more rules—it needs better tools. Seiso is that tool.{" "}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-12 lg:grid lg:grid-cols-2 py-12 md:py-[100px] border-b border-b-[#eee]">
              <div className="px-[10%] pt-16">
                <p className="text-[18px] font-proxima opacity-75">02</p>
                <p className="text-[48px] sm:text-[72px] lg:text-[110px] font-bold leading-[1.15em] pt-[40px]">
                  {" "}
                  Cleanliness, Made Effortless{" "}
                </p>
              </div>
              <div className="p-[10%] bg-midnight font-proxima text-[white]">
                <p className="text-[18px] opacity-75">02</p>
                <p className="text-[36px] sm:text-[40px] leading-[1.2em] pt-[40px]">
                  {" "}
                  “A clean society isn’t just a dream—it’s a responsibility made
                  easy.”{" "}
                </p>
                <p className="text-[22px] opacity-75 pt-6 pb-12">- Jayesh</p>
                <p className="text-[18px] leading-[1.8em] pb-6">
                  {" "}
                  At Seiso, cleanliness is not just our vision—it’s our mission
                  in action. We believe people want to live in a cleaner world,
                  but the process must be simple, rewarding, and hassle-free.
                  That’s why we bring the solution to your doorstep. No extra
                  effort, no complex steps—just a smart bin, a quick scan, and
                  responsible disposal. You focus on living; we’ll take care of
                  the cleaning.{" "}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-12 lg:grid lg:grid-cols-2 py-12 md:py-[100px] border-b border-b-[#eee]">
              <div className="px-[10%] pt-16">
                <p className="text-[18px] font-proxima opacity-75">03</p>
                <p className="text-[48px] sm:text-[72px] lg:text-[110px] font-bold leading-[1.15em] pt-[40px]">
                  {" "}
                  Technology That Serves the Planet{" "}
                </p>
              </div>
              <div className="p-[10%] bg-midnight font-proxima text-[white]">
                <p className="text-[18px] opacity-75">03</p>
                <p className="text-[36px] sm:text-[40px] leading-[1.2em] pt-[40px]">
                  {" "}
                  “Small actions, when made smarter, create big change”{" "}
                </p>
                <p className="text-[22px] opacity-75 pt-6 pb-12">- Kanye</p>
                <p className="text-[18px] leading-[1.8em] pb-6">
                  {" "}
                  Seiso blends everyday behavior with smart technology to make
                  waste management intuitive and impactful. You don’t need to
                  change your lifestyle—we’ve changed the system. From automated
                  bin tracking to reward-based waste submissions, our innovation
                  ensures that doing good for the environment is no longer a
                  chore, but a natural part of daily life. One scan at a time,
                  we're making sustainability second nature.{" "}
                </p>
              </div>
            </div>
            <div className="container mx-auto px-[1rem] flex flex-col gap-y-12 py-16 lg:py-[150px] antialiased border-b border-b-[#eee] xl:grid xl:grid-cols-[0.2fr_0.8fr]">
              <h2 className="text-[34px] select-none"> As seen in </h2>
              <div className="flex flex-col lg:grid lg:grid-cols-3 gap-x-12 gap-y-12">
                <div className="flex flex-col gap-y-6 border-b-[black] border-b-[2px]">
                  <p className="text-[32px] sm:text-[26px] leading-snug">
                    {" "}
                    — Central Pollution Control Board (CPCB){" "}
                  </p>
                  <p className="font-mono text-[18px] pb-[125px]">
                    {" "}
                    “According to the Central Pollution Control Board (CPCB),
                    only 48% of urban households in India segregate waste at
                    source despite awareness campaigns. Mixed waste leads to
                    landfill overuse and poor recycling outcomes.”{" "}
                  </p>
                </div>
                <div className="flex flex-col gap-y-6 border-b-[black] border-b-[2px]">
                  <p className="text-[32px] sm:text-[26px] leading-snug">
                    {" "}
                    — NITI Aayog and GIZ{" "}
                  </p>
                  <p className="font-mono text-[18px] pb-[125px]">
                    {" "}
                    “A study by NITI Aayog and GIZ highlights that overflowing
                    bins and delayed waste collection are a top cause of urban
                    sanitation complaints.”{" "}
                  </p>
                </div>
                <div className="flex flex-col gap-y-6 border-b-[black] sm:border-b-[2px]">
                  <p className="text-[32px] sm:text-[26px] leading-snug">
                    {" "}
                    — Swachh Survekshan Survey (MoHUA){" "}
                  </p>
                  <p className="font-mono text-[18px] pb-[125px]">
                    {" "}
                    “he Swachh Survekshan Survey (MoHUA) reports that while
                    awareness has grown, citizen participation remains
                    inconsistent due to lack of motivation.”{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <div>
        <footer className="h-fit sm:h-[400px] w-full bg-[#ededed]">
          <div className="container mx-auto w-full h-full flex items-center px-[1em] pt-12 pb-20 sm:py-0 lg:px-12 text-[#999] antialiased">
            <div className="flex flex-col gap-y-12 sm:grid sm:grid-cols-2 items-start h-fit w-full">
              <div className="flex flex-col gap-y-6">
                <h3 className="text-[34px] pb-2 text-[black]"> Contact </h3>
                <a
                  href="mailto:team@thielfellowship.org"
                  rel="noopener noreferrer"
                  className="font-proxima text-[24px] h-[35px] border-b border-b-[#999] w-fit"
                >
                  {" "}
                  team@thielfellowship.org{" "}
                </a>
                <p className="font-proxima text-[18px]">
                  {" "}
                  © 2025 The Thiel Foundation. <br /> All rights reserved.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <h3 className="text-[34px] pb-2 text-[black]"> Navigate </h3>
                <a
                  href="/apply"
                  className="font-proxima text-[21px] h-[33px] border-b border-b-[#999] w-fit"
                >
                  {" "}
                  Apply Now{" "}
                </a>
                <a
                  href="/jobs"
                  className="font-proxima text-[21px] h-[33px] border-b border-b-[#999] w-fit"
                >
                  {" "}
                  Thiel Fellow Job Board{" "}
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
