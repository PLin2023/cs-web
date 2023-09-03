'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Breadcrumbs from './breadcrumbs';
import List from './list';
import VerticalNav from './verticalNav';



const Catalogue = (
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
    <div>
        <div className=" bg-[url('/images/theme2.png')] bg-cover bg-bottom">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-start relative h-[100px] sm:h-[150px] lg:h-[300px]">
                    <VerticalNav />
                    <Breadcrumbs />
                </div>
            </div>
        </div>
        <div className="flex justify-end  mx-auto lg:max-w-[1027px] sm:max-w-[580px] max-w-[342px]">
            <List />
        </div>
    </div>


  );
};

export default Catalogue;