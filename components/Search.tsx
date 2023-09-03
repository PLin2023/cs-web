'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Input } from '@nextui-org/react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Logo() {
  const router = useRouter();

  return (
    <Input
      classNames={{
        base: 'lg:max-w-[10rem] max-w-[5rem]',
        input: 'text-small',
        inputWrapper: 'h-1 border border-customBorder font-normal text-default-500 bg-default-backgroud dark:bg-default-500/20',
      }}
      placeholder='搜索'
      startContent={<AiOutlineSearch />}
      size='sm'
      type='search'
    />
  );
}
