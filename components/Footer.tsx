import React from "react";
import MagicButton from "./ui/magic-button";
import { FaMailBulk } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          N'hesitez pas à me <span className="text-purple">contacter</span> pour
          tout renseignement.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Je vous répondrai dans les plus bref délais
        </p>
        <a href="mailto:antoine.vignes31@gmail.com">
          <MagicButton
            title="Envoyez moi un e-mail"
            icon={<FaMailBulk />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-2">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Antoine Vignes
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt={profile.id} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
