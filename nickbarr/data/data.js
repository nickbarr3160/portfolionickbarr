
//Data for the HeroMessage components
export const HeroMessageData = 
    {
        IntroMessage:"I'm",
        IntroMessagefName:"Nicholas",
        IntroMessagelName:"Barr",
        IntroDescrip:"I'm a Vancouver-based Front-End Developer with a passion for crafting elegant code and designing visually stunning user interfaces. My drive lies in leveraging technology to solve complex problems and create engaging digital experiences."
        
    }

// All data for Project Card component mapping
export const ProjCardData = [
    {
        projHeading:"Witness Blanket",
        projDescrip:"Enhanced the Witness Blanket's digital experience using React libraries, animating poignant Survivor stories. Explore Canada's dark residential school history interactively.",
        tool1:"React.js",
        tool2:"gsap",
        tool3:"css",
        tool4:"scrollmagic",
        codeSrc:"",
        appSrc:"https://witnessblanket.ca/stories",
        videoSrc:"https://youtu.be/FPFm8VoWypQ",
        thumbSrc:"/witnessBlanket.jpg"
    },
    {
        projHeading:"Nest Mortgage",
        projDescrip:"Revamped Nest Mortgage's homepage with Duda, introducing key features and UI upgrades for an optimized user experience. Elevate your mortgage journey today!",
        tool1:"Duda",
        tool2:"",
        tool3:"",
        tool4:"",
        codeSrc:"",
        appSrc:"https://www.nestmortgage.co/",
        videoSrc:"https://youtu.be/FPFm8VoWypQ",
        thumbSrc:"/nest-logo.svg"
    },
    {
        projHeading:"Blog Platform",
        projDescrip:"Explore captivating stories on Mellenger Interactive's next-gen blog platform! Built with React & TypeScript front-end, plus a powerful Drupal backend. Dive into curated articles today!",
        tool1:"React.js",
        tool2:"Drupal",
        tool3:"TypeScript",
        tool4:"axios",
        codeSrc:"https://mellenger.com/blog",
        appSrc:"https://mellenger.com/blog",
        videoSrc:"https://youtu.be/FPFm8VoWypQ",
        thumbSrc:"/blog.jpg"
    },
    {
        projHeading:"Myeflat",
        projDescrip:"Crafted with Wix to fuel your travel passion, MyeFlat transforms mid to long-term stays in enchanting cities. Explore a world where every flat echoes your needs and journey!",
        tool1:"Wix",
        tool2:"ES6",
        tool3:"Velo",
        tool4:"JavaScript",
        codeSrc:"",
        appSrc:"https://www.myeflat.com/",
        videoSrc:"https://youtu.be/FPFm8VoWypQ",
        thumbSrc:"/myeflat.webp"
    },
    {
        projHeading:"Kinder Kampus",
        projDescrip:"Discover award-winning childcare at Kinder Kampus! Built on WordPress, this vibrant site offers a virtual tour of Vancouver's top daycare center. Explore now!",
        tool1:"WordPress",
        tool2:"CSS",
        tool3:"Divi",
        tool4:"GoDaddy",
        codeSrc:"https://kinderkampus.ca/",
        appSrc:"https://kinderkampus.ca/",
        videoSrc:"https://youtu.be/TFCRyD64VDs",
        thumbSrc:"/kk.jpg"
    },
    {
        projHeading:"EcoHow",
        projDescrip:"Unlock the secrets to a greener life with EcoHow! Crafted by a skilled team, this mobile-optimized React app evaluates your eco-habits and amps them up with a captivating sorting game.",
        tool1:"React.js",
        tool2:"JavaScript",
        tool3:"Node.js",
        tool4:"CSS",
        codeSrc:"https://github.com/npm-i-abhay/final_EcoHow_repo",
        appSrc:"https://final-eco-how-repo.vercel.app/home",
        videoSrc:"https://youtu.be/FPFm8VoWypQ",
        thumbSrc:"/recycle.jpg"
    },    
    {
        projHeading:"BuzzyBee",
        projDescrip:"Simplify student life with Buzzy Bee! Engineered by an adept team, this React Native app auto-syncs with a mock school portal to manage your courses. Get it exclusively on Expo Go!",
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
        projHeading:"Alien Game",
        projDescrip:"Navigate peril and dodge doom in Alien Adventure! Created in vanilla JavaScript, this thrilling mini-game has you eluding obstacles and evading explosions for the ultimate survival quest!",
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
import {AiFillGithub, AiFillHtml5} from 'react-icons/ai';
import {DiCss3, DiDrupal} from 'react-icons/di';
import {FaReact, FaNodeJs, FaGitAlt, FaWix, FaWordpressSimple} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
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
        toolLabel:"Drupal",
        toolIcon:<DiDrupal size="5em" color="#0678BE"/>
    },
    {
        toolLabel:"Wordpress",
        toolIcon:<FaWordpressSimple size="5em" color="black"/>
    },
    {
        toolLabel:"React.js",
        toolIcon:<FaReact size="5em" color="#61dafb" />
    },
    {
        toolLabel:"Wix",
        toolIcon:<FaWix size="5em" color="black" />
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
    }
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
        route:'/NicholasSameerBarrTechResume.PDF'
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
    text:"What's Up! I’m Nick, a Front-End Developer passionate about delivering exceptional digital experiences. I began my journey in 2018, studying Computer Science at the University of Western Ontario and later honed my skills in web and mobile application design and development at the British Columbia Institute of Technology. I spent nearly two years at a web agency based in Vancouver, contributing to a variety of projects and specializing in security and maintenance for Drupal and WordPress sites, alongside developing with React. Beyond Mellenger, I’ve independently crafted bespoke solutions for a diverse clientele, always striving to merge innovative development strategies with visually striking designs to redefine the essence of online interactions.",
    imgSrc:'/nick.jpg',
    heading:"My Experience",
    order:0
    },
    {
    text:"When I’m not diving into code, you can usually find me staying active with hockey, skiing, and boxing, or strategizing the best lineup for my fantasy football team. I’ve been a lifelong hockey enthusiast and, for better or for worse, a Vancouver Canucks fan for the past 20 years. Off the sports field, music is my go-to; I’ve been playing the guitar and piano for 15 years, always exploring new sounds and discovering new artists.",
    imgSrc:'/nickbarrHockey.jpg',
    heading:"Outside the office",
    order:-1
    }

  ]