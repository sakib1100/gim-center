import React from 'react';

import image1 from './../image/service1.jpg';
import image2 from './../image/service2.jpg';
import image3 from './../image/service3.jpg';

const Service = () => {
    return (
 <div className='mb-5'>
  <h2 className='mt-32 text-center font-black text-4xl max-sm:text-3xl'>OUR SERVICES</h2>
  <div className='flex justify-center mt-10'>
<div className='grid lg:grid-cols-3 gap-5 max-sm:gird-cols-2 md:grid-col  sm:grid-cols-2'>

<div className="card lg:w-80 max-sm:w-72 shadow-xl md:w-80 max-md:80 glass">
  <figure><img src={image1} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-sec text-2xl font-bold">Super Equipment</h2>
    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis</p>
    <p className='btn btn-sm bg-orange-400 text-white border-none font-bold mt-1'>Explore More</p>
    <div className='text-center mt-2'>
    <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
</div>
    </div>
  </div>
</div>

<div className="card lg:w-80 max-sm:w-72 shadow-xl md:w-80 max-md:80 glass">
  <figure><img src={image2} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-sec text-2xl font-bold ">Free Training</h2>
    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis</p>
    <p className='btn btn-sm bg-orange-400 text-white border-none font-bold mt-1'>Explore More</p>
    <div className='text-center mt-2'>
    <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
</div>
    </div>
  </div>
</div>

<div className="card lg:w-80 max-sm:w-72 shadow-xl md:w-80 max-md:80 glass">
  <figure><img src={image3} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-sec text-2xl font-bold ">Multi Trainer</h2>
    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis</p>
    <p className='btn btn-sm bg-orange-400 text-white border-none font-bold mt-1'>Explore More</p>
    <div className='text-center mt-2'>
    <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
</div>
    </div>
  </div>
</div>



</div>
    
      </div>
 </div>
    );
};

export default Service;
