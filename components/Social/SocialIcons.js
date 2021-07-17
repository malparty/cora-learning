import React from "react";

export default function SocialIcons() {
  return (
    <>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/coraenglish1991"
      >
        <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
          <i className="fab fa-facebook-square"></i>
        </button>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/channel/UCNH8HoU71t61UyTTPMVCAgg"
      >
        <button
          className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i className="fab fa-youtube"></i>
        </button>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://soundcloud.com/qu-nh-th-221794766"
      >
        <button
          className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i className="fab fa-soundcloud"></i>
        </button>
      </a>
    </>
  );
}
