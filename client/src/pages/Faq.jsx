import React from "react";
import Navbar from "../components/Navbar";

function Faq() {
  return (
    <div>
      <Navbar />
      <main class="relative w-full h-full">
        <div class="">
          <div class="flex w-full h-[100svh] max-h-[1000px] bg-midnight text-white antialiased">
            <div class="self-center container mx-auto px-[1em] h-fit py-12">
              <h1 class="text-[98px]"> FAQ </h1>
              <p class="font-mono text-[18px] tracking-wider leading-[1.7em] pt-2 max-w-[800px]">
                {" "}
                The Thiel Fellowship gives $100,000 to young people who want to
                build new things instead of sitting in a classroom.{" "}
              </p>
            </div>
          </div>
          <div class="bg-white">
            <div class="container mx-auto px-[1rem] flex flex-col gap-y-12 py-16 lg:py-[150px] antialiase">
              <div class="flex flex-col lg:grid lg:grid-cols-3 gap-x-12 gap-y-12">
                <div class="flex flex-col gap-y-6 border-b-[black] border-b-[2px]">
                  <p class="text-[32px] sm:text-[26px] leading-snug font-bold">
                    What is the Fellowship?
                  </p>
                  <p class="font-mono text-[18px] pb-[125px]">
                    The Thiel Fellowship is a two-year, $100,000 grant for young
                    people who want to build new things instead of sitting in a
                    classroom.
                  </p>
                </div>
                <div class="flex flex-col gap-y-6 border-b-[black] border-b-[2px]">
                  <p class="text-[32px] sm:text-[26px] leading-snug font-bold">
                    How does the grant work?
                  </p>
                  <p class="font-mono text-[18px] pb-[125px]">
                    Fellows receive $100,000, spread out over two years. We do
                    not take equity in your company.
                  </p>
                </div>
                <div class="flex flex-col gap-y-6 border-b-[black] border-b-[2px]">
                  <p class="text-[32px] sm:text-[26px] leading-snug font-bold">
                    How many Fellows do you select?
                  </p>
                  <p class="font-mono text-[18px] pb-[125px]">
                    Between 20 and 30 each year.
                  </p>
                </div>
                <div class="flex flex-col gap-y-6 border-b-[black] border-b-[2px]">
                  <p class="text-[32px] sm:text-[26px] leading-snug font-bold">
                    What is the age limit to apply?
                  </p>
                  <p class="font-mono text-[18px] pb-[125px]">
                    Anyone aged 22 or younger is eligible to apply.
                  </p>
                </div>
                <div class="flex flex-col gap-y-6 border-b-[black] border-b-[2px]">
                  <p class="text-[32px] sm:text-[26px] leading-snug font-bold">
                    Can I apply to the Fellowship if I’m still in school?
                  </p>
                  <p class="font-mono text-[18px] pb-[125px]">
                    Yes — though if you’re selected you’ll need to drop out in
                    order to accept the Fellowship.
                  </p>
                </div>
                <div class="flex flex-col gap-y-6 border-b-[black] border-b-[2px]">
                  <p class="text-[32px] sm:text-[26px] leading-snug font-bold">
                    Do I need to drop out to accept the Fellowship?
                  </p>
                  <p class="font-mono text-[18px] pb-[125px]">Yes.</p>
                </div>
                <div class="flex flex-col gap-y-6 border-b-[black] border-b-[2px]">
                  <p class="text-[32px] sm:text-[26px] leading-snug font-bold">
                    Am I eligible for the fellowship if I’ve received an
                    undergraduate degree?
                  </p>
                  <p class="font-mono text-[18px] pb-[125px]">No.</p>
                </div>
                <div class="flex flex-col gap-y-6 border-b-[black] border-b-[2px]">
                  <p class="text-[32px] sm:text-[26px] leading-snug font-bold">
                    Do I need to have a company or is an idea enough?
                  </p>
                  <p class="font-mono text-[18px] pb-[125px]">
                    You don’t need to have incorporated a company or built a
                    full product yet, but at a minimum you’ll need to
                    demonstrate meaningful progress toward a concrete vision.
                  </p>
                </div>
                <div class="flex flex-col gap-y-6 border-b-[black] border-b-[2px]">
                  <p class="text-[32px] sm:text-[26px] leading-snug font-bold">
                    Do you only award Fellowships to software engineers?
                  </p>
                  <p class="font-mono text-[18px] pb-[125px]">
                    No. Some Thiel Fellows are programmers, but others have
                    started nonprofits, created consumer products, launched
                    media companies, and built hardware. We look to support
                    young people who want to bring their ideas to the world.
                  </p>
                </div>
                <div class="flex flex-col gap-y-6 border-b-[black] border-b-[2px]">
                  <p class="text-[32px] sm:text-[26px] leading-snug font-bold">
                    Do I need a team to apply?
                  </p>
                  <p class="font-mono text-[18px] pb-[125px]">
                    No — we review and accept applicants as individuals.
                  </p>
                </div>
                <div class="flex flex-col gap-y-6 border-b-[black] border-b-[2px]">
                  <p class="text-[32px] sm:text-[26px] leading-snug font-bold">
                    If I receive the Fellowship, do I need to move to San
                    Francisco?
                  </p>
                  <p class="font-mono text-[18px] pb-[125px]">
                    No. Thiel Fellows are based all over the world.
                  </p>
                </div>
                <div class="flex flex-col gap-y-6 border-b-[black] border-b-[2px]">
                  <p class="text-[32px] sm:text-[26px] leading-snug font-bold">
                    Is there an application deadline?
                  </p>
                  <p class="font-mono text-[18px] pb-[125px]">
                    No - we accept applications year round. If you’re working on
                    something cool, apply now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Faq;
