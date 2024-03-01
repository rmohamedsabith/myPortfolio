import HeroImg from '../assets/hero.png';
import profile from '../assets/profile.png'
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: `I'm an Undergraduate Student`,
        miniSubtitle: `University of Ruhuna, Sri Lanka`,
        social: {
            mail: 'sabithrasleem@gmail.com',
            github: 'https://github.com/rmohamedsabith',
            linkedin: 'https://www.linkedin.com/in/mohamed-sabith-1a85a8218'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> {`I'm`} Mohamed<span className='text-black'> Sabith</span> 
                <p className='text-2xl'>{config.subtitle}</p>
                <p className='text-sm'>{config.miniSubtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={`mailto:${config.social.mail}`} target='_blank' className='pr-5 hover:text-white'><AiOutlineMail size={40} /></a>
                <a href={config.social.github} target='_blank' className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.linkedin} target='_blank' className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/5' src={profile} />
    </section>
}
