/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative items-center mt-32">
        <div className="flex flex-wrap-reverse justify-center">
          <div className="flex-1 sm:pt-0 right-0 mr-auto ml-auto min-w-48">
            <div className="text-center">
              <h2 className="text-lg text-lightBlue-500 font-semibold tracking-wide uppercase">
                Cora English
              </h2>
              <p className="mt-2 font-semibold text-5xl text-blueGray-600">
                Lớp ielts của Thư
              </p>
              <p className="mt-4 text-xl leading-relaxed text-blueGray-500">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                An Hải Tây, Sơn Trà, Đà Nẵng
              </p>
            </div>
          </div>
          <div className="max-w-48 px-12">
            <img
              className="flex-1 top-10"
              src="/img/cora/cora_clipart.png"
              alt="Cora là COc RAng"
            />
          </div>
        </div>
      </section>
      <div id="sectionBasicOnline"></div>
      <section className="mt-48 md:mt-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="/img/cora/cora_desk_card.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    IELTS Basic Online
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Khai giảng: 15/07/2021
                  </p>
                  <p className="text-md font-light mt-2 text-white">
                    Học tối thứ 2 - thứ 6 hàng tuần từ 18h - 20h
                  </p>
                  <p className="text-md font-light mt-2 text-white">
                    Học quo Google Meet
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-user-friends"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">8 học viên</h6>
                      <p className="mb-4 text-blueGray-500">
                        Lớp tối đa 8 học viên
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Đầu ra 5.0/5.5
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Đầu vào 4.5/5.0 - Đầu ra 5.0/5.5
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa fa-calendar-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">20 buổi</h6>
                      <p className="mb-4 text-blueGray-500">
                        Lộ trình 20 buổi / 2.5 tháng
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-dollar-sign"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Học phí: 5.000.000đ
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Đóng 500k giữ chỗ và học thử 4 buổi. Học phí còn lại
                        (4.5tr) sẽ trả trước buổi học thứ 5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="https://www.facebook.com/coraenglish1991/photos/pcb.100943605288960/100943335288987"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <button
                        className="bg-white text-red-500 shadow-lg font-normal h-16 w-16 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fas fa-2x fa-headphones-alt"></i>
                      </button>
                      <p className="text-lg text-white mt-4 font-semibold">
                        Listening - 8.5
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <button
                        className="bg-white text-lightBlue-500 shadow-lg font-normal h-16 w-16 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fas fa-2x fa-file-alt"></i>
                      </button>
                      <p className="text-lg text-white mt-4 font-semibold">
                        Reading - 9.0
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-blueGray-600 shadow-lg rounded-lg text-center p-8">
                      <button
                        className="bg-white text-blueGray-600 shadow-lg font-normal h-16 w-16 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fas fa-2x fa-pen-fancy"></i>
                      </button>
                      <p className="text-lg text-white mt-4 font-semibold">
                        Writing - 7.0
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <button
                        className="bg-white text-emerald-500 shadow-lg font-normal h-16 w-16 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fas fa-2x fa-microphone"></i>
                      </button>
                      <p className="text-lg text-white mt-4 font-semibold">
                        Speaking - 7.5
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-32">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-graduation-cap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Ielts 8.0 overall
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                I passed the IELTS 3 times so far, in 2018, 2019 & 2020.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                My current level is 8.0 overall.
              </p>

              <a
                href="https://www.facebook.com/coraenglish1991/photos/pcb.100943605288960/100943325288988/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                View all my certificates{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24 pt-6 bg-blueGray-600">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl text-blueGray-100">
              Yêu cầu
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-200">
              Làm test pronunciation và grammar đầu vào nếu chưa biết trình độ
              hiện tại
            </p>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-200">
              Học phải có microphone và camera để tương tác trong lúc học
            </p>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-200">
              Làm bài tập đầy đủ
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 mt-4">
              <div className="flex flex-wrap text-blueGray-200">
                <div className="w-full lg:w-4/12 px-4 pb-6">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    <i className="fas fa-check text-emerald-500"></i> Làm test
                  </h5>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-0 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="Level assessment test"
                      style={{ height: "300px" }}
                      className="align-middle border-none max-w-full rounded-lg"
                      src="/img/cora/test.svg"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4 pb-6">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    <i className="fas fa-check text-emerald-500"></i> Microphone
                    và camera
                  </h5>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-0 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="Online call"
                      style={{ height: "300px" }}
                      className="align-middle border-none max-w-full rounded-lg"
                      src="/img/cora/online_call.svg"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4 pb-6">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    <i className="fas fa-check text-emerald-500"></i> Bài tập
                    đầy đủ
                  </h5>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-0 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="Homework done on time"
                      style={{ height: "300px" }}
                      className="align-middle border-none max-w-full rounded-lg"
                      src="/img/cora/on_time.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-0"></div>
      </section>

      <section className="pb-16 bg-blueGray-600 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
      </section>
      <Footer />
    </>
  );
}
