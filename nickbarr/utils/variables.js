//color variables for easier use 
var navy = '#030217'
var offWhite = '#f5f1ed'
var white='white'
var violet = "#bdbddd"
var purple = '#807ae8'
var altPurple = ' rgb(22 28 41/33%);'
var grey = '#222'
var red ='#ad0202'
var turq ="#21AAB5"
var hoverPurple = '#504aba'
var hoverturq ='#0e8f9e'
var toolTagPurple = "rgb(18 17 49/44%);"
var toolTagturq = "#fae8e8"

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
        icon:grey
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
        heroIntro:grey,
        heroIntrofName:turq,
        heroIntrolName:turq,
        heroIntroDescrip:grey
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
        buttbgColor:turq,
        buttColor:white,
        buttHover:hoverturq
    },
}

//NavBar comp themes
export const NavBar_theme = {
    default:{
        logo:purple,
        logoHover:hoverPurple,
        links:purple,
        linkHover:purple,
        initialBg:'transparent',
        scrollBg:navy
    },

    light:{
        logo:turq,
        logoHover:hoverturq,
        links:grey,
        linkHover:turq,
        initialBg:offWhite,
        scrollBg:offWhite
    },
}

//Header Themes
export const Header_theme = {
    default:{
        color:violet,
        underline:purple
    },

    light:{
        color:grey,
        underline:turq
    },
}

// ProjectCard comp Themes

export const ProjCard_theme = {
    default:{
        cardbg:altPurple,
        color:violet,
        toolbgColor:toolTagPurple,
        toolColor:purple
    },
    
    light:{
        cardbg:white,
        color:grey,
        toolbgColor:toolTagturq,
        toolColor:turq,
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
        color:grey,
        hovbgcolor:turq,
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
        bgcolor:white,
        color:grey
    }
}

// scroll to top icon theme
export const ScrollTop_theme = {
    default:{
        bgcolor:purple,
    },
    
    light:{
        bgcolor:turq,
    }
}

//AboutIntro theme
export const About_Intro_theme = {
    default:{
        heading1Col:purple,
        heading2Col:violet,
        heading3Col:purple,
        parCol:violet
    },
    light:{
        heading1Col:turq,
        heading2Col:grey,
        heading3Col:turq,
        parCol:grey
    }
}

//AboutMeInfo theme
export const About_Me_theme = {
    default:{
        headingCol:purple,
        parCol:violet
    },
    light:{
        headingCol:turq,
        parCol:grey
    }
}