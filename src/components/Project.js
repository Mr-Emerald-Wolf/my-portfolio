import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import ProjectItem from "./ProjectItem";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-white dark:bg-gray-800 ">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4 text-sky-700 dark:text-sky-300" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-sky-900 dark:text-sky-200" >
                        My Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-sky-700 dark:text-sky-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                        fuga dolore.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    {projects.map((project) => {
                        return (<ProjectItem data={project} key={project.link}/>)
                    })}
                </div>
            </div>
        </section>
    );
}