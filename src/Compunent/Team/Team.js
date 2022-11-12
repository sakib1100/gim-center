import React from 'react';
import image1 from './../image/service1.jpg';
import image2 from './../image/team1.jpg';
import image3 from './../image/team2.jpg';
import image4 from './../image/team3.jpg';
import image5 from './../image/team4.jpg';
import image6 from './../image/service3.jpg';

const Team = () => {
    return (
     
<div  className='mb-5'>
<h2 className='mt-32 text-center font-black text-4xl max-sm:text-3xl'>OUR SUPER TEAM</h2>
 <div className='flex justify-center mt-10'>
    <div className='grid  lg:grid-cols-3 gap-y-10 max-sm:gird-cols-2 md:grid-col  sm:grid-cols-2'>
    <div className="  cursor-pointer w-96   max-sm:w-60 shadow-xl mask mask-parallelogram-2">
    <img className="shasow-xl hover:scale-110 transition duration-300 ease-in-out" src={image1} />
    </div>
    <div className=" w-96  max-sm:w-60 shadow-xl mask mask-parallelogram-2">
    <img className=" shasow-xl hover:scale-110 transition duration-300 ease-in-out" src={image2} />
    </div>
    <div className=" w-96  max-sm:w-60 shadow-xl mask mask-parallelogram-2">
    <img className="shasow-xl hover:scale-110 transition duration-300 ease-in-out" src={image3} />
    </div>
    <div className=" w-96  max-sm:w-60 shadow-xl mask mask-parallelogram-2">
    <img className="shasow-xl hover:scale-110 transition duration-300 ease-in-out" src={image4} />
    </div>
    <div className=" w-96  max-sm:w-60 shadow-xl mask mask-parallelogram-2">
    <img className="shasow-xl hover:scale-110 transition duration-300 ease-in-out" src={image5} />
    </div>
    <div className=" w-96 max-sm:w-60 shadow-xl mask mask-parallelogram-2">
    <img className="shasow-xl hover:scale-110 transition duration-300 ease-in-out" src={image6} />
    </div>
 </div>
</div>
</div>
    );
};

export default Team;






