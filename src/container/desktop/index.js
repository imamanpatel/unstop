import { useState, useCallback } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Frame1 from "../../components/Desktop/AddAssessment";
import PortalPopup from "../../components/Desktop/PortalPopup";
//import FramePhone from "../../container/phone/PhoneFrame";
import "./index.css";
const Frame = () => {
  const [isFrame2Open, setFrame2Open] = useState(false);
  const [isPhoneFrameOpen, setPhoneFrame2Open]=useState(false)

  const onFrameContainer3Click = useCallback(() => {
    // setPhoneFrame2Open(true);
  }, []);

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);

  return (
    <>
      <div className="frame-parent">
        <div className="frame-child" />
        <div className="frame-group">
          <div className="frame-wrapper">
            <div className="frame-container">
              <div className="assessment-parent">
                <div className="assessment">Assessment</div>
                <img className="frame-item" alt="" src="/vector-298.svg" />
                <div className="frame-div">
                  <div className="my-assessments-wrapper">
                    <div className="my-assessments">My Assessments</div>
                  </div>
                </div>
              </div>
              
              <div
                className="mobile-screen-share-wrapper"
              >
                <Link to="/phone" className="mobile-screen-share">
                  <img className="vector-icon" alt="" src="/vector.svg" />
                  {/* <img className="vector-icon1" alt="" src="/vector1.svg" /> */}
                </Link>
              </div>
             
              
            </div>
          </div>
          <div className="frame-wrapper1">
            <div className="frame-wrapper2">
              <div className="frame-parent1">
                <div className="assessments-overview-parent">
                  <div className="assessments-overview">
                    Assessments Overview
                  </div>
                  <div className="frame-parent2">
                    <div className="total-assessment-parent">
                      <div className="assessment">Total Assessment</div>
                      <div className="frame-parent3">
                        <img
                          className="frame-inner"
                          alt=""
                          src="/frame-1000009100.svg"
                        />
                        <b className="b">34</b>
                      </div>
                    </div>
                    <img
                      className="frame-child1"
                      alt=""
                      src="/vector-251.svg"
                    />
                    <div className="candidates-parent">
                      <div className="assessment">Candidates</div>
                      <div className="frame-parent4">
                        <img
                          className="frame-inner"
                          alt=""
                          src="/frame-1000009353.svg"
                        />
                        <div className="frame-parent5">
                          <div className="parent">
                            <b className="b">11,145</b>
                            <div className="div">+89</div>
                          </div>
                          <div className="total-candidate">Total Candidate</div>
                        </div>
                        <img
                          className="frame-child2"
                          alt=""
                          src="/vector-250.svg"
                        />
                        <div className="frame-parent5">
                          <div className="parent">
                            <b className="b">1,14</b>
                            <div className="div">+89</div>
                          </div>
                          <div className="total-candidate">Who Attamped</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="frame-child1"
                      alt=""
                      src="/vector-251.svg"
                    />
                    <div className="candidates-source-parent">
                      <div className="assessment">Candidates Source</div>
                      <div className="frame-parent4">
                        <img
                          className="frame-inner"
                          alt=""
                          src="/frame-1000005832.svg"
                        />
                        <div className="frame-parent5">
                          <div className="parent">
                            <b className="b">11,000</b>
                            <div className="div">+89</div>
                          </div>
                          <div className="total-candidate">E-mail</div>
                        </div>
                        <img
                          className="frame-child2"
                          alt=""
                          src="/vector-250.svg"
                        />
                        <div className="frame-parent5">
                          <div className="parent">
                            <b className="b">145</b>
                            <div className="div">+89</div>
                          </div>
                          <div className="total-candidate">Social Share</div>
                        </div>
                        <img
                          className="frame-child2"
                          alt=""
                          src="/vector-250.svg"
                        />
                        <div className="frame-parent5">
                          <div className="parent">
                            <b className="b">145</b>
                            <div className="div">+89</div>
                          </div>
                          <div className="total-candidate">Unique Link</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="frame-child1"
                      alt=""
                      src="/vector-251.svg"
                    />
                    <div className="total-purpose-parent">
                      <div className="assessment">Total Purpose</div>
                      <div className="frame-parent3">
                        <img
                          className="frame-inner"
                          alt=""
                          src="/frame-10000091001.svg"
                        />
                        <b className="b">11</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="assessments-overview-parent">
                  <div className="my-assessment-parent">
                    <div className="assessments-overview">My Assessment</div>
                    <div className="frame-wrapper3">
                      <div className="frame-child9" />
                    </div>
                  </div>
                  <div className="frame-parent13">
                    <div className="frame-parent14">
                      <div className="frame-parent15" onClick={openFrame2}>
                        <div className="frame-parent16">
                          <div className="add-wrapper">
                            <img className="add-icon" alt="" src="/add.svg" />
                          </div>
                          <div className="new-assessment">New Assessment</div>
                        </div>
                        <div className="from-here-you">
                          From here you can add questions of multiple types like
                          MCQs, subjective (text or paragraph)!
                        </div>
                        <img
                          className="vector-icon2"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="frame-parent17">
                        <div className="frame-parent18">
                          <div className="frame-parent19">
                            <img
                              className="frame-child10"
                              alt=""
                              src="/frame-1000008703.svg"
                            />
                            <div className="math-assessment-parent">
                              <div className="assessments-overview">
                                Math Assessment
                              </div>
                              <div className="job-parent">
                                <div className="job">Job</div>
                                <img
                                  className="frame-child11"
                                  alt=""
                                  src="/vector-333.svg"
                                />
                                <div className="calendar-today-parent">
                                  <img
                                    className="calendar-today-icon"
                                    alt=""
                                    src="/calendar-today.svg"
                                  />
                                  <div className="new-assessment">
                                    20 Apr 2023
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dot-wrapper">
                            <img className="dot-icon" alt="" src="/3-dot.svg" />
                          </div>
                        </div>
                        <img
                          className="frame-child12"
                          alt=""
                          src="/vector-332.svg"
                        />
                        <div className="frame-parent20">
                          <div className="frame-parent21">
                            <div className="parent3">
                              <div className="assessment">00</div>
                              <div className="duration">Duration</div>
                            </div>
                            <div className="parent3">
                              <div className="assessment">00</div>
                              <div className="duration">Questions</div>
                            </div>
                          </div>
                          <div className="frame-parent22">
                            <div className="link-parent">
                              <img
                                className="link-icon"
                                alt=""
                                src="/link.svg"
                              />
                              <div className="assessments-overview">Share</div>
                            </div>
                            <div className="frame-wrapper4">
                              <div className="lp-wrapper">
                                <b className="lp">LP</b>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="frame-child13" />
                      </div>
                      <div className="frame-parent17">
                        <div className="frame-parent18">
                          <div className="frame-parent19">
                            <img
                              className="frame-child10"
                              alt=""
                              src="/frame-1000008703.svg"
                            />
                            <div className="math-assessment-parent">
                              <div className="assessments-overview">
                                Math Assessment
                              </div>
                              <div className="job-parent">
                                <div className="job">Job</div>
                                <img
                                  className="frame-child11"
                                  alt=""
                                  src="/vector-333.svg"
                                />
                                <div className="calendar-today-parent">
                                  <img
                                    className="calendar-today-icon"
                                    alt=""
                                    src="/calendar-today1.svg"
                                  />
                                  <div className="new-assessment">
                                    20 Apr 2023
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dot-wrapper">
                            <img className="dot-icon" alt="" src="/3-dot.svg" />
                          </div>
                        </div>
                        <img
                          className="frame-child12"
                          alt=""
                          src="/vector-332.svg"
                        />
                        <div className="frame-parent20">
                          <div className="frame-parent21">
                            <div className="parent3">
                              <div className="assessment">00</div>
                              <div className="duration">Duration</div>
                            </div>
                            <div className="parent3">
                              <div className="assessment">00</div>
                              <div className="duration">Questions</div>
                            </div>
                          </div>
                          <div className="frame-parent22">
                            <div className="link-parent">
                              <img
                                className="link-icon"
                                alt=""
                                src="/link1.svg"
                              />
                              <div className="assessments-overview">Share</div>
                            </div>
                            <div className="frame-wrapper4">
                              <div className="frame-parent29">
                                <div className="lp-wrapper">
                                  <b className="lp">LP</b>
                                </div>
                                <div className="lp-frame">
                                  <b className="lp">LP</b>
                                </div>
                                <div className="lp-wrapper1">
                                  <b className="lp">LP</b>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="frame-child13" />
                      </div>
                    </div>
                    <div className="frame-child18" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="frame-a">
          <div className="frame-parent30">
            <div className="frame-parent31">
              <div className="dashboard-parent">
                <img className="dashboard-icon" alt="" src="/dashboard.svg" />
                <div className="dashboard">Dashboard</div>
                <div className="rectangle-div" />
              </div>
              <div className="note-alt-parent">
                <img className="note-alt-icon" alt="" src="/note-alt.svg" />
                <div className="dashboard">Assessment</div>
                <div className="rectangle-div" />
              </div>
              <div className="quiz-parent">
                <img className="dot-icon" alt="" src="/quiz.svg" />
                <div className="assessments-overview">My Library</div>
              </div>
              <div className="frame-child20" />
              <div className="frame-child20" />
              <div className="frame-child20" />
              <div className="bill-and-plan-line-wrapper">
                <img className="link-icon" alt="" src="/vector.svg" />
              </div>
            </div>
            <div className="vector-parent">
              <img className="frame-child23" alt="" src="/vector-267.svg" />
              <div className="frame-parent32">
                <div className="admin-wrapper">
                  <div className="new-assessment">Admin</div>
                </div>
                <div className="admin-meds-parent">
                  <img className="dot-icon" alt="" src="/admin-meds.svg" />
                  <div className="assessments-overview">
                    <p className="round">Round</p>
                    <p className="round">Status</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <Frame1 onClose={closeFrame2} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame;
