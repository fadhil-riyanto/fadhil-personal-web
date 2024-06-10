import katex from 'katex';
import hljs from 'highlight.js/lib/core';
import php from 'highlight.js/lib/languages/php';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('php', php);

class BlogHelper {
    static Img_WithInfoSource(src, info, source_article) {
        return (
            <>
                <img src={src} alt={src} className="img-fluid"></img>
                <figure className="mb-1">
                    <blockquote className="blockquote">
                        <p>{info}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        {source_article}
                    </figcaption>
                </figure>
            </>
        )
    }

    static Latex(expr) {
        return (
            <>
                <div>
                    { <div dangerouslySetInnerHTML={{ __html: katex.renderToString(expr, {output: "mathml" }) }} /> }
                </div>
            </>
        )
    }

    static Php(str) {
        let rendered = hljs.highlight(
            str, { language: 'php' }
        ).value

        return (
            <>
                <pre>{ <div dangerouslySetInnerHTML={{ __html: rendered }} /> }</pre>
            </>
        )
    }  
}

export default BlogHelper;