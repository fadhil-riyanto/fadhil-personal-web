import Nav from '../components/Nav'
import { config_project_list } from '../config'

const ProjectHeading = () => {
    

    return (
        <>
            <section className="pt-5 text-center container-fluid fadhil_r_bg_color_secondary">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light text-white">Fadhil's projects</h1>
                        <p className="lead text-white">
                            Take a look at the cool stuff I've built! 
                        </p>
                        
                    </div>
                </div>
            </section>

        </>
    )
}

const ProjectCard = ({image, title, text, source_code}) => {
    return (
        <>
            <a className='col-lg-4 col-md-6 col-12 text-decoration-none px-2 py-2' href={source_code}>
                <div className='card h-100 border border-0'>
                    <img src={image} alt='thumbnail' className='card-img-top'></img>
                    <div class="card-body fadhil_r_bg_color_secondary text-white">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{text}</p>
                    </div>
                </div>
            </a>
        </>
    )
}

const ProjectsPage = () => {
    return (
        <>
            <Nav />
            <div className="fadhil_r_bg_color">
                <ProjectHeading />
                <div className='container min-vh-100'>
                    <div className='row mt-5'>
                        {config_project_list.map((data) => 
                            <ProjectCard 
                                image={data.image}
                                title={data.title}
                                text={data.text_thumbnail}
                                source_code={data.source_code}
                            />
                        )}
                        
                        
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default ProjectsPage;