import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-10 bg-gray-950 text-white">
      <div>
        <Image
          src={assets.logo_dark}
          alt="logo"
          className="w-36 mx-auto mb-5"
        />

        <div className="w-max flex items-center gap-3 mx-auto">
          <Image src={assets.mail_icon_dark} alt="mail-icon" className="w-6" />
          <p className="text-gray-400">esraayaz.dev@gmail.com</p>
        </div>
      </div>
      <div className="text-gray-600 text-center sm:flex items-center justify-between border-t border-gray-700 mx-[10%] mt-5 py-6">
        <p>&copy; 2025 Esra Ayaz. All rights reserved.</p>
      </div>
    </div>
  );
};

export default page;
