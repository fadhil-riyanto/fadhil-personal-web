const Jumbotron = (darkModeState) => {
    return (
        <>
        {/* fadhil_r_bg_color */}
            <div className="py-lg-5 mb-4 mt-5 fadhil_r_bg_color rounded-3">
                <div className="container-fluid py-lg-5">
                    <div className="row">
                        <div className="col-lg-9 order-2 order-lg-1">
                            <h1 className="display-5 fw-bold text-white pt-3">Hi, I'm Fadhil DEV</h1>
                            <p className="col-md-8 fs-4 text-white">
                                A Backend programmer (littebit frontend),  18 y.o from Semarang, Central Java Indonesia.
                                has been coding since I was 13 y.o,
                                i'm interested in math and programming itself
                            </p>
                            <button className="btn btn-outline-warning btn-lg" type="button">
                            Contact me
                            </button>
                        </div>
                        <div className="col-lg-3 order-1 order-lg-2">
                            <img src="https://avatars.githubusercontent.com/u/61084125" className="img-fluid"></img>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Jumbotron;