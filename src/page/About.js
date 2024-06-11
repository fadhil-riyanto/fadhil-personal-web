import Nav from '../components/Nav'
import { config_skills_level, config_tools_level } from '../config'
import '../components/css/Custom.css'
import { useState } from 'react'

const HeaderSection = ({text}) => {
    return (
        <>
            <div className='my-1'>
                <span className="border-bottom border-warning display-5 fw-bold text-white pt-3 ">
                    {text}
                </span>
            </div>
        </>
    )
}

const SkillCard = ({logo, name, level}) => {
    return (
        <>
            <div className='col-lg-3 col-md-4 col-6 text-white'>
                <div className='border border-warning m-1 p-1 row fadhil_r_hoverable'>
                    <div className='col-3'>
                        <img src={logo} style={{width: "100%"}}></img>
                    </div>
                    <div className='col-9 d-flex flex-column'>
                        <div>
                            {name}
                        </div>
                        <div >
                            {level}
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

const SkillistTable = () => {
    
    return (
        <>
            <div className='row'>
                {/* <Skillcard logo="aaa"/> */}
                {config_skills_level.map((data) => 
                    <SkillCard logo={data.logo} name={data.name} level={data.level}/>
                )}
            </div>

        </>
    )
}

const ToolsTable = () => {
    
    return (
        <>
            <div className='row'>
                {/* <Skillcard logo="aaa"/> */}
                {config_tools_level.map((data) => 
                    <SkillCard logo={data.logo} name={data.name} level={data.level}/>
                )}
            </div>

        </>
    )
}

const Skills = () => {
    
    return (
        <>
        {/* fadhil_r_bg_color */}
            <div className="py-lg-1 mb-4 mt-5 fadhil_r_bg_color rounded-3">
                <div className="container-fluid">
                    <HeaderSection text="Skills"/>
                    <SkillistTable />
                    <HeaderSection text="Tools"/>
                    <ToolsTable />
                </div>
            </div>

        </>
    );
}

const Aboutme = () => {
    return (
        <>
        {/* fadhil_r_bg_color */}
            <div className="py-lg-1 mb-4 mt-5 fadhil_r_bg_color rounded-3">
            <div className="container-fluid">
                    <HeaderSection text="About me"/>
                    <div className="row">
                        <div className="col-lg-9 order-2 order-lg-1">
                            <p className="fs-4 text-white">
                                I am Fadhil Riyanto, I love programming and math (including science), Im from semarang (hot enough).
                                im currenly studying about Linux kernel, low level machine, and website user interface.
                                I'm really passionate about Backend programming and HPC infrastructure.
                                One of my goals is have dedicated server on my room, have domain and hosting bussines,
                                work fulltime as programmer, and become linux kernel maintainer.

                                fun fact, I like working from behind, exposed to people is too tiring
                            </p>
                        </div>
                        <div className="col-lg-3 order-1 order-lg-2">
                            <img src="https://avatars.githubusercontent.com/u/61084125" alt="profile" className="img-fluid"></img>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

const AboutPage = () => {
    
    return (
        <>
            <Nav />
            <div className="fadhil_r_bg_color">
                <div className='container py-4 min-vh-100'>
                <Aboutme />
                <Skills />
                </div>
            </div>
        </>
        
    );
}

export default AboutPage;