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
    <nav className="text-sm sm:text-base h-6 self-end  sm:ml-52 lg:ml-64">
      <ol className="list-none flex backdrop-filter backdrop-blur-sm">
        <li className="mr-1">
          <Link href="/" className="text-white font-semibold">
            Home
          </Link>
        </li>
        {paths.map((segment, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-1 text-white font-semibold"> &gt; </span>
            {index === paths.length - 1 ? (
              <span className="text-white font-semibold">{segment.label}</span>
            ) : (
              <Link href={segment.url} className="text-white font-semibold">
                {segment.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;