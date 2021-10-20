import React from 'react';
import info from '../../../images/info.jpg';
import './InnerInfo01.css';

const InnerInfo01 = () => {
    return (
        <div className="bg-white inner-info-one py-16 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-0 md:gap-x-12 items-center">
                <div>
                    <h2 className="capitalize text-4xl sm:text-5xl font-semibold mb-6">Improving The Quility Of Your life through better health</h2>
                    <blockquote className="font-semibold text-lg pl-6 border-l-2 w-10/12 border-lightBlue mb-6">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and to be the first and best choice for healthcare.</blockquote>
                    <p className="text-lg w-11/12">We will work with you to develop individualised care plans, including management of chronic diseases. We are committed to being the region’s premier healthcare network providing patient centered care that inspires clinical and service excellence.</p>

                    <a href="/#doctors"><button className="capitalize py-4 px-8 bg-lightGreen rounded-full text-black font-semibold text-lg mt-6">Meet our doctors</button></a>
                </div>
                <div>
                    <img src={info} alt="" />
                </div>
            </div>
        </div>
    );
};

export default InnerInfo01;