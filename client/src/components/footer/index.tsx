import React from "react";

interface IProps {}

export const Footer: React.FC<IProps> = () => {
  return (
    <footer className='bg-custom-gray-100 text-white p-2'>
      <p className='text-center text-4xl'>footer</p>
    </footer>
  );
};
