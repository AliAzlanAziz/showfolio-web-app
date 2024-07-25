import { useSelector } from "react-redux";

const AboutMe = () => {
    const { profile } = useSelector((state) => state.profileState);
 
    return (
        <div>
            <section className="bg-light py-5 container">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xxl-8">
                            <div className="text-center my-5">
                                <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Me</span></h2>
                                <p className="lead fw-light mb-4">{profile?.profile?.name}</p>
                                <p className="text-muted">{profile?.profile?.desc}</p>
                                <p className="text-muted text-center">{profile?.profile?.phone} | <span>{profile?.profile?.email}</span></p>
                                <div className="d-flex justify-content-center fs-2 gap-4">
                                    <a className="text-gradient" target="_blank" href={profile?.profile?.fb}><i className="bi bi-facebook"></i></a>
                                    <a className="text-gradient" target="_blank" href={profile?.profile?.ig}><i className="bi bi-instagram"></i></a>
                                    <a className="text-gradient" target="_blank" href={profile?.profile?.li}><i className="bi bi-linkedin"></i></a>
                                    <a className="text-gradient" target="_blank" href={profile?.profile?.gh}><i className="bi bi-github"></i></a>
                                    <a className="text-gradient" target="_blank" href={profile?.profile?.yt}><i className="bi bi-youtube"></i></a>
                                    <a className="text-gradient" target="_blank" href={profile?.profile?.tw}><i className="bi bi-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe