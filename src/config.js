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
        links: "https://github.com/fadhil-riyanto/personal-books"
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

const config_languange_programming = [
    {
        logo: BlogHelper.Asset("new-php-logo.png"),
        name: "PHP", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("HHVM_logo.svg.png"),
        name: "HHVM (hphp)", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("Typescript_logo_2020.svg.png"),
        name: "Typescript (backend)", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("dotnet-logo.svg"),
        name: ".NET (backend)", 
        level: "Intermediate"
    },
    {
        logo: BlogHelper.Asset("1920px-Go_Logo_Blue.svg.png"),
        name: "Go", 
        level: "Intermediate"
    },
    {
        logo: BlogHelper.Asset("python-logo-only.png"),
        name: "Python (backend)", 
        level: "Advanced"
    },
]

const config_skills_level = [
    
    {
        logo: BlogHelper.Asset("115px-Laravel.svg.png"),
        name: "Laravel", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("jsIconGreen.svg"),
        name: "NodeJS", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("css.png"),
        name: "CSS", 
        level: "Beginner"
    },
    {
        logo: BlogHelper.Asset("bootstrap-logo-shadow.png"),
        name: "Bootstrap", 
        level: "Beginner"
    },
    {
        logo: BlogHelper.Asset("UIkit.svg"),
        name: "UIKit", 
        level: "Beginner"
    },
    {
        logo: BlogHelper.Asset("React.webp"),
        name: "React", 
        level: "Beginner"
    },
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
        name: "Arch Linux", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("mariadb-logo-vertical_white.svg"),
        name: "MariaDB / MySQL", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("png-transparent-mongodb-original-wordmark-logo-icon.png"),
        name: "MongoDB", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("redis.png"),
        name: "Redis", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("llvm.png"),
        name: "LLVM", 
        level: "Advanced"
    },
    {
        logo: BlogHelper.Asset("gdb.png"),
        name: "GNU debugger", 
        level: "Advanced"
    },
    {
        logo: "https://wiki.postgresql.org/images/3/30/PostgreSQL_logo.3colors.120x120.png",
        name: "PostgreSQL", 
        level: "Advanced"
    },
    {
        logo: "https://www.gnu.org/graphics/gnu-head-sm.png",
        name: "GNU User", 
        level: "Advanced"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Fish-shell-logo-ascii.svg/120px-Fish-shell-logo-ascii.svg.png",
        name: "Fishshell", 
        level: "Advanced"
    },
    {
        logo: "https://www.json.org/img/json160.gif",
        name: "JSON", 
        level: "Advanced"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png?20161105194737",
        name: "GraphQL", 
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
        name: "Contacts",
        links: "/contacts"
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
    },
    {
        name: "@fadhil_riyanto@mastodon.social",
        links: "https://mastodon.social/@fadhil_riyanto",
        icon: "bi bi-mastodon"
    },
    
]

const config_project_list = [
    {
        image: BlogHelper.Asset("c2-jujurCBT.png"),
        title: "JujurCBT", 
        text_thumbnail: "simple CBT that prevent student doing cheat with ctrl + C",
        source_code: "https://github.com/fadhil-riyanto/jujurCBT"
    },
    
    {
        image: BlogHelper.Asset("myweb.png"),
        title: "Personal website", 
        text_thumbnail: "My personal website, used to display my profile, skills and projects, and my place to try new technology (react).",
        source_code: "https://github.com/fadhil-riyanto/fadhil-personal-web"
    },
    {
        image: BlogHelper.Asset("asd-kanjic.png"),
        title: "CKanji", 
        text_thumbnail: "Lookup japanese kanji using terminal",
        source_code: "https://github.com/fadhil-riyanto/kanjic"
    },
    {
        image: "https://socialify.git.ci/fadhil-riyanto/fdatabase/image?description=1&forks=1&issues=1&language=1&name=1&owner=1&pulls=1&stargazers=1&theme=Light",
        title: "Fdatabase", 
        text_thumbnail: "a key value database base on json and program memory",
        source_code: "https://github.com/fadhil-riyanto/fdatabase"
    },
    {
        image: BlogHelper.Asset("shortlikn.png"),
        title: "Shortlink", 
        text_thumbnail: "Mini shortlink with simple analysis",
        source_code: "https://github.com/fadhil-riyanto/shortlink"
    },
    {
        image: "https://socialify.git.ci/fadhil-riyanto/chemistry/image?description=1&font=Inter&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark",
        title: "Chemistry", 
        text_thumbnail: "chemistry and medicine datasheet library",
        source_code: "https://www.npmjs.com/package/@fadhil-riyanto/chemistry"
    },
    {
        image: "https://socialify.git.ci/fadhil-riyanto/ramdb/image?description=1&forks=1&issues=1&language=1&name=1&owner=1&pulls=1&stargazers=1&theme=Dark",
        title: "RamDB", 
        text_thumbnail: "a redis like database (but use flat file).",
        source_code: "https://www.nuget.org/packages/ramdb/"
    },
    {
        image: "https://socialify.git.ci/fadhil-riyanto/archlinux-api-wrapper/image?description=1&descriptionEditable=simple%20dotnet%20c%23%20library%20for%20fetch%20data%20from%20archlinux%20search%20web%20api&font=Inter&forks=1&issues=1&language=1&name=1&owner=1&pattern=Overlapping%20Hexagons&pulls=1&stargazers=1&theme=Dark",
        title: "Archlinux Search API", 
        text_thumbnail: "a simple dotnet C# library for fetch data from archlinux search web api",
        source_code: "https://www.nuget.org/packages/Archlinux.Api"
    },
    {
        image: BlogHelper.Asset("math-imouto-1.png"),
        title: "Math Imouto", 
        text_thumbnail: "endless math game for first grade school",
        source_code: "https://github.com/fadhil-riyanto/math-imouto"
    },
    {
        image: BlogHelper.Asset("myredis.png"),
        title: "MyRedis", 
        text_thumbnail: "Very simple redis manager, build with typescript, graphql, and preactjs ",
        source_code: "https://github.com/fadhil-riyanto/myredis"
    },
    {
        image: "https://socialify.git.ci/fadhil-riyanto/cat-io-uring/image?description=1&forks=1&issues=1&language=1&name=1&owner=1&pulls=1&stargazers=1&theme=Light",
        title: "CAT io_uring", 
        text_thumbnail: "cat using syscall io_uring, and some linux kernel stuff, my repository learning io_uring",
        source_code: "https://github.com/fadhil-riyanto/cat-io-uring"
    },
    {
        image: "https://socialify.git.ci/fadhil-riyanto/d-tcp/image?description=1&forks=1&issues=1&language=1&name=1&owner=1&pattern=Formal%20Invitation&pulls=1&stargazers=1&theme=Light",
        title: "Debug TCP", 
        text_thumbnail: "A flexible and simple set TCP connection debugging tools, used to debug TCP socket app ",
        source_code: "https://github.com/fadhil-riyanto/d-tcp"
    },
    {
        image: BlogHelper.Asset("logo-rocksdb-official-fb.jpg"),
        title: "Rockserver", 
        text_thumbnail: "A redis-like database server using RocksDB/Facebook backend",
        source_code: "https://github.com/fadhil-riyanto/rockserver"
    },
    // 
    
    // 
]


export {
    config, config_dropdown_links, config_navbar_links, 
    config_connect_links, config_languange_programming, config_skills_level, config_tools_level,
    config_project_list
}