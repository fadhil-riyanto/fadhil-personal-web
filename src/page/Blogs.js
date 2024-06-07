
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

const BlogArticleCard = () => {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 px-md-1 px-4">
                <Link to="/blog/hello-world" className="fadhil_r_bg_color m-2 text-decoration-none">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PSP-Homebrew.jpeg/800px-PSP-Homebrew.jpeg' className='mx-auto d-block img-fluid' ></img>
                    {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                    <div className="card-body fadhil_r_bg_color">
                        <p className="card-text text-white">
                            <h2>ssjj</h2>
                            This tutorial explains how to install Docker on Ubuntu. We'll install the latest Docker package from the official Docker’s repositories..
                        </p>
                    
                    </div>
                </Link>
            </div>
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
                <div className='container'>
                    <div className="row mt-4">
                        <BlogArticleCard />
                        <BlogArticleCard />
                        <BlogArticleCard />
                        <BlogArticleCard />
                        <BlogArticleCard />
                    </div>
                    
                </div>
                </div>
            </div>
        </>
        
    );
}

export default BlogPage;