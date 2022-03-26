
//Data for the HeroMessage components
export const HeroMessageData = 
{
    IntroMessage:"I'm",
    IntroMessagefName:"Nicholas",
    IntroMessagelName:"Barr",
    IntroDescrip:"I am a Front-End Developer from Vancouver, British Columbia. I enjoy writing clean code, building beautiful user interfaces and graphics along with providing solutions to problems in the tech space."
    
}

// All data for Project Card component mapping
export const ProjCardData = [
    {
        projHeading:"EcoHow",
        projDescrip:"EcoHow is a React application developed with a team built to assess your knowledge toward your sustainability habits and how to improve upon them along with with a fun sorting game at the end.",
        tool1:"React.js",
        tool2:"JS",
        tool3:"Node.js",
        tool4:"CSS",
        codeSrc:"https://github.com/npm-i-abhay/final_EcoHow_repo",
        appSrc:"https://final-eco-how-repo.vercel.app/home",
        videoSrc:"https://youtu.be/FPFm8VoWypQ",
        thumbSrc:"/recycle.jpg"
    },
    
    {
        projHeading:"MixElixir",
        projDescrip:"MixElixir is a React application developed with a team that allows users to get over the dilemma of what cocktail they can make based on the ingredients they have on hand and much more...",
        tool1:"React.js",
        tool2:"Axios",
        tool3:"Node.js",
        tool4:"Socket.js",
        codeSrc:"https://github.com/nickbarr3160/mixElixir",
        appSrc:"https://mixelixir.vercel.app/",
        videoSrc:"https://youtu.be/FPFm8VoWypQ",
        thumbSrc:"/drink.jpg"
    },
    {
        projHeading:"BuzzyBee",
        projDescrip:"Buzzy Bee is a React native application developed with a team that fetches data from a school’s portal (mocked) and automatically adds the student’s courses to a schedule and much more... It is only launched on Expo Go and cannot be viewed on the web.",
        tool1:"React.js",
        tool2:"Firebase",
        tool3:"Node.js",
        tool4:"SQL",
        codeSrc:"https://github.com/npm-i-abhay/buzzyApp",
        appSrc:"https://youtu.be/FPFm8VoWypQ",
        videoSrc:"https://youtu.be/FPFm8VoWypQ",
        thumbSrc:"/buzzy.jpeg"
    },
    
    {
        projHeading:"Kinder Kampus",
        projDescrip:"Kinder Kampus is a wordpress site that was developed for an award winning daycare centre in the Vancouver area.",
        tool1:"WordPress",
        tool2:"CSS",
        tool3:"Divi",
        tool4:"GoDaddy",
        codeSrc:"https://kinderkampus.ca/",
        appSrc:"https://kinderkampus.ca/",
        videoSrc:"https://youtu.be/TFCRyD64VDs",
        thumbSrc:"/kkScreen.png"
    },
    {
        projHeading:"Alien Game",
        projDescrip:"This project is a mini Alien game where you move around to avoid obstacles and explosions. made using vanilla JavaScript",
        tool1:"JavaScript",
        tool2:"CSS",
        tool3:"HTML",
        tool4:"keyPress",
        codeSrc:"https://github.com/nickbarr3160/AlienGame",
        appSrc:"https://nickbarr3160.github.io/AlienGame/",
        videoSrc:"https://youtu.be/TFCRyD64VDs",
        thumbSrc:"/alienGame.png"
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
        route:'/NicholasSameerBarrResume.PDF'
    },
]

//data for image list in DesignProjCard component (Currently not being used)
export const imgData = [
    {
      img: '/buzzy.jpeg',
      title: 'Buzzy Bee Protoype',
      rows: 3,
      cols: 2,
    },
    {
      img: './jt.png',
      title: 'JT Miller',
      rows:5,
      cols:2
    },
    {
      img: '/rolex.jpg',
      title: 'Rolex Watch',
      rows: 2,
      cols: 2,
    },
    {
      img: 'swissPoster1.png',
      title: 'Poster for the fictional Proms award show',
      rows:5,
      cols:2,
    },
    {
      img: 'bookcover.jpg',
      title: 'fictional movie cover',
      rows: 5,
      cols: 2,
    },
  ];

  export const AboutMeData = [
    {
    text:"What’s up! I’m Nick and I enjoy creating things that live in the internet world. My interest in web development started back in 2018 when I enrolled in Computer Science at the University of Western Ontario. There I learned the valuable skills of storing information in databases, sending data over networks, and providing new solutions to cyber security issues. Turns out this was a good fit for me although shackled my visual creativity as I am also a designer of graphics and much more second to being a developer. Fast forward to today I have had the privilege of completing the Digital Design and Development program at the British Columbia Institute of Technology. There I learned to work within a team to design and develop web and mobile applications.",
    imgSrc:'/nicholasbarr.png',
    heading:"My Experience"
    },
    {
        text:"When I am not working, I love to keep active with activities such as Hockey, Skiing and much more. I have played Hockey all my life and have unfortunately had the privilege of being a die-hard Vancouver Canucks fan over the past 20 years. My other passion is music as I have played Guitar and Piano for 15 years and continue to pursue new musical sounds and artists.",
        imgSrc:'/nickbarrHockey.jpg',
        heading:"Outside the office"
        }

  ]