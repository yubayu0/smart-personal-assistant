
type cardToolsProps = {
  id? : string
  toolName? : string
  description? : string
  features? : string
}

const CardTools = (props : cardToolsProps) => {
  const { id, toolName, description, features } = props;
  return (
    <div className='max-w-[380px] h-auto relative flex flex-col gap-6 justify-center p-4 bg-white items-center border-2 border-black aspect-square neu rounded-md'>
      <div className='absolute bg-black rounded-sm p-1 right-4 top-4'>
        <p className='text-[10px] text-yellow-300'>
          {id}
        </p>
      </div>
      <div className='w-full'>
        <div className='w-18 aspect-square border-2 rounded-md border-black bg-yellow-100 flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm0 0V5zm2-2h10q.3 0 .45-.275t-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 16L9.4 13.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525T7 17" stroke-width="0.5" stroke="currentColor" /></svg>
        </div>
      </div>
      <div className='w-full flex flex-col gap-4'>
        <h2 className='font-bold text-lg'>{toolName}</h2>
        <p className='text-[12px]'>
          {description}
        </p>
      </div>
      <div className='w-full grid grid-cols-2 gap-2'>
        <div className='border-2 border-black bg-gray-300 p-2 rounded-sm'>
          <p className='text-[12px] font-semibold'>
            {features}
          </p>
        </div>
        <div className='border-2 border-black bg-gray-300 p-2 rounded-sm'>
          <p className='text-[12px] font-semibold'>
            Work Offline
          </p>
        </div>
        <div className='border-2 border-black bg-gray-300 p-2 rounded-sm'>
          <p className='text-[12px] font-semibold'>
            No Data Sharing
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardTools