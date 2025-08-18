import { useState } from 'react'
import { Button } from '../ui/button'



const ContainerSidebar = ({ children }: { children: React.ReactNode }) => {


  const [openSidebar, setOpenSidebar] = useState(true)
  const handleOpenSidebar = () => {
    setOpenSidebar(prev => !prev)
  }

  return (
    <>
      <div className='flex w-full h-screen'>
        <aside className={`w-0 flex flex-col h-full border-r-2 relative overflow-hidden border-black transform transition-all duration-300 ease-in-out ${!openSidebar ? "w-0" : "w-60"}`}>
          <div className='bg-blue-50 w-full  h-[50px] flex justify-between p-2 items-center'>
            <div className='gap-2 flex justify-center items-center'>
              <div className='rounded-full w-8 aspect-square flex items-center justify-center  border-2 border-black'>
                Y
              </div>
              <div className='flex flex-col'>
                <h2 className='text-[15px]'>Acme Insc</h2>
                <p className='text-[12px]'>Enterprise</p>
              </div>
            </div>
            <div className='rotate-90'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="currentColor" d="M23.43 16.83A1 1 0 0 0 22 18.24L25.72 22H7.83a1 1 0 0 0 0 2h17.89L22 27.7a1 1 0 1 0 1.42 1.41L29.53 23Z" class="clr-i-outline clr-i-outline-path-1" /><path fill="currentColor" d="M13.24 18.45a1 1 0 0 0 .71-1.71L10.24 13h17.88a1 1 0 0 0 0-2H10.24l3.71-3.73a1 1 0 0 0-1.42-1.41L6.42 12l6.11 6.14a1 1 0 0 0 .71.31" class="clr-i-outline clr-i-outline-path-2" /><path fill="none" d="M0 0h36v36H0z" /></svg>
            </div>
          </div>


          <div className='flex-1'>
            <div className='p-2'>
              Dashboard
            </div>
            <div className='flex p-2 flex-col text-sm font-bold'>
              <button className='flex justify-start items-center gap-2 px-2 py-1 w-full hover:bg-gray-400 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4h8v6h-8zm0 17V11h8v10zm-9 0v-6h8v6zm0-7V4h8v10zm1-9v8h6V5zm9 0v4h6V5zm0 7v8h6v-8zm-9 4v4h6v-4z" stroke-width="0.5" stroke="currentColor"/></svg>
                <h2>DASHBOARD</h2>
              </button>
              <button className='flex justify-start items-center gap-2 px-2 py-1 w-full hover:bg-gray-400 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="6" r="1" fill="currentColor" /><path fill="currentColor" d="M6 17h12v2H6zm4-5.17l2.792 2.794l3.932-3.935L18 12V8h-4l1.31 1.275l-2.519 2.519L10 9l-4 4l1.414 1.414z" /><path fill="currentColor" d="M19 3h-3.298a5 5 0 0 0-.32-.425l-.01-.012a4.43 4.43 0 0 0-2.89-1.518a2.6 2.6 0 0 0-.964 0a4.43 4.43 0 0 0-2.89 1.518l-.01.012a5 5 0 0 0-.32.424V3H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V6a3.003 3.003 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.55a2.5 2.5 0 0 1 4.9 0H19a1 1 0 0 1 1 1Z" /></svg>
                <h2>PROJECT</h2>

              </button>
              <button className='flex justify-start items-center gap-2 px-2 py-1 w-full hover:bg-gray-400 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12.5 9.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75m.75 4.75a.75.75 0 1 0 0 1.5h3.5a.75.75 0 1 0 0-1.5zm-2.47-5.22a.75.75 0 1 0-1.06-1.06L8.25 9.19l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm0 4.44a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75z" /></svg>
                <h2>TASK</h2>

              </button>
            </div>
          </div>

          <div className='bg-blue-50 w-full  h-[50px] flex justify-between p-2 items-center '>
            <div className='gap-2 flex justify-center items-center'>
              <div className='rounded-full w-8 aspect-square flex items-center justify-center  border-2 border-black'>
                Y
              </div>
              <div className='flex flex-col'>
                <h2 className='text-[15px]'>Acme Insc</h2>
                <p className='text-[12px]'>Enterprise</p>
              </div>
            </div>
            <div className='rotate-90'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="currentColor" d="M23.43 16.83A1 1 0 0 0 22 18.24L25.72 22H7.83a1 1 0 0 0 0 2h17.89L22 27.7a1 1 0 1 0 1.42 1.41L29.53 23Z" class="clr-i-outline clr-i-outline-path-1" /><path fill="currentColor" d="M13.24 18.45a1 1 0 0 0 .71-1.71L10.24 13h17.88a1 1 0 0 0 0-2H10.24l3.71-3.73a1 1 0 0 0-1.42-1.41L6.42 12l6.11 6.14a1 1 0 0 0 .71.31" class="clr-i-outline clr-i-outline-path-2" /><path fill="none" d="M0 0h36v36H0z" /></svg>
            </div>
          </div>
        </aside>

        <div className='flex w-10 justify-center items-start p-2'>
          <Button onClick={handleOpenSidebar} className='neu-button w-8 h-8 bg-yellow-300 flex border-2 border-black'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 2h20v20H2zm2 2v5.5h16V4zm16 7.5H4V20h16zM5.996 6H8v2h-.004v.004h-2zM10 6h8v2h-8z" /></svg>
          </Button>
        </div>

        <main className='w-full px-2'>
          {children}
        </main>
      </div>

    </>
  )
}

export default ContainerSidebar