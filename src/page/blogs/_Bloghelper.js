import katex from 'katex';

class BlogHelper {
    static Img_WithInfoSource(src, info, source_article) {
        return (
            <>
                <img src={src} className="img-fluid"></img>
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
}

export default BlogHelper;