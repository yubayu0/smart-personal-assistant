import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

type MenuItems = {
  label: string,
  path: string,
}

const Container = ({ children }: { children: React.ReactNode }) => {

  const menu: MenuItems[] = [
    { label: "Home", path: "home" },
    { label: "About", path: "about" },
    { label: "Project", path: "project" },
  ]

  const handleScroll = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='w-full bg-green-500 min-h-screen flex flex-col'>
      <nav className='bg-red-400 w-full  flex justify-between items-center px-4 py-4'>
        <div>
          <span>Icon</span>
        </div>
        <div className='flex justify-between gap-2'>
          {menu.map((item) => (
            <button
              key={item.path}
              onClick={() => handleScroll(item.path)}
              style={{ marginRight: "10px" }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>
          <Button size="icon" className='bg-blue-300 neu-button rounded-sm  hover:bg-blue-200'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 6h18M3 12h18M3 18h18" /></svg>
          </Button>
        </div>
      </nav>

      <main className='flex-1 bg-blue-400'>
        {children}
      </main>

      <footer className='w-full flex justify-between items-center p-2'>
        <div className='w-full flex justify-center items-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </footer>
    </div>
  )
}

export default Container