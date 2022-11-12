import React from 'react';
import image2 from  './../image/young-caucasian-bodybuilder-training-studio-background-neon-light-muscular-male-model-resting-after-cross-fit-exercises-concept-sport-bodybuilding-healthy-lifestyle-motion-action.jpg';
const About = () => {
    return (
     <div className='container'>

<div className='row sm:py-5 flex justify-center items-center'>
<p className='text-5xl max-sm:text-4xl text-center my-20 font-black'>About Us</p>
<div className='col-md-6'>
<img src={image2} className=" max-w-4/12 rounded-lg shadow-2xl" />
</div>
<div className='col-md-6 max-sm:mt-10 max-sm:text-center'>
    <h1 className="text-5xl font-semibold max-sm:text-3xl">WHAT WE HAVE DONE</h1>
<p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
<button className="btn bg-orange-500 border-none text-white">SEE More</button>
</div>
</div>

     </div>  
    );
};

export default About;

