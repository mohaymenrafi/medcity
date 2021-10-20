import React from 'react';
import { Link } from 'react-router-dom';
import useService from '../../hooks/useService';
import ServiceLists from './ServiceLists/ServiceLists';
import './Services.css';

const Services = () => {
    const [services] = useService();
    return (
        <div>
            <div className="service-banner py-16 px-4">
                <div className="container mx-auto py-16">
                    <h3 className="capitalize text-lightGreen text-2xl mb-6">Caring for the health of you and your family</h3>
                    <h2 className="capitalize sand text-4xl sm:text-5xl text-textBlue sm:w-8/12 lg:w-7/12 font-bold">We Provide All Aspects of Medical Practice For Your Whole Family!</h2>
                    <p className="font-semibold text-lg sm:w-7/12 lg:w-5/12 my-6">Medcity has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure.</p>
                    <Link to="/about"><button className="py-4 px-8 bg-lightGreen rounded-full text-black font-semibold text-lg" >About Us</button></Link>
                </div>
            </div>
            {/* services section  */}
            <div className="service-listing py-16 px-4">
                <div className="container mx-auto py-16">
                    <h3 className="font-semibold font-lg text-textBlue text-center">The Best Medical And General Practice Care!</h3>
                    <h2 className="text-4xl sm:text-5xl sand font-bold sm:w-6/12 mx-auto text-center my-6 text-textBlue">Providing Medical Care For The Sickest In Our Community.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                        {
                            services.map(service => <ServiceLists key={service.id} service={service}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;