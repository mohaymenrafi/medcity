import React from 'react';
import { useParams } from 'react-router';
import useService from '../../hooks/useService';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const [services] = useService();
    const { serviceId } = useParams();
    const singleService = services.filter(service => parseInt(service.id) === parseInt(serviceId))
    console.log(singleService[0])
    return (
        <div>
            <div className="container mx-auto md:px-12 py-16 lg:w-7/12 px-4">
                <img src={singleService[0]?.img} alt="" className="block mx-auto border rounded-full p-6"/>
                <h2 className="text-center text-4xl sm:text-5xl sand font-bold mt-8">{singleService[0]?.title}</h2>
                <p className="font-medium text-textBlue text-lg text-center mt-6">{singleService[0]?.shortInfo}</p>
                <p className="font-normal text-black text-lg mt-16">{singleService[0]?.detailsOne}</p>
                <p className="font-normal text-black text-lg mt-6">{singleService[0]?.detailsTwo}</p>
                <h3 className="text-textBlue sand font-semibold text-3xl sm:text-4xl mt-8">Core Values</h3>
                <p className="font-normal text-black text-lg mt-4">{singleService[0]?.coreValue}</p>
                
            </div>
        </div>
    );
};

export default ServiceDetails;