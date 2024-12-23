import Image from 'next/image';
import React from 'react'
import DottedGrid from '../utils/dottedGrid';


const About = () => {
    return (
      <div className='flex w-full bg-darkPrim h-full relative'>
         <div className="absolute top-[2px] right-40 z-40">
            <DottedGrid></DottedGrid>
         </div>
          <section className="w-full min-h-screen flex items-center justify-center  text-white  flex-col md:flex-row gap-8">
                {/* Image Section */}
                <div className="relative w-[430px] h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                    src="/images/screen_devio.png" // Replace with your image path
                    alt="Profile Picture"
                    fill
                    className="object-cover"
                />
                </div>
                <div className="flex flex-col max-w-[50%] items-start">
                    <h2 className="text-4xl font-bold mb-4">About</h2>
                    <p className="text-lg leading-relaxed">
                        I&apos;m Nelson Tiagho, a dedicated web and mobile developer passionate about crafting modern, user-friendly applications. 
                        I specialize in bringing innovative ideas to life with clean design and efficient code.Nanotechnology immersion
                        along the information highway will close the loop on focusing solely on the bottom line.
                    </p>
                    <button>Download cv</button>
                </div>
            </section>
        </div>
        // <section className="w-full flex flex-col items-center py-16 gap-8 bg-lightPink text-darkShade">
        //     <h3 className="text-6xl font-bold text-center">About Me</h3>
        //     <p className="text-xl font-medium text-center max-w-4xl">
        //         I’m Nelson Tiagho, a dedicated web and mobile developer passionate about crafting modern,
        //         user-friendly applications. I specialize in bringing innovative ideas to life with clean design
        //         and efficient code.
        //     </p>
        // </section>
    );
};

export default About