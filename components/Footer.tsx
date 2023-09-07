import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  {
    /*响应式捕捉屏幕大小改变icon和图片*/
  }
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 780px)');
    setIsMediumScreen(mediaQuery.matches);

    const handleResize = (event: MediaQueryListEvent) => {
      setIsMediumScreen(event.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <footer className='text-fixwhite bg-primary'>
      {/*底部导航栏信息的外层盒子*/}
      <div className='container mx-auto  p-4 px-4 py-8'>
        {/*底部导航栏内部信息*/}
        <div className='mb-4 flex flex-wrap justify-between '>
          {/*logo和文字*/}
          <div className='flex w-full flex-col items-center  lg:w-1/2'>
            {/*logo*/}
            <div className='mb-4 flex items-start justify-center'>
              <img
                src='./img/logo-w.png' // logo白色
                className='mb-2 w-5/6' // 大小占父元素的5/6
              />
            </div>
            {/*基本信息*/}
            <div className='md:w-3/2 w-full '>
              <div className='mb-4 flex flex-row justify-between'>
                {/* 第一列，三行文字 */}
                <div className='w-auto '>
                  <p className='mb-2 text-sm'>Copyright&copy;计算机学院</p>
                  <p className='mb-2 text-sm'>电话：0596-2526960</p>
                  <p className='mb-2 text-sm'>邮编：363000</p>
                </div>
                {/* 第二列，四行文字 */}
                <div className='w-auto '>
                  <p className='mb-2 text-sm'>Email：jsjxb60@163.com</p>
                  <p className='mb-2 text-sm'>地址：福建省漳州市县前直街36号</p>
                </div>
              </div>
            </div>
          </div>
          {/*微博和微信*/}
          <div className='flex w-full flex-row items-center justify-center space-x-10 sm:w-full md:w-full lg:w-1/3 xl:w-1/3'>
            {/*微博*/}
            <div className='mb-4 flex flex-col items-center'>
              <img
                src={isMediumScreen ? './img/sena.svg' : './img/sena.png'}
                alt='学院微博'
                className={`mb-2 ${isMediumScreen ? 'h-10' : 'h-24'} sm:block`} // 缩小图片高度一倍，保持在中等屏幕和小屏幕上显示
              />
              <p className='text-sm'>学院微博</p>
            </div>
            {/*微信*/}
            <div className='mb-4 flex flex-col items-center'>
              <img
                src={isMediumScreen ? './img/wechat.svg' : './img/wechat.jpg'}
                alt='学院微信公众号'
                className={`mb-2 ${isMediumScreen ? 'h-10' : 'h-24'} sm:block`} // 缩小图片高度一倍，保持在中等屏幕和小屏幕上显示
              />
              <p className='text-sm'>学院微信</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
