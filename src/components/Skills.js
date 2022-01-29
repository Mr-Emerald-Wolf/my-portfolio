import { BadgeCheckIcon, CubeTransparentIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="px-5 py-10 mx-auto bg-slate-50 dark:bg-gray-900">
        <div className="text-center mb-5">
          <CubeTransparentIcon className="w-10 inline-block mb-4 text-sky-700 dark:text-sky-300" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-sky-900 dark:text-sky-200 mb-4">
            Skills 
          </h1>
          <p className="text-base leading-relaxed text-sky-700 dark:text-sky-300 xl:w-2/4 lg:w-3/4 mx-auto">
           These are the the tools I use to create my Projects. I am comfortable using these languages.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="dark:bg-[#121212] bg-slate-900 rounded flex p-4 h-full items-center shadow-md">
                <BadgeCheckIcon className="text-sky-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}