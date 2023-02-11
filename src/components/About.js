import React from 'react';

export default function About() {
    return (
        <>
            <section id='about'>
                <div className='flex p-5 bg-slate-50 dark:bg-gray-900 flex-col-reverse md:flex-row '>
                    <div className="flex p-1 items-center">
                        <div className='container text-center mx-auto'>
                            <h1 className="sm:text-4xl text-3xl font-medium title-font m-4 md:mb-2 md:pb-4 text-sky-900 dark:text-sky-300" >
                                My name is Shivam.
                            </h1>
                            <p className='text-sky-800 dark:text-sky-200 lg:w-2/3 mx-auto text-left md:text-xl p-1'>I am a Full Stack developer based in Delhi. I am a student currently pursuing my B.Tech in CSE from VIT university.</p>
                            <p className='text-sky-800 dark:text-sky-200 lg:w-2/3 mx-auto text-left md:text-xl p-1'>Coding has always been my passion and I would love to explore new areas like ML {"&"} Competitive Programming.</p>
                            <p className='text-sky-800 dark:text-sky-200 lg:w-2/3 mx-auto text-left md:text-xl p-1'>I love to explore new types of Speciality Coffee, play open-world games and watch Trash Taste.</p>
                            <p className='text-sky-800 dark:text-sky-200 lg:w-2/3 mx-auto text-left md:text-xl p-1'>Right now I am currently working on projects based on Go and ExpressJS.</p>
                        </div>
                    </div>
                    <div className="p-1 md:w-1/2">
                        <img className='mx-auto my-auto w-3/4 md:w-2/3 lg:w-1/2' src="./img/profile.jpg" alt="Profile" />
                    </div>
                </div>
            </section>
        </>
    );
}
