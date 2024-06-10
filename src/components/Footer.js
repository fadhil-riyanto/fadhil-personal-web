import { config_connect_links, config } from '../config';

const FooterList = ({name, links}) => {
    return (
        <li>
            <a href={links} className='text-decoration-none'>{name}</a>
        </li>
    );
}

const Footer = () => {
    return (
        <>
            <footer className="w-100 py-4 bg-dark flex-shrink-0">
                <div className="container py-4">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6 order-2 order-lg-1">
                            <h5 className="h1 text-white">
                                Fadhil DEV
                            </h5>
                            <p className="small text-white">
                                {config.BIO}
                            </p>
                            <p className="small text-white mb-0">
                            © Copyrights. All rights reserved.{" "}
                            <a className="text-primary" href="/">
                                fadev.org
                            </a>
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 order-1 order-lg-2">
                            <h5 className="text-white mb-3">Links</h5>
                            <ul className="list-unstyled text-muted">
                                {config_connect_links.map((item) => 
                                    <FooterList name={item.name} links={item.links} key={item.links}/>
                                )}
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;