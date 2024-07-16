import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About us",
  description: "Made with love",
};

const AboutPage = () => {
  return (
    <main className='flex w-full min-h-screen items-center'>
      <div className='lg:mt-[110px] mt-[70px]'>
        <h1 className=''>Hello my name is Antoine</h1>
        <p className=''>This is my life ...</p>
      </div>
    </main>
  );
};

export default AboutPage;