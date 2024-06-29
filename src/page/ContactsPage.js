import { useState } from 'react'
import Nav from '../components/Nav'



const Separator = () => {
    return <div className='mt-1 mb-1'></div>
}

const Card = ({title, content}) => {
    const [isCopied, isCopiedset] = useState("copy")

    const copyData = async () => {
        navigator.clipboard.writeText(content);
        isCopiedset("copied!")
        setTimeout(() => {
            isCopiedset("copy")
        }, 500);

    }
    return (
        <>
            <div className="card text-bg-dark mb-3" >
                <div className="card-header d-flex align-items-center">
                    <div className='me-auto'>
                        <h4>{title}</h4>
                    </div>
                    <div>
                        <button type="button" class="btn btn-outline-light" onClick={() => copyData()}>{isCopied}</button>
                    </div>

                </div>
                <div className="card-body">
                    <p className="card-text">{content}</p>
                </div>
            </div>
        </>
    )
}


const ContactsPage = () => {
    return <>
        <>
            <Nav />
            <div className="fadhil_r_bg_color">
                <div className='container py-4 min-vh-100'>
                    <div className='pt-5'>
                        <Card title={"email"} content={"me@fadev.org"} key="1"/>
                        {/* <Separator /> */}
                        <Card title={"GPG keys"} content={"gpg --keyserver keyserver.ubuntu.com --recv 9DA0EA2EAD1D7E47"} key="2"/>
                    </div>
                </div>
            </div>
        </>
        
    </>
}

export default ContactsPage