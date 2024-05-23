import Link from "next/link"


export default function DevHeader(){

    return(
        <div className='container mx-auto text-center pt-3 mt-[3vh] bg-slate-200'>
            <div className='grid gap-1'>
                <span className='col-span-12 font-poiret text-[5vh]'>
                    J Vance
                </span>
                <hr  className='col-span-12 border-customDSage mx-[33vw]'/>
                <span className='col-span-12 font-armata text-[1.5vh] mb-[1vh]'>
                    Software Engineer
                </span>
                <div className='col-span-3' />
                <div className='col-span-3 text-[1.25vh]'>
                    Resume?
                </div>
                <div className='col-span-3 text-[1.25vh]'>
                    <Link href='https://www.linkedin.com/in/justinleevance/'>
                        <img src='/linkedInIcon.png' className='w-[3vw]'/>
                    </Link>
                </div>
                <div className='col-span-3' />
            </div>
        </div>
    )
}