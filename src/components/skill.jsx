 /**
  * @copyright 2024 darkcode
  * @license Apache-2.0
  */

 import SkillCard from "./SkillCard";

 const skillItem = [
    {
      imgSrc: '/images/symfony.svg',
      label: 'Symfony',
      desc: 'PHP Framework for web applications'
    },
    {
      imgSrc: '/images/angular.svg',
      label: 'Angular',
      desc: 'Framework for building dynamic web apps'
    },
    {
      imgSrc: '/images/laravel.svg',
      label: 'Laravel',
      desc: 'PHP Framework for elegant web development'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Programming language for web interactivity'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'JavaScript runtime for backend development'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Minimalist web framework for Node.js'
    },
    {
      imgSrc: '/images/flutter.svg',
      label: 'Flutter',
      desc: 'UI toolkit for building natively compiled apps'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'NoSQL database for modern applications'
    },
    {
      imgSrc: '/images/oracle.svg',
      label: 'Oracle',
      desc: 'DataBase Management System'
    },
    {
      imgSrc: '/images/firebase.svg',
      label: 'Firebase',
      desc: 'Platform for building web and mobile apps'
    },
    {
      imgSrc: '/images/java.svg',
      label: 'Java',
      desc: 'Programming language '
    },
    {
      imgSrc: '/images/python.svg',
      label: 'Python',
      desc: 'Programming language '
    },
    {
      imgSrc: '/images/mysql.svg',
      label: 'MySQL',
      desc: 'Open-source relational database management system'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Library for building user interfaces'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'Utility-first CSS framework'
    }
  ];
  

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 ">
                    Essential Tools and Technologies I Use
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] ">
                    Disccover the powerful tools and technologies I use to create exceptional, high-performing websites and applications.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] ">
                    {
                        skillItem.map(({imgSrc, label, desc}, key) => (
                            <SkillCard
                                key= {key}
                                imgSrc= {imgSrc}
                                label= {label}
                                desc= {desc}
                            />
                        )
                            
                                
                        )
                    }
                </div>
                
            </div>
            
        </section>
    );
}

export default Skill;
