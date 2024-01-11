/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */

'use client';

/* eslint-disable tailwindcss/no-custom-classname */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Tab } from '@headlessui/react';
// Import Swiper React components
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  ARTICLE,
  ARTICLECATEGORIES,
  FEATURES,
  PROMOTION,
} from '@/contents/dashboard/page';

export default function DashboardUser() {
  return (
    <main className="w-full overflow-hidden px-8 py-6">
      <div className="wrapper w-full rounded-2xl border p-6">
        <section className="promotion lg:px-[75px]">
          <Swiper
            navigation={{ prevEl: '.prev', nextEl: '.next' }}
            modules={[Navigation]}
            className="mySwiper !absoulte "
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={45}
            slidesPerView={1}
          >
            {PROMOTION.map((e, index) => (
              <SwiperSlide
                key={index}
                className="bg-[#EBFCFF] px-10 py-5 lg:px-20 lg:py-10 "
              >
                <div className="flex flex-col items-center justify-between lg:flex-row">
                  <div className="flex max-w-[479px] flex-col">
                    <h2 className=" text-2xl font-semibold lg:text-[40px]">
                      {e.title}
                    </h2>
                    <p className="text-base lg:text-[26px]">{e.desc}</p>
                  </div>
                  <div>
                    <Image
                      src={e.image.src}
                      width={e.image.width}
                      height={e.image.height}
                      alt={e.image.alt}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div
              className="absolute top-1/2 z-20 flex w-full -translate-y-1/2 justify-between"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="prev rotate-180 cursor-pointer text-xl text-[#2F9A97] lg:text-3xl">
                <Image
                  src="/assets/images/user/dashboard/ArrowLeft.png"
                  width={30}
                  height={30}
                  alt="arrow"
                  className="lg:w-[66px]"
                />
              </div>
              <div className="next cursor-pointer text-xl text-[#2F9A97] lg:text-3xl">
                <Image
                  src="/assets/images/user/dashboard/ArrowLeft.png"
                  width={30}
                  height={30}
                  alt="arrow"
                  className="lg:w-[66px]"
                />
              </div>
            </div>
          </Swiper>
        </section>

        <section className="features py-12 lg:px-[75px]">
          <div className="flex flex-wrap justify-around gap-3 lg:justify-between ">
            {FEATURES.map((e, index) => (
              <Link
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                href={e.href}
                className="flex flex-col items-center"
              >
                <Image
                  src={e.image.src}
                  width={e.image.width}
                  height={e.image.height}
                  alt={e.image.alt}
                  className="w-[60%] lg:w-full"
                />
                {e.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="news">
          <Tab.Group>
            <Tab.List>
              {ARTICLECATEGORIES.map((e, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Tab key={index} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`${
                        selected
                          ? ' border-[#009BEB] bg-[#EBFCFF]  text-[#009BEB]'
                          : 'bg-white  text-black'
                      } mx-1 rounded-md border-2 px-3 py-2 text-base lg:mx-3 lg:px-6 lg:py-4`}
                    >
                      {e.title}
                    </button>
                  )}
                </Tab>
              ))}
              {/* ...  */}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="relative flex flex-col gap-12">
                <Link href="/dashboard" className="relative mb-12 mt-8">
                  <Image
                    src="/assets/images/user/dashboard/article/banner.png"
                    width={1214}
                    height={443}
                    alt="news"
                    className="w-full rounded-xl"
                  />
                  <div className=" absolute bottom-[10%] left-[4%]">
                    <div className="flex flex-col gap-1 text-white lg:gap-5">
                      <div className="flex flex-col gap-1">
                        <p className="text-xl lg:text-2xl">Artikel Olahraga</p>
                        <h4 className=" text-xl font-semibold lg:text-4xl">
                          Fakta Orang Jomblo Olahraga Sendiri
                        </h4>
                      </div>
                      <p>5 Januari 2024</p>
                    </div>
                  </div>
                </Link>
                {ARTICLE.map((e, index) => (
                  <>
                    <Link href={`/${e.slug}`} key={index}>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-5">
                          <div className="flex flex-col gap-1">
                            <p className="text-xl text-[#00A9FF] lg:text-2xl">
                              {e.category}
                            </p>
                            <h4 className=" text-2xl font-semibold lg:text-4xl">
                              {e.title}
                            </h4>
                          </div>
                          <p>{e.date}</p>
                        </div>
                        <div>
                          <Image
                            src={e.image.src}
                            width={e.image.width}
                            height={e.image.height}
                            alt={e.image.alt}
                          />
                        </div>
                      </div>
                    </Link>
                    <hr />
                  </>
                ))}
              </Tab.Panel>
              {/* ... */}
            </Tab.Panels>
          </Tab.Group>
        </section>
      </div>
    </main>
  );
}
