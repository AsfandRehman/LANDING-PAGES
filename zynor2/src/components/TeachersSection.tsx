"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

type Teacher = {
  name: string;
  role: string;
  img: string;
};

const teachers: Teacher[] = [
  {
    name: "Sophia Rose",
    role: "UX Teacher",
    img: "/teachers/sophia.jpg", // replace with real image
  },
  {
    name: "Cindy Walker",
    role: "Graphic Teacher",
    img: "/teachers/cindy.jpg",
  },
  {
    name: "David Hutson",
    role: "Full Stack Master",
    img: "/teachers/david.jpg",
  },
 
];

export default function TeachersSection() {
  return (
    <section className="w-full bg-white py-20 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1600px] px-4 flex flex-col lg:flex-row justify-center gap-6 lg:gap-8">
        {teachers.map((t, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center text-center bg-[#f6f3ff] rounded-[20px] pt-28 pb-10 px-6 lg:px-8 w-full lg:w-1/4 lg:min-w-0 shadow-[0_20px_40px_rgba(0,0,0,0.03)]"
          >
            {/* Avatar wrapper */}
            <div className="absolute -top-20 w-[200px] h-[200px] rounded-full overflow-hidden border-8 border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex items-center justify-center bg-white z-10">
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Role */}
            <p className="text-sm font-medium text-[#6c1898] mt-2">
              {t.role}
            </p>

            {/* Name */}
            <h3 className="text-[22px] font-semibold text-[#1a1a1a] mt-3">
              {t.name}
            </h3>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6 relative z-20">
              <a
                className="w-10 h-10 rounded-full bg-white text-[#6c1898] border border-[#6c1898]/10 flex items-center justify-center text-[15px] shadow-[0_10px_20px_rgba(108,24,152,0.15)] cursor-pointer hover:bg-[#6c1898] hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white text-[#6c1898] border border-[#6c1898]/10 flex items-center justify-center text-[15px] shadow-[0_10px_20px_rgba(108,24,152,0.15)] cursor-pointer hover:bg-[#6c1898] hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white text-[#6c1898] border border-[#6c1898]/10 flex items-center justify-center text-[15px] shadow-[0_10px_20px_rgba(108,24,152,0.15)] cursor-pointer hover:bg-[#6c1898] hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
