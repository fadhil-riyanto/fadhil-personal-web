
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

const BlogTags = ({tag, link}) => {
    return (
        <>
            <kbd className='mx-1'>
                <Link to={"/"} className='text-decoration-none text-white'>#{tag}</Link>
            </kbd>
        </>
    );
}

const BlogHeading = () => {
    return (
        <>
            <section className="py-5 text-center container-fluid fadhil_r_bg_color_secondary">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light text-white">Fadhil's blog</h1>
                    <p className="lead text-white">
                        All about tutorial, personal note and nice stuff
                    </p>
                        <BlogTags tag="wkaka"/>
                        <BlogTags tag="wkaka"/>
                    </div>
                </div>
            </section>

        </>
    )
}

const BlogPage = () => {
    return (
        <>
            <Nav />
            <div class="fadhil_r_bg_color">
                <div className='py-4 min-vh-100'>
                <BlogHeading />
                </div>
            </div>
        </>
        
    );
}

export default BlogPage;