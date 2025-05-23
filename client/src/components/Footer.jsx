// import React from "react";
// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <footer className="relative md:mt-32 bg-black rounded-t-3xl">
//       <div className="bg-black text-white py-6 md:pt-40">
//         <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
//           {/* Left Section */}
//           <div className="text-center md:text-left">
//             <h2 className="text-4xl font-bold mb-4 text-lime-400">Seiso</h2>
//             <p className="text-gray-200 text-sm md:text-base px-4 sm:px-0">
//               At the heart of our waste management process is a commitment to
//               nature, harmonized with science.
//             </p>
//             <div className="flex justify-center md:justify-normal items-center gap-8 mt-4 text-xl">
//               <Link to="">{/* <FaInstagram /> */}</Link>
//               <Link to="">{/* <FaLinkedinIn /> */}</Link>
//               <Link to="">{/* <FaSquareFacebook /> */}</Link>
//               <Link to="">{/* <FaYoutube /> */}</Link>
//             </div>
//           </div>

//           {/* quick links Section */}
//           <div className="flex flex-col md:items-start space-y-2 md:text-left sm:pl-16">
//             <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
//             <ul>
//               {[
//                 "Home",
//                 "FAQ",
//                 "Dashboard",
//                 "Schedule Pickup",
//                 "Verify Waste",
//               ].map((link, index) => (
//                 <li key={index}>
//                   <Link to="/" className="hover:text-gray-400 text-sm pl-6">
//                     {link}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services Section */}
//           {/* <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
//             <h2 className="text-2xl font-bold mb-4">Services</h2>

//             <ul className="space-y-2">
//               {[
//                 "Residential Waste Collection",
//                 "Commercial Waste Management",
//                 "Industrial Waste Management",
//                 "E-Waste Management Service",
//                 "Event Waste Management Service",
//                 "Purchase of Scrap",
//               ].map((service, index) => (
//                 <li key={index}>
//                   <Link to="/" className="hover:text-gray-400 text-sm">
//                     {service}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div> */}

//           {/* Contact Section */}
//           <div className="flex flex-col md:items-start">
//             <h2 className="text-2xl font-bold mb-4">Contact</h2>
//             <div className="flex items-center gap-5">
//               <div className="text-xl">{/* <MdAttachEmail /> */}</div>
//               <p className="text-gray-400 mb-4 text-sm md:text-base">
//                 seisoglobal@gmail.Com
//               </p>
//             </div>
//             <div className="flex items-center gap-5">
//               <div className="text-xl">{/* <FaPhoneVolume /> */}</div>
//               <p className="text-gray-400 mb-4 text-sm md:text-base">
//                 +91 7004099889
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="h-1 bg-gradient-to-r to-black via-lime-200 from-lime-600"></div>
//       <div className="flex flex-col md:flex-row items-center justify-between lg:px-20 py-6 bg-black text-gray-300">
//         <p>&copy; 2025 Seiso Global. All Rights Reserved.</p>
//         <p>
//           Designed by{" "}
//           <span className="text-xl font-semibold">Jayesh Yadav</span>.
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

// Helper function for future input sanitization (if any input is added)
// const isSafeInput = (str) =>
//   typeof str === "string" && /^[a-zA-Z0-9 _\-@.]*$/.test(str);

function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-y-12 sm:grid sm:grid-cols-3 items-start h-fit w-full px-[8vw] py-24 bg-[#151515] opacity-90">
        <div className="flex flex-col gap-y-6">
          <h3 className="text-[34px] pb-2"> Contact </h3>
          <a
            href="seisoglobal@gmail.com"
            rel="noopener noreferrer"
            className="font-proxima text-[24px] h-[35px] border-b border-b-[#999] w-fit"
          >
            {" "}
            seisoglobal@gmail.com{" "}
          </a>
          <p className="font-proxima text-[18px]"> +91 7004099889 </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-[34px] pb-2"> Navigate </h3>
          <Link
            to="/verify-waste"
            className="font-proxima text-[21px] h-[33px] border-b border-b-[#999] w-fit"
          >
            {" "}
            Verify Waste{" "}
          </Link>
          <Link
            to="/jobs"
            className="font-proxima text-[21px] h-[33px] border-b border-b-[#999] w-fit"
          >
            {" "}
            Seiso Job Board{" "}
          </Link>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-[34px] pb-2"> Follow us </h3>
          <div className="flex gap-10">
            <a
              href="https://www.instagram.com/seiso.in_/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-proxima text-[21px] h-[33px] border-b border-b-[#999] w-fit"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576157545684"
              target="_blank"
              rel="noopener noreferrer"
              className="font-proxima text-[21px] h-[33px] border-b border-b-[#999] w-fit"
            >
              <Facebook />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576157545684"
              target="_blank"
              rel="noopener noreferrer"
              className="font-proxima text-[21px] h-[33px] border-b border-b-[#999] w-fit"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r to-black via-lime-200 from-lime-600"></div>
      <div className="flex flex-col md:flex-row items-center justify-between lg:px-20 py-6 bg-black text-gray-300">
        <p>&copy; 2025 Seiso Global. All Rights Reserved.</p>
        <p>
          Designed by{" "}
          <span className="text-xl font-semibold">Jayesh Yadav</span>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
