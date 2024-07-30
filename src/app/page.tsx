import React from 'react';
import Image from 'next/image';
import inventory from '../../public/inventory.svg';
import SecondaryWhiteButtonWIcon, { PrimaryButtonWIcon } from '../../components/Buttons';
import { Palette, SwatchBook } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className='flex min-h-screen bg-emerald-700 justify-center lg:items-center'>

      <div className='lg:flex w-full lg:mt-[110px] mt-[70px] content-center'>

        <div className='lg:content-center lg:w-1/2 lg:mx-4 mx-2 lg:mb-0 mb-5 lg:mt-0 mt-2'>

          <div className='w-fit lg:ml-auto lg:mx-0 mx-auto'>

            <h1 className='font-dm-sans text-back-purple lg:text-5xl/[66px] text-4xl text-center font-bold text-white flex lg:mb-4 mb-3 lg:max-w-[574px] lg:min-h-[132px] max-w-[375px] min-h-[150px]'>What&apos;s in your palette ? That is the question ...</h1>
            <h2 className=' font-dm-sans text-grey-purple lg:text-lg/[30px] line-clamp-3 text-base text-center text-white font-extralight mb-10 lg:max-w-[574px] lg:min-h-[60px] max-w-[375px] min-h-[48px]'>
              Don&apos;t tell me you&apos;ve never wondered how many paints do you have ? Wich brand ? Wich colors ? ...
            </h2>
            <div className='flex lg:mb-0 justify-center'>
              <SecondaryWhiteButtonWIcon buttonSize='default' name={"My paints"} icon={<Palette strokeWidth={1.75} />} />
            </div>
          </div>
        </div>

        <div className='lg:w-1/2 lg:mx-4 mx-2'>
          <div className=' flex w-full content-center lg:justify-start justify-center'>
            <Image
              src={inventory}
              alt='inventory image'
              className=' lg:max-h-[560px] lg:max-w-[560px] max-h-[382px] max-w-[382px] min-h-[310px] min-w-[310px]'>
            </Image>
          </div>
        </div>

      </div>

    </div >
  );
};

export default LandingPage;