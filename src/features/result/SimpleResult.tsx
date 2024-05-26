import React from 'react';
import { IconType } from 'react-icons/lib';

interface Props {
  name: string;
  value: string;
  comment?: string;
  Icon?: IconType;
}

export default function SimpleResult({ name, value, comment, Icon }: Props) {
  return (
    <div className="w-2/5 flex justify-between px-5">
      <div className="w-full aspect-[1/1] border-2 rounded-xl p-3 flex flex-col justify-between">
        <div className="text-lg font-medium flex justify-between items-center">
          <p>{name}</p>
        </div>
        <div className="text-2xl font-medium">{value}</div>
        <div className="text-gray-400 w-full text-center ">
          <p className="whitespace-pre-line">{comment}</p>
        </div>
      </div>
    </div>
  );
}
