import React from 'react'


const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Doe',
            feedback: 'Nelson brought our vision to life with exceptional creativity and technical expertise.',
        },
        {
            name: 'Jane Smith',
            feedback: 'Working with Nelson was a seamless experience. Highly professional and skilled.',
        },
        {
            name: 'Alan Turing',
            feedback: 'Great attention to detail and fantastic delivery. Highly recommended!',
        },
    ];

    return (
        <section className="w-full flex flex-col items-center py-16 gap-12 bg-darkgray min-h-[70vh]">
            <h3 className="text-white text-5xl md:text-6xl font-bold text-center">Testimonials</h3>
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-screen-xl px-4">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[calc(100%-16px)] md:w-[calc(75%-16px)] lg:w-[calc(50%-16px)]
                                   bg-lightGray p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <p className="text-mediumGray text-lg italic">&ldquo;{testimonial.feedback}&ldquo;</p>
                        <h4 className="text-darkShade text-xl font-bold mt-4">- {testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials