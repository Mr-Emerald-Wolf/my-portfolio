import React from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (

        <>
            <section id="contact" className=" dark:bg-slate-800">
                <div className="container p-4 mx-auto flex md:flex-row flex-col">

                    <div className="bg-gray-50 dark:bg-gray-900 relative flex py-6 mt-6 rounded shadow-md flex-col md:w-1/2 h-1/2 ">
                        <div className="px-6">
                            <h2 className="title-font font-semibold text-sky-900 dark:text-white tracking-widest md:text-2xl">
                                ADDRESS
                            </h2>
                            <p className="mt-1 dark:text-sky-200 text-sky-700 md:text-xl">
                                India <br />Delhi <br />
                                Dwarka
                            </p>
                        </div>
                        <div className="px-6 mt-4">
                            <h2 className="title-font font-semibold text-sky-900 dark:text-white tracking-widest md:text-2xl">
                                EMAIL
                            </h2>
                            <p className="dark:text-sky-200 text-sky-700 leading-relaxed md:text-xl">
                                shivamsharma2002@gmail.com
                            </p>

                        </div>
                        <div className="px-6 mt-4">
                            <h2 className="title-font font-semibold text-sky-900 dark:text-white tracking-widest md:text-2xl">
                                Github Profile
                            </h2>
                            <a className="dark:text-sky-200 text-sky-700 leading-relaxed md:text-xl" href="https://github.com/Mr-Emerald-Wolf">
                                Mr-Emerald-Wolf
                            </a>

                        </div>
                    </div>
                    <form
                        netlify
                        name="contact"
                        onSubmit={handleSubmit}
                        className="md:w-1/3 flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0 md:px-0 px-6 ">
                        <h2 className="dark:text-white sm:text-4xl text-3xl mb-1 font-medium title-font text-sky-900">
                            Contact Me
                        </h2>
                        <p className="leading-relaxed mb-5 text-sky-700 dark:text-sky-200">
                            If you want to reach out to me drop a message below. 
                        </p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-900 dark:text-gray-400">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-gray-50  dark:bg-gray-800 rounded border border-gray-700 dark:focus:border-sky-500 focus:ring-2 dark:focus:ring-sky-900 text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-700 dark:text-gray-400">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-50  dark:bg-gray-800 rounded border border-gray-700 dark:focus:border-sky-500 focus:ring-2 dark:focus:ring-sky-900 text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setEmail(e.target.value)}
                           />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="message"
                                className="leading-7 text-sm text-gray-700 dark:text-gray-400">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-gray-50 dark:bg-gray-800 rounded border border-gray-700 dark:focus:border-sky-500 focus:ring-2 dark:focus:ring-sky-900 h-32 text-base outline-none dark:text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white dark:bg-sky-500 border-0 py-2 px-6 focus:outline-none dark:hover:bg-sky-600 rounded text-lg bg-slate-800 hover:bg-slate-900">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}