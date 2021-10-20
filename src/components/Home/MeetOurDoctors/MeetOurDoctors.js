import React from 'react';
import useDoctors from '../../../hooks/useDoctors';
import Doctor from './Doctor/Doctor';
import './MeetOurDoctors.css';

const MeetOurDoctors = () => {
    const [doctors] = useDoctors();
    return (
        <div className="meet-doctors bg-white py-16 px-4" id="doctors">
            <div className="container mx-auto">
                <h2 className="text-center text-4xl sm:text-5xl font-semibold text-textBlue">Meet Our Doctors</h2>
                <p className="text-textBlue text-xl text-center mt-8 sm:w-6/12 mx-auto font-medium">Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 auto-rows-max">
                    {
                       doctors.map(doctor => <Doctor key={doctor.name} doctor={doctor} />) 
                    }
                </div>
            </div>
        </div>
    );
};

export default MeetOurDoctors;