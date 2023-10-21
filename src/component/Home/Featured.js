import React from 'react';
import featured1 from "../Images/featured1.jpg";
import featured2 from "../Images/featured2.jpg";
const Featured = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <h1 className='text-2xl text-left font-medium mb-10'>Featured</h1>
            <div className='flex '>
                        <div className="card w-full ">
                            <figure><img src={featured1} alt="Shoes" /></figure>
                                        </div>
                        <div className="card w-full ">
                        <figure><img src={featured2} alt="Shoes" /></figure>
                        </div>
            </div>
      </div>
    );
};

export default Featured;