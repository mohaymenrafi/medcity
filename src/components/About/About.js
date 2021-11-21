import React from 'react';
import { Link } from 'react-router-dom';
import InnerInfo01 from '../Home/InnerInfo01/InnerInfo01';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDna, faFilePrescription, faPrescriptionBottleAlt, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import MeetOurDoctors from '../Home/MeetOurDoctors/MeetOurDoctors';

const About = () => {
    return (
        <div>
            <div className="about-banner py-16 px-4">
                <div className="container mx-auto py-16">
                    <h2 className="text-white text-5xl sm:text-6xl sand font-bold sm:w-8/12 lg:w-7/12">Caring For The Health & Well Being Of Family.</h2>
                    <p className="mt-8 text-lg font-medium sm:w-8/12 text-white">Medcity has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure.</p>
                    <Link to="/services"><button className="mt-8 py-4 px-8 bg-black rounded-full text-white font-semibold text-lg" >Our Serivces</button></Link>
                </div>
            </div>
            <InnerInfo01></InnerInfo01>
            <div className="about-info py-16 px-4">
                <div className="container mx-auto">
                    <h3 className="capitalize text-lightGreen text-2xl text-center mb-6">Caring for the health of you and your family</h3>
                    <h2 className="capitalize sand text-4xl sm:text-5xl text-white text-center sm:w-8/12 lg:w-6/12 mx-auto font-bold">We Provide All Aspects of Medical Practice For Your Whole Family!</h2>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-12">
                    <div className="info bg-white rounded-lg p-8">
                        <FontAwesomeIcon icon={faFilePrescription} color="darkBlue" size="3x" />
                        <h3 className="sand text-2xl my-4 font-bold">Fill in out medical application</h3>
                        <p className="text-lg mb-4">Medcity offers low-cost health coverage for adults with limited income, you can enroll</p>
                        <button disabled className="capitalize font-bold sand"> doctor's timetable </button>
                    </div>
                    <div className="info bg-white rounded-lg p-8">
                        <FontAwesomeIcon icon={faDna} color="darkBlue" size="3x" />
                        <h3 className="sand text-2xl my-4 font-bold">Review Your Family Medical History</h3>
                        <p className="text-lg mb-4">Regular health exams can help find all the problems, also can find it early
                            chances.
                        </p>
                        <button disabled className="capitalize font-bold sand">start a checkup </button>
                    </div>
                    <div className="info bg-white rounded-lg p-8">
                        <FontAwesomeIcon icon={faPrescriptionBottleAlt} color="darkBlue" size="3x" />
                        <h3 className="sand text-2xl my-4 font-bold">Choose Between Our Care Programs</h3>
                        <p className="text-lg mb-4">We have protocols to protect our patients while continuing to provide</p>
                        <button disabled className="capitalize font-bold sand"> explore programs </button>
                    </div>
                    <div className="info bg-white rounded-lg p-8">
                        <FontAwesomeIcon icon={faStethoscope} color="darkBlue" size="3x" />
                        <h3 className="sand text-2xl my-4 font-bold">Introduce You To Highly Qualified Doctors</h3>
                        <p className="text-lg mb-4">Our administration and support staff have exceptional skills and trained to
                    assist you. </p>
                        <button disabled className="capitalize font-bold sand"> meet our doctors </button>
                    </div>
                </div>
            </div>
            <MeetOurDoctors></MeetOurDoctors>
        </div>
    );
};

export default About;