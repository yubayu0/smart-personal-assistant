import React, {  useState } from 'react'
import { Button } from '../ui/button'


import AlertCard from '../AlertCard'



type MenuItems = {
  label: string;
  path: string;
  icon?: React.ReactNode;
};

const Container = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [alertCardOpen, setAlertCardOpen] = useState(false)
  const toggleMenu = () => setOpen((prev) => !prev);
  const menu: MenuItems[] = [
    {
      label: "CHAT",
      path: "home",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M216 44H40a20 20 0 0 0-20 20v160a19.82 19.82 0 0 0 11.56 18.1a20.1 20.1 0 0 0 8.49 1.9a19.9 19.9 0 0 0 12.82-4.72l.12-.11L84.47 212H216a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H80a11.93 11.93 0 0 0-7.84 2.92L44 215.23V68h168Z" stroke-width="6.5" stroke="currentColor"/></svg>
      )
    },
    {
      label: "TRANSCRIBE", path: "about", icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M19.07 12.01a1 1 0 0 1 .85 1.132A8.004 8.004 0 0 1 13 19.938V21a1 1 0 1 1-2 0v-1.062a8.005 8.005 0 0 1-6.919-6.796a1 1 0 0 1 1.98-.284a6.002 6.002 0 0 0 11.878 0a1 1 0 0 1 1.132-.848ZM12 2a5 5 0 0 1 5 5v5a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v5a3 3 0 1 0 6 0V7a3 3 0 0 0-3-3" stroke-width="0.5" stroke="currentColor"/></g></svg>
      )
    },
    {
      label: "BG REMOVER", path: "features", icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm0 0V5zm2-2h10q.3 0 .45-.275t-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 16L9.4 13.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525T7 17" stroke-width="0.5" stroke="currentColor"/></svg>
      )
    },
  ]

  const handleScroll = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAlertCardOpen = () => {
    setAlertCardOpen(true)
  }
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-full flex p-4  justify-center items-center'>
        <nav className='rounded-md h-16  w-[800px] bg-white gap-8 neu flex justify-between items-center px-4 py-4 md:px-8'>
          <Button size='icon' className='neu-button bg-yellow-300'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11.03 2.59a1.5 1.5 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z" stroke-width="0.5" stroke="currentColor" /></svg>
          </Button>
          <div className='justify-start gap-10 w-full hidden md:flex'>
            {menu.map((menu) => (
              <button
                key={menu.path}
                onClick={() => handleScroll(menu.path)}
                className='flex justify-center items-center gap-1'
              >
                {menu.icon}
                <p className='text-[12px] font-bold'>
                  {menu.label}
                </p>
              </button>
            ))}
          </div>
          <div className='flex justify-center items-center gap-2'>
            <Button size='icon' onClick={handleAlertCardOpen} className='neu-button border-2 border-black'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M6.315 6.176c-.25-.638-.24-1.367-.129-2.034a6.8 6.8 0 0 1 2.12 1.07c.28.214.647.283.989.18A9.3 9.3 0 0 1 12 5c.961 0 1.874.14 2.703.391c.342.104.709.034.988-.18a6.8 6.8 0 0 1 2.119-1.07c.111.667.12 1.396-.128 2.033c-.15.384-.075.826.208 1.14C18.614 8.117 19 9.04 19 10c0 2.114-1.97 4.187-5.134 4.818c-.792.158-1.101 1.155-.495 1.726c.389.366.629.882.629 1.456v3a1 1 0 0 0 2 0v-3c0-.57-.12-1.112-.334-1.603C18.683 15.35 21 12.993 21 10c0-1.347-.484-2.585-1.287-3.622c.21-.82.191-1.646.111-2.28c-.071-.568-.17-1.312-.57-1.756c-.595-.659-1.58-.271-2.28-.032a9 9 0 0 0-2.125 1.045A11.4 11.4 0 0 0 12 3c-.994 0-1.953.125-2.851.356a9 9 0 0 0-2.125-1.045c-.7-.24-1.686-.628-2.281.031c-.408.452-.493 1.137-.566 1.719l-.005.038c-.08.635-.098 1.462.112 2.283C3.484 7.418 3 8.654 3 10c0 2.992 2.317 5.35 5.334 6.397A4 4 0 0 0 8 17.98l-.168.034c-.717.099-1.176.01-1.488-.122c-.76-.322-1.152-1.133-1.63-1.753c-.298-.385-.732-.866-1.398-1.088a1 1 0 0 0-.632 1.898c.558.186.944 1.142 1.298 1.566c.373.448.869.916 1.58 1.218c.682.29 1.483.393 2.438.276V21a1 1 0 0 0 2 0v-3c0-.574.24-1.09.629-1.456c.607-.572.297-1.568-.495-1.726C6.969 14.187 5 12.114 5 10c0-.958.385-1.881 1.108-2.684c.283-.314.357-.756.207-1.14" stroke-width="0.5" stroke="currentColor" /></g></svg>
            </Button>
            <Button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              size='icon'
              className="flex md:hidden flex-col justify-center items-center gap-[10px]  rounded-sm neu-button relative border-2 border-black"
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
          </div>
        </nav>
      </div>

      <main className='w-full  max-w-[850px] h-auto'>
        {children}
      </main>

      <footer className='w-full flex justify-between items-center p-2'>
        <div className='w-full flex justify-center items-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </footer>



      <nav className={`block md:hidden w-full border-b-2  border-black absolute p-5 top-20 transform transition-all duration-300  ease-in-out origin-top scale-y-0 bg-white ${open ? "scale-y-100" : ""}`} >
        <div className='flex flex-col justify-center gap-3 font-bold'>
          {menu.map((menu) => (
            <button
            className='flex justify-center items-center gap-2 bg-blue-400'
              key={menu.path}
              onClick={() => handleScroll(menu.path)}
              style={{ marginRight: "10px" }}
            >
              {menu.icon}
              {menu.label}
            </button>
          ))}
        </div>
      </nav>

      {alertCardOpen ? (
        <div className='absolute z-99 w-full h-full flex justify-center items-center'>
          <AlertCard
            headMessage='Hello'
            message='Yohooo'
            message2='kamu berhasil login'
            buttonText='Clik Me'
            actionClick={() => window.open('https://chromewebstore.google.com/detail/plug/cfbfdhimifdmdehjmkdobpcjfefblkjm', '_blank')}
            closeCard={() => setAlertCardOpen(false)
            }
          />
        </div>
      ) : (
        <div></div>
      )

      }
    </div>
  )
}

export default Container