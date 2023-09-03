'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Logo() {
  const router = useRouter();

  return (
    <div className='flex h-14 w-48 items-center md:w-72 lg:w-96'>
      <Image
        onClick={() => router.push('/')}
        className='cursor-pointer'
        src='/images/bluelogo.png'
        alt='Logo'
        layout='responsive'
        width={10}
        height={10}
      />
    </div>
  );
}
