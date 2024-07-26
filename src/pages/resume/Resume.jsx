import moment from "moment";
import { useSelector } from "react-redux";

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
                <h2 className="text-primary fw-bolder mb-4">Education</h2>
                {profile?.educations && profile?.educations.map((ele, index) => (
                  <div className="card shadow-lg border-0 rounded-4 mb-5" key={index}>
                    <div className="card-body p-2">
                      <div className="row align-items-center gx-5 p-3">
                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                          <div className="p-4 bg-theme-light-purple rounded-4">
                            {ele?.from && ele?.to && <div className="text-primary fw-bolder mb-2">{ele?.from ? moment(ele.from).format('YYYY') : ''} - {ele?.to ? moment(ele.to).format('YYYY') : ''} </div>}
                            <div className="mb-2">
                              {ele?.title && <div className="small fw-bolder">{ele?.title}</div>}
                            </div>
                            <div className="fst-italic">
                              {ele?.name && <div className="small text-black-50">{ele?.name}</div>}
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 p-3">{ele?.desc && <div>{ele?.desc}</div>}</div>
                        <div className="col-lg-3">
                          <div className="">
                            {ele?.imageURL && <img src={ele?.imageURL} alt=".." className="card-img-dev" />
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </section>
            )}

            {/* experiance */}
            {profile?.experiences && profile?.experiences.length > 0 && (
              <section>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                </div>
                {profile?.experiences && profile?.experiences.map((ele, index) => (
                  <div className="card shadow-lg border-0 rounded-4 mb-5" key={index}>
                    <div className="card-body p-2">
                      <div className="row align-items-center gx-5 p-3">
                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                          <div className="p-4 bg-theme-light-purple rounded-4">
                            {ele?.from && ele?.to && <div className="text-primary fw-bolder mb-2">{moment(ele.from).format('YYYY')} -  {moment(ele.to).format('YYYY')}</div>}
                            {ele?.title && <div className="small fw-bolder">{ele?.title}</div>}
                            {ele?.name && <div className="small text-black-50">{ele?.name} </div>}
                            {/* <div className="small text-black-50">Los Angeles, CA</div> */}
                            {ele?.jobMode && <div className="small text-black-50"><i> {ele?.jobMode == 1 ? 'Onsite' :ele?.jobMode == 2 ? 'Remote' : 'Hybrid'} </i></div>}
                          </div>
                        </div>
                        <div className="col-lg-6 p-3">{ele?.desc && <div>{ele?.desc}</div>}</div>
                        <div className="col-lg-3">
                          <div className="">
                            {ele?.imageURL && <img src={ele?.imageURL} alt=".." className="card-img-dev" />
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}



              </section>
            )}

            {/* projects */}
            {profile?.projects && profile?.projects.length > 0 && (
              <section>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h2 className="text-primary fw-bolder mb-0">Projects</h2>
                </div>
                {profile?.projects && profile?.projects.map((ele, index) => (
                  <div className="card shadow-lg border-0 rounded-4 mb-5" key={index}>
                    <div className="card-body p-2">
                      <div className="row align-items-center gx-5 p-3">
                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                          <div className="p-4 bg-theme-light-purple rounded-4">
                            {ele?.from && ele?.to && <div className="text-primary fw-bolder mb-2">{moment(ele.from).format('YYYY')} -  {moment(ele.to).format('YYYY')}</div>}
                            {ele?.title && <div className="small fw-bolder">{ele?.title}</div>}
                            {/* <div className="small text-black-50">Los Angeles, CA</div> */}
                          </div>
                        </div>
                        <div className="col-lg-6 p-3">
                        {ele?.desc && <div>{ele?.desc}</div>}
                        {ele?.contrib && <div className="mt-1">{ele?.contrib}</div>}
                        </div>
                        <div className="col-lg-3">
                          <div className="">
                            {ele?.imageURL && <img src={ele?.imageURL} alt=".." className="card-img-dev" />
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}



              </section>
            )}

            {/* Reward */}
            {profile?.awards && profile?.awards.length > 0 && (
              <section>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h2 className="text-primary fw-bolder mb-0">Awards</h2>
                </div>
                {profile?.awards && profile?.awards.map((ele, index) => (
                  <div className="card shadow-lg border-0 rounded-4 mb-5" key={index}>
                    <div className="card-body p-2">
                      <div className="row align-items-center gx-5 p-3">
                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                          <div className="p-4 bg-theme-light-purple rounded-4">
                            {ele?.year && <div className="text-primary fw-bolder mb-2">{ele?.year}</div>}
                            {ele?.title && <div className="small fw-bolder">{ele?.title}</div>}
                            {/* {ele?.name && <div className="small text-black-50">{ele?.name}</div>} */}
                            {/* <div className="small text-black-50">Los Angeles, CA</div> */}
                          </div>
                        </div>
                        <div className="col-lg-6 p-3">{ele?.desc && <div>{ele?.desc}</div>}</div>
                        <div className="col-lg-3">
                          <div className="">
                            {ele?.imageURL && <img src={ele?.imageURL} alt=".." className="card-img-dev" />
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}



              </section>
            )}


            {/* Certification */}
            {profile?.certificates && profile?.certificates.length > 0 && (
              <section>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h2 className="text-primary fw-bolder mb-0">Certifications</h2>
                </div>
                {profile?.certificates && profile?.certificates.map((ele, index) => (
                  <div className="card shadow-lg border-0 rounded-4 mb-5" key={index}>
                    <div className="card-body p-2">
                      <div className="row align-items-center gx-5 p-3">
                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                          <div className="p-4 bg-theme-light-purple rounded-4">
                            {ele?.from && ele?.to && <div className="text-primary fw-bolder mb-2">{moment(ele.from).format('YYYY')} -  {moment(ele.to).format('YYYY')}</div>}
                            {ele?.title && <div className="small fw-bolder">{ele?.title}</div>}
                            {ele?.name && <div className="small text-black-50">{ele?.name} </div>}
                            {ele?.address?.city && <div className="small text-black-50">{ele?.address?.city}, {ele?.address?.country}</div>}
                          </div>
                        </div>
                        <div className="col-lg-6 p-3">{ele?.desc && <div>{ele?.desc}</div>}</div>
                        <div className="col-lg-3">
                          <div className="">
                            {ele?.imageURL && <img src={ele?.imageURL} alt=".." className="card-img-dev" />
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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