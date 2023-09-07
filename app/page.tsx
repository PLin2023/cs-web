'use client';

import { Image, Card, CardBody, CardFooter, CardHeader, Divider, Link } from '@nextui-org/react';
import React from 'react';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ThemeSwitcher } from '../components/ThemeSwitch';
//轮播图信息
const slides = [
  {
    image: './img/1.png',
    url: 'https://example.com',
    title: 'Slide 1',
  },
  {
    image: './img/2.png',
    url: 'https://example.com',
    title: 'Slide 2',
  },
  {
    image: './img/3.png',
    url: 'https://example.com',
    title: 'Slide 3',
  },
];
export default function Home() {
  return (
    <>
      <Slider slides={slides} />
      <Footer />
      <ThemeSwitcher />
      <div className='flex h-screen items-center justify-center'>
        <Card className='max-w-[400px]'>
          <CardHeader className='flex gap-3'>
            <Image
              alt='nextui logo'
              height={40}
              radius='sm'
              src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
              width={40}
            />
            <div className='flex flex-col'>
              <p className='text-md'>NextUI</p>
              <p className='text-small text-default-500'>nextui.org</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className='text-text'>Make beautiful websites regardless of your design experience.</p>
            <p className='text-background'>Make beautiful websites regardless of your design experience.</p>
            <p className='text-primary'>Make beautiful websites regardless of your design experience.</p>
            <p className='text-secondary'>Make beautiful websites regardless of your design experience.</p>
            <p className='text-accent'>Make beautiful websites regardless of your design experience.</p>
            <button className='rounded bg-text px-4 py-2 font-bold text-background'>text颜色</button>
            <button className='rounded bg-background px-4 py-2 font-bold text-text'>背景颜色</button>
            <button className='rounded bg-primary px-4 py-2 font-bold text-background'>主题颜色</button>
            <button className='rounded bg-secondary px-4 py-2 font-bold text-text'>次要颜色</button>
            <button className='rounded bg-accent px-4 py-2 font-bold text-background'>提示颜色</button>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href='https://github.com/nextui-org/nextui'>
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
