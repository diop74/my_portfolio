 /**
  * @copyright 2024 oumarcode
  * @license Apache-2.0
  */

import ProjectCard from "./ProjectCard";

 const works = [
    {
      imgSrc: '/images/Domaine.jpg',
      title: 'Full stack Estate App',
      tags: ['API', 'MVC', 'MERN','Firebase','MongoDB'],
      projectLink: 'https://mauri-domaine.onrender.com/'
    },
    {
      imgSrc: '/images/chitary.jpg',
      title: 'Full Stack Blog app',
      tags: ['API', 'MVC', 'MERN','Firebase','MongoDB'],
      projectLink: 'https://mauri-chitary.onrender.com/'
    },
    {
      imgSrc: '/images/Biobank.jpg',
      title: 'BioBank App',
      tags: ['PHP','Laravel', 'API','Mysql'],
      projectLink: 'https://github.com/diop74/BioBank-App'
    },
    {
      imgSrc: '/images/bigmarket.jpg',
      title: 'Real state website',
      tags: ['Mobile App', 'MVC','Flutter','Firebase'],
      projectLink: '#'
    },
    {
      imgSrc: '/images/vote.jpg',
      title: 'Vote Application',
      tags: ['PHP', 'PDO'],
      projectLink: 'https://oumar.alwaysdata.net/Voting-Management-System/'
    },
    {
      imgSrc: '/images/port.jpg',
      title: ' portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/diop74/my_portfolio'
    },
  ];

const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8">
                My portfolio highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] ">
                    {
                        works.map(({imgSrc, title, tags, projectLink}, key) => ( 
                            <ProjectCard
                                key={key}
                                imgSrc={imgSrc}
                                title={title}
                                tags={tags}
                                projectLink={projectLink}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Work;
