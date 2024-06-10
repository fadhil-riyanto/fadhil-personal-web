import BlogHelper from "./_Bloghelper"

const Header = {
    title_html: "Hello world",
    title_article: "Hello world, my first page",
    tag: ["react", "hello", "tech"],
    path: "hello-world",
    created: "Friday, 7 Jun 2024",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PSP-Homebrew.jpeg/800px-PSP-Homebrew.jpeg",
    text_thumbnail: String.raw`A "Hello, World!" program is generally a simple computer program which outputs (or displays) to the screen (often the console) a message similar to "Hello, ...`
}

const Content = () => {
    return (
        <>
        <p>
            <h3>1. Hello World!</h3>
            {BlogHelper.Img_WithInfoSource(
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PSP-Homebrew.jpeg/800px-PSP-Homebrew.jpeg",
                "first hello world",
                "by Brian Wilson Kernighan"
            )}

            Halo dunia
        </p>

        <p>
            <h3>2. Test math expr !</h3>
            {BlogHelper.Latex(String.raw`\begin{pmatrix}
                a & b \\
                c & d
                \end{pmatrix}`)}
            <br></br>
            just square root approximation
            {BlogHelper.Latex(String.raw`\sqrt{2} \approx 1.4142135623731`)}

            <br></br>
            a func
            {BlogHelper.Latex(String.raw`f(x) = x^{2}`)}

            
            <br></br>
            a func
            {BlogHelper.Latex(String.raw`x = f(a, b, c) = \frac {-b \pm \sqrt{b^2 -4ac}} {2a}`)}
        </p>
        
        </>
    )
}

const Helloworld = {
    content: <Content />,
    header: Header
}

export default Helloworld;
