'use client';

import React, { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from '@nextui-org/react';
import Link from 'next/link';
import Logo from '@/components/navbar/Logo';
import Search from '@/components/Search';
import clsx from 'clsx';
import { GoChevronDown, GoChevronUp, GoChevronRight } from 'react-icons/go';
interface Item {
  children: any;
  id: number;
  name: string;
}

interface Data {
  children: Item[] | null;
}

export default function Mnnavbar() {

  const [data, setData] = useState<Data | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [menuItemHoverStates, setMenuItemHoverStates] = useState<{ [key: number]: boolean }>({});
  const [subMenuStates, setSubMenuStates] = React.useState<Record<string, boolean>>({});

  const toggleSubMenu = (itemName: string | number) => {
    setSubMenuStates((prevStates) => ({
      ...prevStates,
      [itemName]: !prevStates[itemName],
    }));
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/v1/menus/1');
        const jsonData = await response.json();
        console.log('jsonData', jsonData.children)
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    console.log('------',data )
  }, []); 
  const menuItems = [
    {name:'首页',url:'/'},
    {name:'本院概况',url:'/djgz',children:[{name:'教师',url:'/djgz/jiaosi'},{name:'本科生',url:'/djgz/benke'},{name:'研究生',url:'/djgz/yanjiu'}]},
    {name:'新闻公告',url:'/djgz',children:[{name:'教师',url:'/djgz/jiaosi'},{name:'本科生',url:'/djgz/benke'},{name:'研究生',url:'/djgz/yanjiu'}]},
    {name:'队伍建设',url:'/djgz',children:[{name:'教师',url:'/djgz/jiaosi'},{name:'本科生',url:'/djgz/benke'},{name:'研究生',url:'/djgz/yanjiu'}]},
    {name:'人才培养',url:'/djgz',children:[{name:'教师',url:'/djgz/jiaosi'},{name:'本科生',url:'/djgz/benke'},{name:'研究生',url:'/djgz/yanjiu'}]},
    {name:'科研情况',url:'/djgz',children:[{name:'教师',url:'/djgz/jiaosi'},{name:'本科生',url:'/djgz/benke'},{name:'研究生',url:'/djgz/yanjiu'}]},
    {name:'党建工作',url:'/djgz'},
    {name:'学生工作',url:'/djgz',children:[{name:'教师',url:'/djgz/jiaosi'},{name:'本科生',url:'/djgz/benke'},{name:'研究生',url:'/djgz/yanjiu'}]},
    {name:'就业工作',url:'/djgz'},
    {name:'公告教学',url:'/djgz'},
    {name:'下载专区',url:'/djgz',children:[{name:'教师',url:'/djgz/jiaosi'},{name:'本科生',url:'/djgz/benke'},{name:'研究生',url:'/djgz/yanjiu'}]},

  ];
  

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='p flex items-center justify-between pt-5 pl-5 lg:pl-0 pr-6 mr-[34px]'>
        <Logo />
        <div className="flex items-center ">
          <Search/>
          {/* 小屏导航 */}
          <Navbar classNames={{wrapper: ['w-0 px-0']}} className='w-0'>
            <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className='custom:hidden ml-[10px]' />
            {data && data.children !== null ? 
            (<NavbarMenu className='gap-0 top-[4.5rem]'>
                <NavbarItem className='py-2 border-b border-grayBorder'>
                  <Link href='./' className="inline-flex items-center w-full h-full">首页</Link>
                </NavbarItem>

                {data.children.map((item, index) => {
                    // const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false); // 独立的状态变量
                    const isSubMenuOpen = subMenuStates[item.name] || false;
                    
                    return (
                    <NavbarItem key={`${item.name}-${index}`} className='py-2 border-b border-grayBorder'>
                        {item.children?.length ? (
                        // 父级导航项
                        <div>
                            <div className='flex justify-between' 
                            onClick={(e) => {
                                e.stopPropagation(); // 阻止事件冒泡
                                toggleSubMenu(item.name);
                            }}>
                            <a href="#">
                                {item.name}
                            </a>
                            {isSubMenuOpen ? (
                                <GoChevronUp />
                            ) : (
                                <GoChevronDown />
                            )}
                            </div>
                        
                            {isSubMenuOpen && (
                            // 子菜单项
                            <div className="mt-0 bg-white py- dark:bg-gray-800 dark:border-gray-700 flex flex-wrap">
                                {item.children.map((child: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, childIndex: any) => (
                                <Link
                                    // href={child.url}
                                    href='./'
                                    key={`${child.name}-${childIndex}`}
                                    className="flex justify-center items-center w-1/2 px-1 py-1 min-w-[79px]" // 每行两个，所以宽度设置为一半
                                >
                                    {child.name}
                                </Link>
                                ))}
                            </div>
                            )}

                        </div>
                        ) : (
                        // 无子菜单项
                        <Link 
                        // href={item.url} 
                        href='./'
                        className="inline-flex items-center w-full h-full">
                            {item.name}
                        </Link>
                        )}
                    </NavbarItem>
                    );
                })}
            </NavbarMenu>)
            :
            (<p>loading</p> )}

          </Navbar>
        </div>
      </div>

      <Navbar
        maxWidth='full'
        classNames={{
          wrapper: ['justify-center'],
        }}
        className={clsx('justify-center hidden custom:flex h-12')}
      >
        
        {data && data.children !== null ? 
        (<NavbarContent className='hidden gap-3 custom:flex' justify='center'>
          {/* 导航 */}
          <NavbarItem><Link href='./' className="inline-flex items-center">首页</Link></NavbarItem>
          {data.children.map((item, index) => {
            // const [isHovered, setIsHovered] = React.useState(false);

            // const handleMouseEnter = () => {
            //   setIsHovered(true);
            // };

            // const handleMouseLeave = () => {
            //   setIsHovered(false);
            // };
            const isHovered = menuItemHoverStates[index] || false;

            const handleMouseEnter = () => {
              setMenuItemHoverStates((prevState) => ({
                ...prevState,
                [index]: true,
              }));
            };

            const handleMouseLeave = () => {
              setMenuItemHoverStates((prevState) => ({
                ...prevState,
                [index]: false,
              }));
            };

            return (
              <NavbarItem key={`${item.name}-${index}`}>
                {item.children?.length ? (
                  // 有子菜单
                  <div
                    className="relative inline-block group"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      // href={item.url}
                      href='./'
                      className="inline-flex items-center transition transform-gpu duration-300"
                    >
                      {item.name}
                      {isHovered ? (
                        <GoChevronRight className="ml-1" />
                      ) : (
                        <GoChevronDown className="ml-1" />
                      )}
                    </Link>
                    {/* 子菜单 */}
                    <div className="absolute left-0 hidden mt-0 border-t-2 border-t-customBorder rounded-sm shadow space-y-1 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 group-hover:block">
                      {item.children.map((child: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, childIndex: any) => (
                        <Link
                          // href={child.url}
                          href='./'
                          key={`${child.name}-${childIndex}`}
                          className="block px-1 py-1 min-w-[79px]"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  // 无子菜单
                  <Link 
                  // href={item.url} 
                  href='./'

                  className="inline-flex items-center">
                    {item.name}
                  </Link>
                )}
              </NavbarItem>
            );
          })}
        </NavbarContent>)
        :
        (<p>loading</p> )}


      </Navbar>
  </div>
  );
}
