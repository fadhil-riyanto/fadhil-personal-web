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
        name: "Links",
        links: "/links"
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


export {
    config, config_dropdown_links, config_navbar_links, config_connect_links
}