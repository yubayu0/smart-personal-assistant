import { React, useState, useEffect, useRef } from 'react'
import { Button } from './ui/button'
import { useClickOutside } from '@/lib/clickOutside'


type alertCardProps = {
  headMessage?: string;
  message?: string;
  message2?: string;
  buttonText?: string;
  actionClick?: () => void;
  closeCard?: () => void
}

const AlertCard = (props: alertCardProps) => {

  const { headMessage = "Haii", message = "Login First", message2 = "lalalal lalala allalallla", buttonText = "Click Me", actionClick, closeCard } = props;

  const cardRef = useRef<HTMLDivElement>(null);

  // Tutup jika klik di luar card
  useClickOutside(cardRef, () => {
    if (closeCard) closeCard();
  });
  return (
    <div ref={cardRef} className='w-120 h-90 bg-white border-2 border-black rounded-xl overflow-auto animate-card-show'>
      <div className='flex justify-between items-center bg-blue-500 h-2/10 px-4'>
        <h2 className='font-semibold'>
          {headMessage}
        </h2>
        <Button onClick={closeCard} size='icon' className='neu-button bg-white border-1 border-black'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" /></svg>
        </Button>
      </div>
      <div className='w-full h-6/10 bg-grid border-y-2 border-black flex justify-center items-center flex-col'>
        <span className='font-semibold text-xl text-red-800'>
          {message}
        </span>
        <p className='font-light text-sm w-80 text-center'>
          {message2}
        </p>
      </div>

      <div className='w-full h-2/10 bg-blue-500 p-4 gap-4 flex justify-center items-center'>
        <Button
          rel="noopener noreferrer"
          onClick={actionClick}
          className='flex w-full gap-2 justify-center bg-white items-center border-2 border-black neu-button'>
          {buttonText}
        </Button>
      </div>
    </div>

  )
}

export default AlertCard