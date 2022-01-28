import React, { Component } from 'react';

export class ProjectItem extends Component {

  render() {
      let project = this.props.data;
    return (
        <>
        <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-800 bg-sky-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-sky-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-slate-200">{project.description}</p>
                </div>
              </div>
            </a>
        </>
    );
  }
}

export default ProjectItem;
