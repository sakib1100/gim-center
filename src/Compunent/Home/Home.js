import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import Team from '../Team/Team';
import image from './../image/young-healthy-man-athlete-posing-confident-with-ropes-gym.jpg';
const Home = () => {
    return (
<div>
           
<div class="hero min-h-screen" >
   <img src={image} className="h-screen bg-cover w-full" />
   
  <div class="hero-overlay "></div>
  <div class=" text-center text-neutral-content">
    <div class="max-w-lg">
      <h1 class="mb-5 text-5xl font-black font-sans max-sm:leading-tight leading-none max-sm:text-3xl">BUILD PERFECT BODY SHAPE FOR GOODD AND  HEALTHY LIFE</h1>
      <button class="btn bg-orange-400 border-none max-sm:btn-md ">See More</button>
    </div>
  </div>
</div>


<About />

<Service />

<Team />

<Contact />

<Footer />

</div>

    );
};

export default Home;