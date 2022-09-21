import React from "react";

interface IProps {}

export const Header: React.FC<IProps> = () => {
  return (
    <header className='bg-custom-gray-100 text-white p-2'>
      <h1 className='text-4xl text-center'>header</h1>
    </header>
  );
};
