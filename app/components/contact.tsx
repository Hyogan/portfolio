import React from 'react'

const Contact = () => {
    return (
        <section className="w-full flex flex-col items-center py-16 gap-12 bg-primary min-h-[70vh]">
            <h3 className="text-white text-5xl md:text-6xl font-bold text-center">Get in Touch</h3>
            <p className="text-white text-lg md:text-xl font-normal text-center max-w-3xl">
                Let’s work together on your next big project. I’d love to hear from you!
            </p>
            <a
                href="mailto:nelson@example.com"
                className="bg-darkShade text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-darkShade transition-all duration-300"
            >
                Contact Me
            </a>
        </section>
    );
};



export default Contact
