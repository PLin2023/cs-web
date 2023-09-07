import React, { useState, useEffect } from 'react';
import { TfiAngleDoubleDown } from 'react-icons/tfi';
import { FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { useTheme } from 'next-themes';
// 类型限制
interface Slide {
  image: string; // 图片路径
  url?: string; // 链接地址（可选）
  title?: string; // 标题（可选）
}

interface SliderProps {
  slides: Slide[]; // 幻灯片数组
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState<number>(0); // 当前幻灯片的索引

  const nextSlide = () => {
    // 显示下一张幻灯片
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    // 显示上一张幻灯片
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToSlide = (index: number) => {
    // 跳转到指定索引的幻灯片
    setCurrentSlide(index);
  };

  useEffect(() => {
    // 自动切换幻灯片
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      // 组件卸载时清除定时器
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='relative'>
      {/*左点击按钮*/}
      <button className='text-fixwhite absolute left-4 top-1/2 z-10 -translate-y-1/2 transform' onClick={prevSlide}>
        <FaChevronLeft className='sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl' />
      </button>
      {/*右点击按钮*/}
      <button
        className='text-fixwhite absolute right-4 top-1/2 z-10 -translate-y-1/2 transform sm:text-base md:text-lg lg:text-xl xl:text-2xl'
        onClick={nextSlide}
      >
        <FaChevronRight className='sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl' />
      </button>
      <img
        className='sm:h-205 md:h-205 lg:h-496 w-full object-cover xl:h-screen'
        src={slides[currentSlide].image} // 当前幻灯片的图片路径
        alt={`${slides[currentSlide].title} - Slide ${currentSlide + 1}`} // 当前幻灯片的标题
      />
      <div className='absolute bottom-4 right-4 flex space-x-2'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-fixblue' : 'bg-fixwhite'}`}
            onClick={() => goToSlide(index)} // 点击圆点跳转到对应索引的幻灯片
          ></div>
        ))}
      </div>
      <div className='absolute bottom-0 left-1/2 mb-6 -translate-x-1/2 transform'>
        <TfiAngleDoubleDown className='text-fixwhite hidden animate-bounce text-5xl xl:block' />
      </div>
    </div>
  );
};

export default Slider;
