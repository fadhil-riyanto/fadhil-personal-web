import Helloworld from "./Helloworld"
import PHP_Yield from "./PHP-Yield"

// need for structure

import Nav from '../../components/Nav'
import { Link } from 'react-router-dom'

const list = [
    Helloworld, PHP_Yield
]

const BlogHeaderAticle = ({title, created_date}) => {
    return (
        <>
            <div className="pt-lg-2 mt-5 fadhil_r_bg_color rounded-3">
                <div className="container px-lg-1">
                    <div className="d-flex flex-column">
                        <h1 className="disalay-3 fw-bold text-white">
                            {title}
                        </h1>

                        <small className="text-white">{created_date}</small>
                        <hr className="text-white"></hr>
                    </div>
                </div>
            </div>
        </>
    )
}

const BlogBodyAticle = ({article}) => {
    return (
        <>
            <div className="container px-lg-1 text-white">
                {article}
            </div>
        </>
    )
}


const BuildBlogStructure = ({element, header}) => {
    return (
        <>
            <Nav />
            <div className="fadhil_r_bg_color">
                <div className='container py-4 min-vh-100'>
                    <BlogHeaderAticle title={header.title_article} created_date={header.created}/>
                    <BlogBodyAticle article={element}/>
                </div>
                
            </div>
            
        </>
    )
}

const GenBlogList = function* () {
    for (let val of list) {
        yield {
            path: "/blog/" + val.header.path,
            // element: val.content
            element: <BuildBlogStructure element={val.content} header={val.header}/>
        }
    }
}

const GenBlogRouteArray = () => {
    var arr = []
    // console.log(GenBlogList())
    for (const data of GenBlogList()) {
        arr.push(data);
    }
    
    return arr
}

export function GenArticle() {
    var arr = []
    // console.log(GenBlogList())
    for (const data of list) {
        arr.push({
            title_article: data.header.title_html,
            tag: data.header.tag,
            path: "/blog/" + data.header.path,
            thumbnail: data.header.thumbnail,
            text_thumbnail: data.header.text_thumbnail
        });
    }
    
    return arr
}

export function GenTags() {
    let concated = []
    for(const data of list) {
        concated = concated.concat([...new Set(data.header.tag)])
    }

    return concated
}

export default GenBlogRouteArray;