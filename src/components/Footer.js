import config_footer_links from '../config';

const FooterList = ({name, links}) => {
    return (
        <li>
            <a href={links}>{name}</a>
        </li>
    );
}

const Footer = () => {
    return (
        <>
            <footer className="w-100 py-4 bg-dark flex-shrink-0">
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                        <h5 className="h1 text-white">FADEV</h5>
                        <p className="small text-white">
                        Hanya programmer yang sedang menulis kode.
                        </p>
                        <p className="small text-white mb-0">
                        © Copyrights. All rights reserved.{" "}
                        <a className="text-primary" href="#">
                            fadev.org
                        </a>
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-white mb-3">Link s</h5>
                        <ul className="list-unstyled text-muted">
                            {config_footer_links.map((item) => 
                                <FooterList name={item.name} link={item.links}/>
                            )}
                            
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default { Footer };