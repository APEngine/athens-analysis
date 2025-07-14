// HoverInfo.tsx
import React from 'react';

type HoverInfoProps = {
  children: React.ReactNode;
  info: React.ReactNode;
};

export const HoverInfo = ({ children, info }: HoverInfoProps) => {
  return (
    <div className="relative group cursor-pointer inline-block">
      {children}
      <div className="absolute z-10 hidden group-hover:block bg-[#E0E0E0] text-black text-sm px-2 py-1 rounded shadow-lg w-max max-w-xs top-full mt-1 right-0">
        {info}
      </div>
    </div>
  );
};
