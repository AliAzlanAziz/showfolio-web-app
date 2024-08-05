import { useSelector } from "react-redux";
import GenericCard from "../../shared/generic-card/GenericCard";

const Resume = () => {
  const { profile } = useSelector((state) => state.profileState);

  return (
    <div id="resume">
      <div className="container  my-5 resume-section">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
        </div>
        <div className="row  justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            {/* Education */}
            {profile?.educations && profile?.educations.length > 0 && (
              <section>
                <h2 className="text-primary fw-bolder mb-4 text-center text-lg-start">Education</h2>
                {profile?.educations && profile?.educations.map((ele, index) => (
                  <GenericCard
                    key={index}
                    index={index}
                    imageURL={ele.imageURL}
                    from={ele.from}
                    to={ele.to}
                    title={ele.title}
                    name={ele.name}
                    desc={ele.desc}
                  />
                ))}

              </section>
            )}

            {/* experiance */}
            {profile?.experiences && profile?.experiences.length > 0 && (
              <section>
                <div className=" mb-4">
                  <h2 className="text-primary fw-bolder mb-0 text-center text-lg-start">Experience</h2>
                </div>
                {profile?.experiences && profile?.experiences.map((ele, index) => (
                  <GenericCard
                    key={index}
                    index={index}
                    imageURL={ele.imageURL}
                    from={ele.from}
                    to={ele.to}
                    title={ele.title}
                    name={ele.name}
                    desc={ele.desc}
                  />
                ))}
              </section>
            )}

            {/* projects */}
            {profile?.projects && profile?.projects.length > 0 && (
              <section>
                <div className=" mb-4">
                  <h2 className="text-primary fw-bolder mb-0 text-center text-lg-start">Projects</h2>
                </div>
                {profile?.projects && profile?.projects.map((ele, index) => (
                  <GenericCard
                    key={index}
                    index={index}
                    imageURL={ele.imageURL}
                    from={ele.from}
                    to={ele.to}
                    title={ele.title}
                    name={ele.name}
                    desc={ele.desc}
                  />
                ))}
              </section>
            )}

            {/* Reward */}
            {profile?.awards && profile?.awards.length > 0 && (
              <section>
                <div className="  mb-4">
                  <h2 className="text-primary fw-bolder mb-0 text-center text-lg-start">Awards</h2>
                </div>
                {profile?.awards && profile?.awards.map((ele, index) => (

                  <GenericCard
                    key={index}
                    index={index}
                    imageURL={ele.imageURL}
                    year={ele.year}
                    title={ele.title}
                    name={ele.name}
                    desc={ele.desc}
                  />
                ))}

              </section>
            )}


            {/* Certification */}
            {profile?.certificates && profile?.certificates.length > 0 && (
              <section>
                <div className=" mb-4">
                  <h2 className="text-primary fw-bolder mb-0 text-center text-lg-start ">Certifications</h2>
                </div>
                {profile?.certificates && profile?.certificates.map((ele, index) => (
                  <GenericCard
                    key={index}
                    index={index}
                    imageURL={ele.imageURL}
                    from={ele.from}
                    to={ele.to}
                    title={ele.title}
                    name={ele.name}
                    address={ele?.address?.country}
                    desc={ele.desc}
                  />
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume