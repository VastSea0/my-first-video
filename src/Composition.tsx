import React from 'react';
import {PenguenCard} from './PenguenCard';
import { Rain } from './Rain';

export const MyComposition = () => {

    

  return (
    <div className='flex justify-center items-center h-full w-full'>
      <PenguenCard />
      <Rain />
    </div>

  );
};
