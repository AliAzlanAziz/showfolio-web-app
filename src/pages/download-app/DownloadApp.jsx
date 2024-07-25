import './download-app.css'
const DownloadApp = () => {
    return (
        <>

            <header className="py-5 header-section">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">

                            <div className="text-center text-xxl-start">
                                <h1 className="display-3 fw-bolder mb-3"><span className="text-gradient d-inline">Showfolio</span></h1>
                                <div className="fs-3 fw-light text-muted mb-3">Make your portfolio and share with others</div>
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                                    <div className="text-uppercase">highlight you presence</div></div>

                            </div>
                            <div className="text-center text-xxl-start">
                                <a href="#" target="_blank" className="market-btn google-btn" role="button">
                                    <span className="market-button-subtitle">Download on the</span>
                                    <span className="market-button-title">Google Play (Under Review By Google)</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default DownloadApp