import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto  py-12 p-4 grid md:grid-cols-3 gap-6'>
        {/* card */}
         <div className='rounded-xl relative'>
            {/* overlay */}
             <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, Biryani's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
             </div>
             <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
         </div>
         {/* card */}
         <div className='rounded-xl relative'>
            {/* overlay */}
             <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Sets, Samosa's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
             </div>
             <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
         </div>
         {/* card */}
         <div className='rounded-xl relative'>
            {/* overlay */}
             <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's on Top, Lunch's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
             </div>
             <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
         </div>
      
    </div>
  )
}

export default HeadlineCards
