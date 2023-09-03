'use client';

import React from 'react';
import { useStore } from 'zustand';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './rcpy.module.css'
import { useWindowSize } from 'react-use';

import { LiaAngleDoubleRightSolid } from 'react-icons/lia';

export default function Rcpy() {
const { width: screenWidth } = useWindowSize();  

  const [selected, setSelected] = React.useState(true)
  const handleUndergraduateClick = () => {
    if (!selected) {
      setSelected(true);
    }
  };
  const handleGraduateClick = () => {
    if (selected) {
      setSelected(false);
    }
  };

  const title = '人才培养'
  const moreText = '更多'
  const rcpylist = [
    {id:1,articleTitle:'4月28日，第四届“长城杯”信息安全铁人三项赛全国总决赛在福州新区数字中国会展中心潮平馆落下帷幕。来自我院信息安全特色团队的王健、祝梓文、王晨烨、黄春瑜、张儒钦和吴冰同学组成的队伍与中国科学技术大学、复旦大学、西北工业大学等实力强劲的队伍同台竞技，最终荣获总决赛三等奖的好成绩。',url:'/',articlePublishTime:'2023-04-01',img: "/images/Image.png",},
    {id:2,articleTitle:'闽南师范大学计算机学院面向2023届毕业生公开招聘科研助理拟录用名单公示',url:'/djgz',articlePublishTime:'2023-04-01',img: "/images/Image.png",},
    {id:3,articleTitle:'闽南师范大学计算机学院面向2023届毕业生公开招聘科研助理拟录用名单公示',url:'/djgz',articlePublishTime:'2023-04-01',img: "/images/Image.png",},
    
  ];
  

  return (
    <div className="container mx-auto lg:max-w-[1027px] sm:max-w-[580px] max-w-[342px]">
        <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center'>
                <img src="/images/Min.svg" alt="Icon" className="w-6 h-6 mr-1" />
                <h3 className="text-xl font-semibold relative">
                    {title}
                    <span className="absolute bottom-0 left-1/2 w-2/4 h-0.5 bg-customBorder"></span>
                </h3>
                <div className='text-sm self-end text-grayText font-semibold'>
                      <a className={`mx-2.5 cursor-pointer ${selected ? 'text-activeText' : ''}`} onClick={handleUndergraduateClick}>本科生教育</a>
                      <a className={`cursor-pointer ${selected ?  "" : "text-activeText" }`} onClick={handleGraduateClick}>研究生教育</a>
                </div>
            </div>
            <button className='text-grayText flex items-center text-sm self-end md:mb-0 md:ml-4'>
                {moreText}
                <LiaAngleDoubleRightSolid/>
            </button>
        </div>
      
        {screenWidth <= 1024 ? 
          (<div className="grid grid-cols-1 gap-4">
            {rcpylist.map((item) => (
              <div key={item.id} className="flex items-center mb-2">
                <img src="/images/rcpyicon.svg" alt="Icon" className="w-6 h-6 mr-2.5 self-start mt-2" />
                <Link href={item.url}  className='flex border-b border-grayBorder pb-1' >
                  <div className={styles.rcpyTitle}>{item.articleTitle}</div>        
                  <div className='self-end text-xs text-timeText whitespace-nowrap '>
                    {item.articlePublishTime}
                  </div>
                </Link>
              </div>
            ))}
          </div>)
        :
          (
            <div>
              <div className="flex items-center border border-grayBorder rounded h-[140px]">
                <img src={rcpylist[0].img} alt="Image" className="w-48 h-full rounded-l" />
                <div className="ml-4">
                  <p className={clsx("text-lg font-medium mb-2 w-3/5", styles.rcpyP)}>{rcpylist[0].articleTitle}</p>
                  <div className={clsx("text-sm text-briefText mb-2", styles.rcpyTitle)}>{rcpylist[0].articleTitle}</div>
                  <p className="text-xs text-rcpyTimeText">{rcpylist[0].articlePublishTime}</p>
                </div>
              </div>
              <div className="flex items-center border border-grayBorder rounded my-6 h-[140px]">
                <div className="ml-4">
                <p className={clsx("text-lg font-medium mb-2 w-3/5", styles.rcpyP)}>{rcpylist[0].articleTitle}</p>
                  <div className={clsx("text-sm text-briefText mb-2",styles.rcpyTitle)}>{rcpylist[0].articleTitle}</div>
                  <p className="text-xs text-rcpyTimeText">{rcpylist[0].articlePublishTime}</p>
                </div>
              </div>
              <div className="flex items-center border border-grayBorder rounded bg-grayBackground h-[140px]">
                <img src={rcpylist[0].img} alt="Image" className="w-48 h-full rounded-l" />
                <div className="ml-4 ">
                <p className={clsx("text-lg font-medium mb-2 w-3/5", styles.rcpyP)}>{rcpylist[0].articleTitle}</p>
                  <div className={clsx("text-sm text-briefText mb-2",styles.rcpyTitle)}>{rcpylist[0].articleTitle}</div>
                  <p className="text-xs text-rcpyTimeText">{rcpylist[0].articlePublishTime}</p>
                </div>
              </div>
          </div>
          
          
        )
        }
    </div>
  );
}
