
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { GenArticle, GenTags } from './blogs/_Register'

const data_blog_list = GenArticle()
const data_tags = GenTags()
const BlogTags = ({tag, link}) => {
    return (
        <>
            <kbd className='mx-1'>
                <Link to={link} className='text-decoration-none text-white'>#{tag}</Link>
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
                        {/* {data_tags.toString()} */}
                        {data_tags.map((item) => 
                            <BlogTags tag={item} link={"/blog/tags/" + item}/>
                        )}
                    </div>
                </div>
            </section>

        </>
    )
}

const BlogArticleCard = ({article_link, thumbnail, title, text_thumbnail}) => {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 px-md-1 px-4">
                <Link to={article_link} className="fadhil_r_bg_color m-2 text-decoration-none">
                    <img src={thumbnail} className='mx-auto d-block img-fluid' ></img>
                    {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                    <div className="card-body fadhil_r_bg_color">
                        <p className="card-text text-white">
                            <h2>{title}</h2>
                            {text_thumbnail}
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
                        {/* <BlogArticleCard />
                        <BlogArticleCard />
                        <BlogArticleCard />
                        <BlogArticleCard />
                        <BlogArticleCard /> */}
                        {/* {console.log(data_blog_list)} */}
                        {data_blog_list.map(function(data, i){
                            return <BlogArticleCard article_link={data.path} thumbnail={data.thumbnail} title={data.title_article} text_thumbnail={data.text_thumbnail} key={i} />;
                        })}
                    </div>
                    
                </div>
                </div>
            </div>
        </>
        
    );
}

export default BlogPage;