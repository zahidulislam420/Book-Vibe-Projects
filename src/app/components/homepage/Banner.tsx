import Image from 'next/image';
import React from 'react';
import bannerImage from '@/assets/hero_img.jpg';

const Banner = () => {
//     return (
//    <section className="py-20">
//          <div className='container mx-auto grid grid-cols-2 gap-4 items-center bg-slate-300 rounded-4xl p-4'>
//             <div className="space-y-4">
//                 <h2 className='font-bold text-5xl'>Books to freshen up your bookshelf</h2>
//                 <button className='btn btn-success'>View the task</button>
//             </div>

//             <div>
//                 <Image src={bannerImage} alt="Banner-image" />
//             </div>

//         </div>
//    </section>
//     );

return (
  <section className="py-20 bg-gradient-to-r from-slate-100 to-slate-200">
    <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center bg-white shadow-xl rounded-3xl p-8">
      
      {/* Left Content */}
      <div className="space-y-6">
        <h2 className="font-extrabold text-4xl md:text-5xl text-gray-800 leading-tight">
          Books to freshen up your bookshelf
        </h2>
        <p className="text-gray-600 text-lg">
          Discover curated collections that bring inspiration, knowledge, and creativity to your reading space.
        </p>
        <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition duration-300">
          View the task
        </button>
      </div>

      {/* Right Content */}
      <div className="flex justify-center">
        <Image
          src={bannerImage}
          alt="Banner image"
          className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </section>
);





};

export default Banner;