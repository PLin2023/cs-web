'use client';

import React from 'react';
import { useStore } from 'zustand';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './xyxw.module.css'
import Slider from 'react-slick';
import { useWindowSize } from 'react-use';
 
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { LiaAngleDoubleRightSolid } from 'react-icons/lia';

export default function Xyxw() {

  const title = '学院新闻'
  const moreText = '更多'
  const list = [
    {
      title: "1闽南师范大学计算机学院面向2023届毕业生公开招聘科研助理拟录用名单公示",
      img: "/images/Image.png",
      url:'/djgz'
    },
    {
      title: "2闽南师范大学计算机学院面向2023届毕业生公开招聘科研助理拟录用名单公示",
      img: "/images/Image.png",
      url:'/djgz'
    },
    {
      title: "3闽南师范大学计算机学院面向2023届毕业生公开招聘科研助理拟录用名单公示",
      img: "/images/Image.png",
    },
    {
      title: "4闽南师范大学计算机学院面向2023届毕业生公开招聘科研助理拟录用名单公示",
      img: "/images/Image.png",
      url:'/djgz'
    },
  ];
  const settings = {
    customPaging: function () {
      return (
        <button className="dot"></button>
      );
    },
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    vertical: true,
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const { width: screenWidth } = useWindowSize();
  

  return (
    <div className="container mx-auto lg:max-w-[554px] sm:max-w-[580px] max-w-[342px]">
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center'>
          <img src="/images/Min.svg" alt="Icon" className="w-6 h-6 mr-1" />
            <h3 className="text-xl font-semibold relative">
              {title}
              <span className="absolute bottom-0 left-1/2 w-2/4 h-0.5 bg-customBorder"></span>
            </h3>  
        </div>
        <button className='text-grayText flex items-center text-sm self-end md:mb-0 md:ml-4'>
          {moreText}
          <LiaAngleDoubleRightSolid/>
        </button>
      </div>
      
      {screenWidth <= 640 ? 
        
          (<div className="gap-2 sm:grid sm:grid-cols-2">
              <Slider {...settings}>
                {list.map((item, index) => (
                  <Card className='shadow-xl rounded' key={index} isPressable onPress={() => console.log(window.innerWidth)}>
                    <CardBody className="overflow-visible p-0">
                      <Image
                        shadow="none"
                        radius="none"
                        width="100%"
                        alt={item.title}
                        className="w-full object-cover h-[190px]"
                        src={item.img}
                      />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                      <p className={clsx('text-default-500',styles.xyxwTitle)} >{item.title}</p>
                    </CardFooter>
                  </Card>
                ))}
              </Slider>
          </div>)
        : 
          (<div className="gap-2 sm:grid sm:grid-cols-2">
            {list.map((item, index) => (
              <Card className='shadow-xl rounded' key={index} isPressable onPress={() => console.log(window.innerWidth)}>
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="none"
                    radius="none"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover lg:h-[175px] sm:h-[225px]"
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <p className={clsx('text-default-500',styles.xyxwTitle)} >{item.title}</p>
                </CardFooter>
              </Card>
            ))}
          </div>)
         }


      
    </div>

  );
}
