import React from 'react';

export default function Footer() {
    return (
        <>
            <section className='p-4 bg-slate-50 dark:bg-slate-900'>
                <div className="container mx-auto h-10 flex items-center justify-center flex-col p-2">
                    <p className="text-sky-800 dark:text-sky-300 text-xs md:text-sm">Made using ReactJS and TailwindCSS. Hosted on netlify.</p>
                    <p className='text-sky-800 dark:text-sky-300  text-xs md:text-sm p-1 md:m-0'>January 2022</p>
                </div>
            </section>
        </>
    );
}
