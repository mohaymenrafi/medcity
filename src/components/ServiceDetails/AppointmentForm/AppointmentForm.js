import React from 'react';
import { useForm } from 'react-hook-form';

const AppointmentForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => console.log(data)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name')} />
                <input type="text" {...register('email')} />
                <input type="submit" value="Book Now" />
            </form>
        </div>
    );
};

export default AppointmentForm;