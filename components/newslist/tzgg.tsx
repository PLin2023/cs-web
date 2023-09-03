'use client';

import React from 'react';
import { useStore } from 'zustand';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './tzgg.module.css'
import { LiaAngleDoubleRightSolid } from 'react-icons/lia';

export default function Tzgg() {

  const title = '通知公告'
  const moreText = '更多'
  const tzgglist = [
    {id:1,articleTitle:'闽南师范大学计算机学院面向2023届毕业生公开招聘科研助理拟录用名单公示',url:'/'},
    {id:2,articleTitle:'闽南师范大学计算机学院面向2023届毕业生公开招聘科研助理拟录用名单公示',url:'/djgz'},
    {id:3,articleTitle:'闽南师范大学计算机学院面向2023届毕业生公开招聘科研助理拟录用名单公示',url:'/djgz'},
    
  ];
  

  return (
    <div className="container mx-auto lg:max-w-[417px] max-w-[342px]">
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
      

        <div className="grid grid-cols-1 gap-4">
        {tzgglist.map((item) => (
          <div key={item.id} className="flex items-center mb-2">
            <div className={styles.tzggTime}>
              <div className={styles.tzggMonth}>12</div>
              <div className={styles.tzggDate}>3</div>
            </div>
            <Link href={item.url}>
              {item.articleTitle}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
