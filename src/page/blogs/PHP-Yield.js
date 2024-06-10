import BlogHelper from "./_Bloghelper"

const Header = {
    title_html: "PHP Yield keyword",
    title_article: "PHP Yield keyword uses",
    tag: ["php", "tech"],
    path: "php-yield",
    created: "Monday, 10 Jun 2024",
    thumbnail: "https://www.php.net/images/logos/new-php-logo.png",
    text_thumbnail: String.raw`yield keyword. The heart of a generator function is the yield keyword. In its simplest form, a yield statement looks much like a return statement, except that instead of stopping execution of the function and returning ...`
}

const Content = () => {
    return (
        <>
        <p>
            <h3>Generator, what is that?</h3>
            In PHP, a generator is a special type of function that allows 
            you to iterate over a sequence of values without creating the 
            entire sequence in memory at once, in other words, we stream function output without stopping
            function itself

            lets looks this example below

            {BlogHelper.Php(String.raw`
function a() {
    $arr = []
    for($i = 0; $i < 0)
}`)}
        </p>
        </>
    )
}

const PHP_Yield = {
    content: <Content />,
    header: Header
}

export default PHP_Yield;
