
//Data for the HeroMessage components
export const HeroMessageData = 
{
    IntroMessage:"Hey. I'm",
    IntroMessagefName:"Nicholas",
    IntroMessagelName:"Barr",
    IntroDescrip:"I am a Front-End Developer from Vancouver, British Columbia. I enjoy writing clean code, building beautiful user interfaces and graphics and providing solutions to problems in the tech space."
    
}

// All data for Project Card component mapping
export const ProjCardData = [
    {
        projHeading:"BuzzyBee",
        projDescrip:"Buzzy Bee is a native organizer application that fetches data from the school’s portal (mocked) and automatically adds the student’s course schedule to the built in calendar and much more...",
        tool1:"React.js",
        tool2:"Firebase",
        tool3:"Node.js",
        tool4:"SQL",
        codeSrc:"",
        gitSrc:""
    },
    
    {
        projHeading:"EcoHow",
        projDescrip:"React application built to assess your knowledge toward your sustainability habits and how to improve upon them.",
        tool1:"React.js",
        tool2:"JavaScript",
        tool3:"Node.js",
        tool4:"CSS",
        codeSrc:"https://final-eco-how-repo.vercel.app/home",
        gitSrc:"https://github.com/npm-i-abhay/final_EcoHow_repo"
    },
    
    {
        projHeading:"Cocktail Generator",
        projDescrip:"This is a simple webapp that allows users to get over the dilemma of what beverage they can make based on the ingredients they have on hand.",
        tool1:"React.js",
        tool2:"Axios",
        tool3:"Node.js",
        tool4:"JavaScript",
        codeSrc:"",
        gitSrc:""
    }
    
]

// Data for Tool Stack Graphics
import {MdLaunch} from 'react-icons/md';
import {AiFillGithub, AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {FaReact, FaNodeJs, FaGitAlt} from 'react-icons/fa'
import {SiJavascript, SiMongodb, SiExpress, SiJquery} from 'react-icons/si'

export const StackData = [
    {
        toolLabel:"HTML",
        toolIcon:<AiFillHtml5 size="5em" color="#e54d26"/>
    },
    {
        toolLabel:"CSS",
        toolIcon:<DiCss3 size="5em" color="#3d8fc6"/>
    },
    {
        toolLabel:"React.js",
        toolIcon:<FaReact size="5em" color="#61dafb" />
    },
    {
        toolLabel:"JavaScript",
        toolIcon:<SiJavascript size="5em" color="#f0db4f"/>
    },
    {
        toolLabel:"Node.js",
        toolIcon:<FaNodeJs size="5em" color="#83cd29" />
    },
    {
        toolLabel:"Git",
        toolIcon:<FaGitAlt size="5em" color="#f34f29"/>
    },
    {
        toolLabel:"MongoDB",
        toolIcon:<SiMongodb size="5em" color="#4faa41"/>
    },
    {
        toolLabel:"Express.js",
        toolIcon:<SiExpress size="5em" color="#444"/>
    },

    {
        toolLabel:"JQuery",
        toolIcon:<SiJquery size="5em" color="#0769ad"/>
    },

]

//data for get in touch buttons
import {MdEmail} from 'react-icons/md'
import {AiFillLinkedin, AiFillFilePdf} from 'react-icons/ai';


export const ButtonData = [
    {
        label:"Email",
        icon:<MdEmail/>,
        route:"mailto:nickbarr100@gmail.com"
    },
    {
        label:"LinkedIn",
        icon:<AiFillLinkedin/>,
        route:"https://www.linkedin.com/in/nicholas-barr-689765227/"
    },
    {
        label:"GitHub",
        icon:<AiFillGithub/>,
        route:"https://github.com/nickbarr3160"
    },
    
    {
        label:"Resume",
        icon:<AiFillFilePdf/>,
        route:"https://github.com/nickbarr3160"
    },
]
