import React from 'react';

export default function About() {
    return (
        <>
            <section id='about'>
                <div className='flex p-5 bg-slate-50 dark:bg-gray-900 flex-col-reverse md:flex-row '>
                    <div className="flex p-1 items-center">
                        <div className='container text-center'>
                            <h1 className="sm:text-4xl text-3xl font-medium title-font lg:m-0 md:mt-4 md:mb-2 text-sky-900 dark:text-sky-300" >
                                Hello
                            </h1>
                            <p className='text-sky-800 dark:text-sky-200 lg:w-2/3 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ipsum ab corrupti, suscipit quidem beatae rem nam! Et reprehenderit inventore ab totam eveniet facilis fugiat, amet architecto, quod molestiae veritatis!</p>
                        </div>
                    </div>
                    <div className="flex p-1">
                        <img className='w-2/3 md:w-2/3 lg:w-2/3 mx-auto' src="./img/profile.jpg" alt="Profile" />
                    </div>
                </div>
            </section>
        </>
    );
}
