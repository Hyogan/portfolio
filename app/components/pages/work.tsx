import React from 'react';
import { Project } from '../../interfaces/project';
import Image from 'next/image';

const Work = () => {
    const projectList = [
        {
            pic: '/images/screen_devio.png',
            name: 'DevioApp',
            description: 'A screen time management app',
        },
        {
            pic: '/images/screen_devio.png',
            name: 'DevioApp',
            description: 'A screen time management app',
        },
        {
            pic: '/images/screen_devio.png',
            name: 'DevioApp',
            description: 'A screen time management app',
        },
        {
            pic: '/images/screen_devio.png',
            name: 'DevioApp',
            description: 'A screen time management app',
        },
        // You can add more projects to this list
    ];

    return (
        <section className="w-full flex flex-col items-center py-12 gap-8 bg-darkgray min-h-[60vh]">
            <h3 className="text-white text-5xl md:text-6xl font-bold text-center">My Work</h3>
            <p className="text-initial text-lg md:text-xl font-semibold text-center">
                A selected range of the projects I&apos;ve worked on!
            </p>
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-screen-xl px-4">
                {projectList.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg group duration-300 w-full sm:w-[calc(100%-16px)] md:w-[calc(75%-16px)] lg:w-[calc(50%-16px)]">
            <div className="w-full h-80 sm:h-96 md:h-[400px] bg-gray-300">
                <Image
                    src={project.pic}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            <div className="absolute z-10 inset-0 bg-gradient-to-t from-black opacity-90 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute z-10 bottom-4 left-4 right-4 text-white">
                <h4 className="text-2xl font-bold">{project.name}</h4>
                <p className="text-lg">{project.description}</p>
            </div>
        </div>
    );
};

export default Work;