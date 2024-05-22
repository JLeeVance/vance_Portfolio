export default function Home() {

  return (
    <div className='flex justify-center min-h-screen'>
      <div className='grid grid-cols-3'>
        <div className='col-span-3 text-center'>
          <p className='text-9xl font-poiret text-customDBrown mt-40 mb-10 ' >J Vance</p>
          <p className='font-armata text-md text-customBrown'>Full-Stack Software Engineer</p>
          <hr className='border-customDSage w-100 my-2' />
          <p className='font-armata text-md text-customBrown'>Professional Actor</p>
        </div>
      </div>
    </div>
  );
}
