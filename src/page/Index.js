import { useState } from 'react';

import Nav from '../components/Nav'
import Jumbotron from '../components/Jumbotron'

const IndexPage = () => {
    return (
        <>
            <Nav />
            <div class="container-fluid fadhil_r_bg_color">
                <div className='container py-4 min-vh-100'>
                <Jumbotron />
                </div>
            </div>
        </>
        
    );
}

export default IndexPage;