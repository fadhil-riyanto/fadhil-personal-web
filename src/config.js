import BlogHelper from "./page/blogs/_Bloghelper"

const config = {
    BASE_URL: "https://fadev.org",
    SITENAME: "Fadhil DEV",
    BIO: "Just human"
}

const config_dropdown_links = [
    // {
    //     name: "API",
    //     links: "https://api.fadev.org"
    // },
    {
        name: "Book",
        links: "/ebook"
    },
    {
        name: "Music",
        links: "/ebook"
    }
    // ,
    // {
    //     name: "Shortlink",
    //     links: "s.fadev.org"
    // }
]

const config_skills_level = [
    {
        logo: BlogHelper.Asset("new-php-logo.png"),
        name: "PHP", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("115px-Laravel.svg.png"),
        name: "Laravel", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("jsIconGreen.svg"),
        name: "NodeJS", 
        level: "Intermediate"
    },
    {
        logo: BlogHelper.Asset("1920px-Go_Logo_Blue.svg.png"),
        name: "Go", 
        level: "Intermediate"
    },
    {
        logo: BlogHelper.Asset("dotnet-logo.svg"),
        name: ".NET (server)", 
        level: "Intermediate"
    },
    {
        logo: BlogHelper.Asset("python-logo-only.png"),
        name: "Python (server)", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("css.png"),
        name: "CSS", 
        level: "Beginner"
    },
    {
        logo: BlogHelper.Asset("javascript_original_logo_icon_146455.png"),
        name: "JS (browser)", 
        level: "Beginner"
    },
    {
        logo: BlogHelper.Asset("bootstrap-logo-shadow.png"),
        name: "Bootstrap", 
        level: "Intermediate"
    },
    {
        logo: BlogHelper.Asset("React.webp"),
        name: "React", 
        level: "Beginner"
    },
    {
        logo: BlogHelper.Asset("ISO_C++_Logo.svg.png"),
        name: "C++", 
        level: "Intermediate"
    },
    {
        logo: BlogHelper.Asset("The_C_Programming_Language_logo.svg.png"),
        name: "C", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("HHVM_logo.svg.png"),
        name: "HHVM", 
        level: "Advanced"
    }
    // 
]

const config_tools_level = [
    {
        logo: BlogHelper.Asset("Git-Icon-1788C.png"),
        name: "GIT", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("archlinuxlogo.square.png"),
        name: "ArchLinux", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("mariadb-logo-vertical_white.svg"),
        name: "MariDB", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("redis.png"),
        name: "Redis", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("png-transparent-mongodb-original-wordmark-logo-icon.png"),
        name: "MongoDB", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("png-transparent-mongodb-original-wordmark-logo-icon.png"),
        name: "MongoDB", 
        level: "Advanced"
    }
]

const config_navbar_links = [
    {
        name: "Blog",
        links: "/blog"
    },
    {
        name: "About",
        links: "/about"
    },
    {
        name: "Projects",
        links: "/projects"
    },
    {
        name: "Resume",
        links: "/resume"
    }
]

const config_connect_links = [
    {
        name: "Telegram",
        links: "https://fadhil_riyanto.t.me",
        icon: "bi bi-telegram"
    },
    {
        name: "Github",
        links: "https://github.com/fadhil-riyanto",
        icon: "bi bi-github"
    },
    {
        name: "Google developer",
        links: "https://developers.google.com/profile/u/fadhil-riyanto",
        icon: "bi bi-google"
    }
]

const config_project_list = [
    {
        image: BlogHelper.Asset("c2-jujurCBT.png"),
        title: "JujurCBT", 
        text_thumbnail: "simple CBT that prevent student doing cheat with ctrl + c",
        source_code: "https://github.com/fadhil-riyanto/jujurCBT"
    },
    {
        image: BlogHelper.Asset("math-imouto-1.png"),
        title: "Math Imouto", 
        text_thumbnail: "endless math game for first grade school",
        source_code: "https://github.com/fadhil-riyanto/math-imouto"
    },
    {
        image: BlogHelper.Asset("myweb.png"),
        title: "Personal website", 
        text_thumbnail: "My personal website, used to display my profile, skills and projects, and my place to try new technology (react).",
        source_code: "https://github.com/fadhil-riyanto/fadhil-personal-web"
    }
]


export {
    config, config_dropdown_links, config_navbar_links, 
    config_connect_links, config_skills_level, config_tools_level,
    config_project_list
}