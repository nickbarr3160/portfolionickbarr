//color variables for easier use 
var navy = '#030217'
var offWhite = '#f5f6f7'
var white='white'
var violet = "#bdbddd"
var purple = '#807ae8'
var altPurple = ' rgb(22 28 41/33%);'
var grey = '#222'
var red ='#ad0202'
var hoverPurple = '#504aba'
var hoverRed ='#6b0404'
var toolTagPurple = "rgb(18 17 49/44%);"
var toolTagRed = "#fae8e8"

//body theme
export const global_theme = {
    default:{
        body:navy
    },

    light:{
        body:offWhite
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
        heroIntrofName:red,
        heroIntrolName:red,
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
        buttbgColor:red,
        buttColor:white,
        buttHover:hoverRed
    },
}

//NavBar comp themes
export const NavBar_theme = {
    default:{
        logo:purple,
        logoHover:hoverPurple,
        links:violet,
        linkHover:purple,
    },

    light:{
        logo:red,
        logoHover:hoverRed,
        links:grey,
        linkHover:red,
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
        underline:red
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
        toolbgColor:toolTagRed,
        toolColor:red,
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
        hovbgcolor:red,
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
        bgcolor:red,
    }
}