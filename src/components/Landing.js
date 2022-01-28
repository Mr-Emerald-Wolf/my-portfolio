import React from 'react';

export default function About() {
    return (
        <>
            <section className="flex flex-grow items-center px-6 lg:px-32 bg-white dark:bg-black justify-center ">
                <main id='landing' className="w-full md:w-9/12 xl:w-8/12">

                    <h1 className="text-4xl md:text-6xl lg:text-9xl md:p-3 font-kalam font-bold dark:text-slate-300 text-black text-center">
                        Hi, I am Shivam Sharma
                    </h1>
                    <p className="font-bold mb-1 lg:text-4xl text-slate-700">Web Developer</p>
                    <p className='lg:text-3xl text-slate-600'>Coffee Addict</p>
                </main>

            </section>
        </>
    );
}
