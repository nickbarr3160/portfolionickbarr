import { RiPictureInPictureLine } from "react-icons/ri"

//color variables for easier use 
var navy = '#030217'
var offWhite = '#f5f6f7'
var white='white'
var violet = "#bdbddd"
var purple = '#807ae8'
var altPurple = ' rgb(22 28 41/33%);'
var hoverPurple = '#504aba'
var toolTagPurple = "rgb(18 17 49/44%);"
var hoverGrey = "#F0F0F0"

//body theme
export const global_theme = {
    default:{
        body:navy,
        particleBg: navy, 
        particleColor: purple,
        particleLink:purple
    },

    light:{
        body:offWhite,
    }
} 

// Dark/light mode toggle icon theme
export const toggle_theme = {
    default:{
        icon:violet
    },

    light:{
        icon:purple
    }
}

//Hero Message Comp themes
export const HeroMessage_theme = {
    default:{
        heroIntro:violet,
        heroIntrofName:purple,
        heroIntrolName:purple,
        heroIntroDescrip:violet
    },

    light:{
        heroIntro:navy,
        heroIntrofName:violet,
        heroIntrolName:violet,
        heroIntroDescrip:navy
    },
}


// Button comp themes
export const button_theme = {
    default:{
        buttbgColor:purple,
        buttColor:navy,
        buttHover:hoverPurple
    },

    light:{
        buttbgColor:violet,
        buttColor:white,
        buttHover:hoverPurple
    },
}

//NavBar comp themes
export const NavBar_theme = {
    default:{
        logo:purple,
        logoHover:hoverPurple,
        links:violet,
        linkHover:purple,
        initialBg:'transparent',
        scrollBg:navy,
        hamburgerLines:purple,
        hamburgerMenuBg:navy
    },

    light:{
        logo:violet,
        logoHover:hoverPurple,
        links:navy,
        linkHover:purple,
        initialBg:offWhite,
        scrollBg:offWhite,
        hamburgerLines:purple,
        hamburgerMenuBg:offWhite
    },
}

//Header Themes
export const Header_theme = {
    default:{
        color:violet,
        underline:purple
    },

    light:{
        color:navy,
        underline:purple
    },
}

// ProjectCard comp Themes
export const ProjCard_theme = {
    default:{
        cardbg:altPurple,
        color:violet,
        toolbgColor:toolTagPurple,
        toolColor:purple,
        iconbgcol:'',
        iconcolor:purple,
        iconhovbg:purple,
        iconbrdrColor:'',
        iconhovcolor:white
    },
    
    light:{
        cardbg:white,
        color:navy,
        toolbgColor:hoverGrey,
        toolColor:purple,
        iconbgcol:violet,
        iconcolor:white,
        iconhovbg:purple,
        iconbrdrColor:violet
    }

}

//toolStack comp themes
export const ToolStack_theme = {
    default:{
        cardbg:altPurple,
        color:violet,
        hovbgcolor:purple,
        hovcolor:navy
    },
    
    light:{
        cardbg:white,
        color:navy,
        hovbgcolor:hoverGrey,
        hovcolor:white
    }

}



//footer comp theme
export const Footer_theme = {
    default:{
        bgcolor:altPurple,
        color:violet
    },
    
    light:{
        bgcolor:offWhite,
        color:navy
    }
}

// scroll to top icon theme
export const ScrollTop_theme = {
    default:{
        bgcolor:purple,
    },
    
    light:{
        bgcolor:purple,
    }
}

//AboutIntro theme
export const About_Intro_theme = {
    default:{
        heading1Col:purple,
        heading2Col:violet,
        heading3Col:purple,
        parCol:violet,
    },
    light:{
        heading1Col:purple,
        heading2Col:violet,
        heading3Col:navy,
        parCol:navy,
    }
}

//AboutMeInfo theme
export const About_Me_theme = {
    default:{
        headingCol:purple,
        parCol:violet,
        bgCol:altPurple
    },
    light:{
        headingCol:violet,
        parCol:navy,
        bgCol:white
    }
}

//global highlight colour
export const Highlight_theme = {
    default:{
        bg:purple,
        color:white
    },
    light:{
        bg:violet,
        color:white
    }
}