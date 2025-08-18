import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const HumbergerButton = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <Button
      onClick={toggleMenu}
      aria-label="Toggle menu"
      size='icon'
      className="flex flex-col justify-center items-center gap-[10px] bg-blue-300 rounded-sm neu-button relative border-2 border-black"
    >
      <span
        className={`block w-[22px] h-[4px] bg-black rounded-full transform transition-all duration-300 ease-in-out
    ${open ? "scale-0" : "scale-100"}`}
      />
      <span
        className={`block w-[22px] h-[4px] bg-black rounded-full transition duration-300 ease-in-out absolute z-10
    ${open ? "rotate-45" : ""}`}
      />
      <span
        className={`block w-[22px] h-[4px] bg-black rounded-full transition duration-300 ease-in-out absolute
    ${open ? "-rotate-45" : ""}`}
      />
      <span
        className={`block w-[22px] h-[4px] bg-black rounded-full transform transition-all duration-300 ease-in-out
    ${open ? "scale-0" : "scale-100"}`}
      />

    </Button>
  )
}

export default HumbergerButton