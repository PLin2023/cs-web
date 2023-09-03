'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';



const Breadcrumbs = (
    // { paths }
) => {
    const paths = [
        {
          id: 1,
          label:'首页',
          img: "/images/Blackgradient.png",
          url:'/',
          time: '2021-10-13',
        },
        {
            id: 2,
            label:'队伍建设',
            img: "/images/Blackgradient.png",
            url:'/djgz',
            time: '2021-10-13',
          },
        {
            id: 3,
            label:'学术交流',
            img: "/images/Blackgradient.png",
            url:'/djgz',
            time: '2021-10-13',
        },
      ];

  return (
    <nav className="text-sm sm:text-base sm:h-14 lg:h-20 bg-breadcrumbsBg hidden sm:flex">
      <ol className="list-none flex items-center backdrop-filter backdrop-blur-sm sm:ml-14 lg:ml-56">
        <li className="mr-1 text-breadcrumbsText2">当前位置：
          <Link href="/" className="text-breadcrumbsText ">
            Home
          </Link>
        </li>
        {paths.map((segment, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-1 text-breadcrumbsText2 "> &gt; </span>
              <Link href={segment.url} className="text-breadcrumbsText ">
                {segment.label}
              </Link>
          </li>
        ))}
          <span className="mx-1 text-breadcrumbsText2 "> &gt; </span>
          <span className="text-breadcrumbsText2 ">正文</span>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;