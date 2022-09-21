import React from "react";
import { Footer } from "../footer";
import { Header } from "../header";

interface IProps {
  children: React.ReactElement;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='bg-custom-gray-200 text-white p-2 flex-1'>
        {children}
      </main>
      <Footer />
    </div>
  );
};
