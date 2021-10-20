import React from 'react';

import './Contact.css';

const Contact = () => {
    
    return (
        <div className="contact py-16 px-4">
            <div className="container mx-auto py-8 sm:py-16">
                <h2 className="sand text-center text-white text-4xl sm:text-5xl font-bold">Question? <br/> Let us Know!</h2>
            </div>
            <div>
                <form id="contact-me" className="w-full mx-auto max-w-3xl bg-white shadow p-8 text-gray-700 rounded">
                    
                    <div className="flex flex-wrap mb-6">
                        <div className="relative w-full appearance-none label-floating">
                            <input className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                            id="name" type="text" placeholder="Your name"required />
                            <label htmlFor="name" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
                                Your name
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap mb-6">
                        <div className="relative w-full appearance-none label-floating">
                            <input className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                            id="name" type="text" placeholder="Your email"required />
                            <label htmlFor="name" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
                                Your email
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap mb-6">
                        <div className="relative w-full appearance-none label-floating">
                            <textarea className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                id="message" type="text" placeholder="Message..."></textarea>
                                <label htmlFor="message" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">Message...
                            </label>
                        </div>
                    </div>

                    <div className="">
                        <button className="w-full shadow bg-darkBlue hover:bg-lightBlue focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="submit">
                            Send
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;