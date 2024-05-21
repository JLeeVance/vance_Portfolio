export default function Home() {
  return (
    // <div class='flex min-h-screen flex-col justify-center items-center p-2'>
    //     <p class='text-5xl font-poiret text-center pb-5'>J Vance</p>
    //     <p class='text-left font-armata'>Full Stack Software Engineer</p>
    //     <p class='text-left font-armata'>and Professional Actor</p>
    // </div>

  <div className='flex justify-center min-h-screen mt-40'>
    <div className='grid grid-cols-3 gap-1'>
      <div className='col-span-3'>
        <p className='text-9xl font-poiret text-center' >J Vance</p>
      </div>
      <div className='col-span-3 text-center'>
        <p className='font-armata text-xl'>Full-Stack Software Engineer</p>
      </div>
      <div className='col-span-3 text-center'>
        <hr className='my-2 border-black w-100' />
      </div>
      <div className='col-span-3 text-center'>
        <p className='font-armata text-xl'>Professional Actor</p>
      </div>
    </div>
  </div>
  );
}
