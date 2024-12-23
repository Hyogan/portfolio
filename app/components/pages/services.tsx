import React from 'react'
const Services = () => {
    const servicesList = [
        {
            title: 'Web Development',
            description: 'Custom, responsive, and dynamic websites tailored to your brand and users.',
        },
        {
            title: 'Mobile App Development',
            description: 'Intuitive and performant apps that work seamlessly across devices.',
        },
        {
            title: 'Digital Transformation',
            description: 'Helping businesses modernize workflows and embrace new technologies.',
        },
        {
            title: 'UI/UX Design',
            description: 'Designing beautiful and accessible interfaces that enhance user experiences.',
        },
    ];

    return (
        <section className="w-full flex flex-col items-center py-16 gap-12 bg-lightGray min-h-[70vh]">
            <h3 className="text-darkShade text-5xl md:text-6xl font-bold text-center">Services</h3>
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-screen-xl px-4">
                {servicesList.map((service, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[calc(100%-16px)] md:w-[calc(50%-16px)] lg:w-[calc(33%-16px)]
                                   bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <h4 className="text-darkShade text-2xl font-bold mb-4">{service.title}</h4>
                        <p className="text-mediumGray text-base">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services