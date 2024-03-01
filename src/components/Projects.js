import websiteImg1 from '../assets/sitesupplycraft.png';
import websiteImg2 from '../assets/Employees.png';
import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'Our MERN stack-powered web platform revolutionizes the hardware industry, connecting shop owners, rental services, and laborers directly to customers, Built using React Js, Node Js, Express Js, Mongo DB, Mongoose',
                link: 'https://github.com/rmohamedsabith/sitesupplycraft'
            },
            {
                image: websiteImg2,
                description: 'Efficient Employee Management: A full-stack system using Spring Boot, ReactJs, MySQL & Bootstrap.View, add, edit & delete employee details seamlessly. Streamline your HR operations with ease, Built using React JS, Spring Boot, Bootstrap and MYSQL',
                link: 'https://github.com/rmohamedsabith/EmployeeMGT_Fullstack'
            },
            {
                image: websiteImg3,
                description: 'This application will use for helping tourists navigate and explore various destinations while offering essential information about tourist places, hospitals, hotels, and restaurants, Built using JAVA and MYSQL',
                link: 'https://github.com/rmohamedsabith/desktop-application-using-java'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                {/* <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p> */}
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[350px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}