import { config_connect_links, config } from '../config';

const LinksJumbotron = ({links, icon}) => {
    return (
        <a href={links} className='text-white'><i class={"mx-1 " + icon}></i></a>
        
    )
}

const Jumbotron = (darkModeState) => {
    return (
        <>
        {/* fadhil_r_bg_color */}
            <div className="py-lg-5 mb-4 mt-5 fadhil_r_bg_color rounded-3">
                <div className="container-fluid py-lg-5">
                    <div className="row">
                        <div className="col-lg-9 order-2 order-lg-1">
                            <h1 className="display-5 fw-bold text-white pt-3">Hi, I'm Fadhil Riyanto</h1>
                            <p className="col-md-8 fs-4 text-white">
                                A self taught backend programmer (littebit frontend),  18 y.o from Semarang, Central Java Indonesia.
                                i'm interested in math and programming
                            </p>
                            <h3 className='text-white mb-5 mb-lg-none'>
                                {config_connect_links.map((item) => 
                                    <LinksJumbotron links={item.links} icon={item.icon}/>
                                )}
                            </h3>
                            <button className="btn btn-outline-warning btn-lg" type="button">
                            Contact me
                            </button>
                        </div>
                        <div className="col-lg-3 order-1 order-lg-2"> 5
                            <img src="https://avatars.githubusercontent.com/u/61084125" className="img-fluid"></img>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Jumbotron;