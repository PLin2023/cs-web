'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from 'zustand';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './djgz.module.css'

import Slider from 'react-slick';
import { useWindowSize } from 'react-use';
 
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { LiaAngleDoubleRightSolid } from 'react-icons/lia';

export default function Djgz() {


  const title = '党建工作'
  const moreText = '更多'
  const list = [
    {
      title: "1主题教育 | 计算机学院领导班子主题教育读书班暨党委理论学习中心组举行“学习习近平总书记在二十届中共中央政治局第六次集体学习时的重要讲话精神”等多专题学习会",
      img: "/images/Blackgradient.png",
      url:'/djgz'
    },
    {
      title: "2闽南师范大学计算机学院",
      img: "/images//Image.png",
      url:'/djgz'
    },
    {
      title: "3闽南师范大学计算机学院面向2023届毕业生公开招聘科研助理拟录用名单公示",
      img: "/images//Image.png",
    },
  ];

 
  

  return (
      <div className="container mx-auto  lg:max-w-[1027px] sm:max-w-[580px] max-w-[342px]">
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
        
        <div className="gap-4 grid grid-cols-2">
          <div className="col-span-2"> {/* 第一行放一个元素 */}
            <Card shadow="none" radius="none" className="w-full" isPressable onPress={() => console.log(window.innerWidth)}>
              <CardBody className="overflow-visible p-0 relative">
                  <Image
                    shadow="none"
                    width="100%"
                    alt={list[0].title}
                    className="rounded w-full object-cover lg:h-[400px] sm:h-[309px] h-[190px]"
                    src={list[0].img}
                  />
                  <p className={clsx('hidden text-background leading-5 font-semibold absolute bottom-3 left-1/2 -translate-x-1/2 w-4/5 z-50', styles.djgzTitleInPicture)}>{list[0].title}</p>
                </CardBody>
                <CardFooter className="text-small justify-start pl-0 pb-0 lg:hidden">
                  <img src="/images/djgzSide.png" alt="Icon" className='mr-3'/>
                  <p className={clsx('text-default-500 text-left',styles.djgzTitle)}>{list[0].title}</p>
                </CardFooter>
            </Card>
          </div>
          {list.slice(1).map((item, index) => (
            <Card shadow="none" radius="none" key={index} isPressable onPress={() => console.log(window.innerWidth)}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="none"
                  width="100%"
                  alt={item.title}
                  className="rounded w-full object-cover lg:h-[206px] sm:h-[206px] h-[120px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-start pl-0">
                <img src="/images/djgzSide.png" alt="Icon" className='mr-3'/>
                <p className={clsx('text-default-500 text-left',styles.djgzTitle)}>{list[0].title}</p>
              </CardFooter>
            </Card>
          ))}
        </div>

        
      </div>
    

  );
}
