'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const VerticalNav = (
    // { paths }
) => {
    const items = [
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
            url:'/',
            time: '2021-10-13',
          },
        {
            id: 3,
            label:'学术交流',
            img: "/images/Blackgradient.png",
            url:'/',
            time: '2021-10-13',
        },
      ];
    const [selectedItemId, setSelectedItemId] = React.useState<number | null>(null);

    const handleItemClick = (itemId: number) => {
        setSelectedItemId(itemId);
    };

  return (
    <nav className="flex-col ml-5 hidden sm:flex sm:w-36 lg:w-52 absolute top-[64%] lg:top-3/4">
      <div className="flex justify-center items-center text-white h-[55px] lg:h-[75px]  bg-[url('/images/SidebarNnavigationTitleV2.svg')] bg-cover">
        <Link href="/" className="hover:font-semibold">
        Home
        </Link>
      </div>
      {items.map((item) => (
        <Link key={item.id} href={item.url} className={clsx("flex justify-center items-center h-12 lg:h-16 bg-verticalNavDeSelect text-gray-800",
            selectedItemId === item.id ? 'bg-verticalNavSelect text-white' : '')}
            onClick={() => handleItemClick(item.id)}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default VerticalNav;