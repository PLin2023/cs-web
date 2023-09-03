'use client';

import React from 'react';
import {Pagination} from "@nextui-org/react";
import Link from 'next/link';
import styles  from './list.module.css';
import clsx from 'clsx';


const List = (
    // { newsList }
) => {
    const title = '学术交流'
    const list = [
        {
          id: 1,
          title: "1主题教育 | 计算机学院领导班子主题教育读书班暨党委理论学习中心组举行“学习习近平总书记在二十届中共中央政治局第六次集体学习时的重要讲话精神”等多专题学习会",
          img: "/images/Blackgradient.png",
          url:'/djgz',
          time: '2021-10-13',
        },
        {
          id: 2,
          title: "2闽南师范大学计算机学院",
          img: "/images//Image.png",
          url:'/djgz',
          time: '2021-10-13'
        },
        {
          id: 3,
          title: "3闽南师范大学计算机学院面向2023届毕业生公开招聘科研助理拟录用名单公示",
          img: "/images//Image.png",
          time: '2021-10-13',
          url:'/djgz'
        },
      ];
    const totalPages = 100
    const handlePageChange = (pageNumber: number) => {
        console.log(pageNumber,'------')
    };

  return (
    <div className="w-full sm:w-4/5 pt-8 lg:pt-16">
        <div className='flex items-center justify-between mb-2 sm:mb-3'>
            <div className='flex items-center relative'>
                <h3 className="text-lg sm:text-xl font-semibold tracking-[5px] m-2.5">
                    {title}
                </h3>
                <div className="absolute -top-[6px] -left-[10px] w-8 h-8 border-solid border-4 border-transparent border-t-redCircle border-b-redCircle border-l-redCircle rounded-full bg-transparent rotate-45"></div>
            </div>
            <div className='w-2.5 h-0.5 bg-redLine flex-grow'></div>
        </div>
        <div className="grid grid-cols-1 gap-4">
            {list.map((item) => (
                <div key={item.id} className="flex items-center mb-2 border-b border-listGrayBorder">
                <Link href={item.url}  className='w-full pb-1' >
                    <div className='flex justify-between'>
                        <div className={clsx('w-8/12 text-base sm:text-lg font-medium', styles.title)}>{item.title}</div>        
                        <div className='text-xs sm:text-sm text-grayListTime whitespace-nowrap '>
                        {item.time}
                        </div>
                    </div>
                </Link>
                </div>
            ))}
        </div>
        <div className='flex justify-center mt-4 sm:mt-2.5'>
            <button className='bg-background text-sm sm:text-base font-medium text-paginationColor border-solid rounded border border-paginationColor sm:px-2.5 mr-1 h-2.25' >首页</button>
            <Pagination
                radius={'sm'}
                total={totalPages}
                onChange={handlePageChange}
                classNames={{ item:['h-8','w-8','sm:h-[36px]','sm:w-[36px]'],cursor: ['bg-paginationColor','h-8','w-8','sm:h-[36px]','sm:w-[36px]']}}
            />
            <button className='bg-background text-sm sm:text-base font-medium text-paginationColor border-solid rounded border border-paginationColor sm:px-2.5 ml-1 h-2.25' >下一页</button>
        </div>
        <div className='flex items-center mt-6 sm:mt-2.5'>
            <div className='w-2.5 h-0.5 bg-redLine flex-grow'></div>
            <div className='w-7 h-7  border-solid border-2 border-transparent border-t-redCircle border-r-redCircle bg-transparent rotate-45'></div>
            <div className='w-7 h-7  border-solid border-2 border-transparent border-t-redCircle border-r-redCircle bg-transparent rotate-45'></div>
        </div>
    </div>
  );
};

export default List;