import { useState, useCallback } from "react";
import Frame from "../../components/phone/Frame";
import PortalPopup from "../../components/phone/PortalPopup";
import Frame1 from "../../components/phone/Frame1";
import "./index.css";
const PhoneFrame = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);
  const [isFrame2Open, setFrame2Open] = useState(false);
  const [isFrame3Open, setFrame3Open] = useState(false);


  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);



  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);

  const openFrame3 = useCallback(() => {
    setFrame3Open(true);
  }, []);

  const closeFrame3 = useCallback(() => {
    setFrame3Open(false);
  }, []);


  return (
    <>
      <div className="iphone-13-mini-7">
        <div className="frame-parent">
          <div className="status-bar-parent">
            <div className="status-bar">
              <img className="icon" alt="" src="/941.svg" />
              <div className="frame">
                <img className="vector-icon" alt="" src="/vector3.svg" />
                {/* <img className="vector-icon1" alt="" src="/vector1.svg" /> */}
                <img
                  className="frame-child"
                  alt=""
                  src="/frame-1000007851.svg"
                />
              </div>
            </div>
            <div className="frame-group">
              <div className="frame-container">
                <div className="segment-wrapper" onClick={openFrame}>
                  <img className="segment-icon" alt="" src="/segment.svg" />
                </div>
                <div className="assessment">Assessment</div>
              </div>
              <div
                className="laptop-mac-wrapper"
              >
                <img className="laptop-mac-icon" alt="" src="/laptop-mac.svg" />
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-div">
                <div className="my-assessments-wrapper">
                  <div className="my-assessments">My Assessments</div>
                </div>
                <div className="unstop-assessments-wrapper">
                  <div className="my-assessments">Unstop Assessments</div>
                </div>
              </div>
            </div>
          </div>
          <div className="component-61-wrapper">
            <div className="status-bar-parent">
              <div className="frame-parent1">
                <div className="my-assessment-parent">
                  <div className="my-assessment">My Assessment</div>
                  <div className="frame-parent2">
                    <div className="search-wrapper">
                      <img className="search-icon" alt="" src="/search.svg" />
                    </div>
                    <div className="search-wrapper">
                      <img
                        className="filter-list-alt-icon"
                        alt=""
                        src="/filter-list-alt.svg"
                      />
                    </div>
                    <div className="search-wrapper">
                      <div className="bar-chart-wrapper">
                        <img
                          className="bar-chart-icon"
                          alt=""
                          src="/bar-chart.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent3">
                  <div className="frame-parent4" onClick={openFrame1}>
                    <div className="frame-parent5">
                      <div className="add-wrapper">
                        <img className="add-icon" alt="" src="/add.svg" />
                      </div>
                      <div className="my-assessment">New Assessment</div>
                    </div>
                    <div className="from-here-you">
                      From here you can add questions of multiple types like
                      MCQs, subjective (text or paragraph)!
                    </div>
                    <img className="vector-icon2" alt="" src="/vector2.svg" />
                  </div>
                  <div className="frame-parent6">
                    <div className="frame-parent7">
                      <div className="frame-container">
                        <img
                          className="frame-item"
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className="math-assessment-parent">
                          <div className="my-assessment">Math Assessment</div>
                          <div className="job-parent">
                            <div className="job">Job</div>
                            <img
                              className="frame-inner"
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className="frame-wrapper1">
                              <div className="schedule-parent">
                                <img
                                  className="schedule-icon"
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className="my-assessments">20 Apr 23</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dot-wrapper">
                        <img
                          className="bar-chart-icon"
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="frame-child1"
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className="frame-parent9">
                      <div className="frame-parent10">
                        <div className="parent">
                          <div className="my-assessment">00</div>
                          <div className="duration">Duration</div>
                        </div>
                        <div className="parent">
                          <div className="my-assessment">00</div>
                          <div className="duration">Questions</div>
                        </div>
                      </div>
                      <div className="frame-parent11">
                        <div className="link-parent">
                          <img className="link-icon" alt="" src="/link.svg" />
                          <div className="share">Share</div>
                        </div>
                        <div className="frame-wrapper2">
                          <div className="lp-wrapper">
                            <b className="lp">LP</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent6">
                    <div className="frame-parent7">
                      <div className="frame-container">
                        <img
                          className="frame-item"
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className="math-assessment-parent">
                          <div className="my-assessment">Math Assessment</div>
                          <div className="job-parent">
                            <div className="job">Job</div>
                            <img
                              className="frame-inner"
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className="frame-wrapper1">
                              <div className="schedule-parent">
                                <img
                                  className="schedule-icon"
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className="my-assessments">20 Apr 23</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dot-wrapper">
                        <img
                          className="bar-chart-icon"
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="frame-child1"
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className="frame-parent9">
                      <div className="frame-parent10">
                        <div className="parent">
                          <div className="my-assessment">00</div>
                          <div className="duration">Duration</div>
                        </div>
                        <div className="parent">
                          <div className="my-assessment">00</div>
                          <div className="duration">Questions</div>
                        </div>
                      </div>
                      <div className="frame-parent17">
                        <div className="link-parent">
                          <img className="link-icon" alt="" src="/link1.svg" />
                          <div className="share">Share</div>
                        </div>
                        <div className="frame-parent18">
                          <div className="frame-parent19">
                            <div className="lp-container">
                              <b className="lp">LP</b>
                            </div>
                            <div className="lp-frame">
                              <b className="lp">LP</b>
                            </div>
                            <div className="lp-wrapper1">
                              <b className="lp">LP</b>
                            </div>
                          </div>
                          <div className="div4">+324</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent6">
                    <div className="frame-parent7">
                      <div className="frame-container">
                        <img
                          className="frame-item"
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className="math-assessment-parent">
                          <div className="my-assessment">Math Assessment</div>
                          <div className="job-parent">
                            <div className="job">Job</div>
                            <img
                              className="frame-inner"
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className="frame-wrapper1">
                              <div className="schedule-parent">
                                <img
                                  className="schedule-icon"
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className="my-assessments">20 Apr 23</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dot-wrapper">
                        <img
                          className="bar-chart-icon"
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="frame-child1"
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className="frame-parent9">
                      <div className="frame-parent10">
                        <div className="parent">
                          <div className="my-assessment">00</div>
                          <div className="duration">Duration</div>
                        </div>
                        <div className="parent">
                          <div className="my-assessment">00</div>
                          <div className="duration">Questions</div>
                        </div>
                      </div>
                      <div className="frame-parent17">
                        <div className="link-parent">
                          <img className="link-icon" alt="" src="/link2.svg" />
                          <div className="share">Share</div>
                        </div>
                        <div className="frame-parent18">
                          <div className="frame-parent19">
                            <div className="lp-container">
                              <b className="lp">LP</b>
                            </div>
                            <div className="lp-frame">
                              <b className="lp">LP</b>
                            </div>
                            <div className="lp-wrapper1">
                              <b className="lp">LP</b>
                            </div>
                          </div>
                          <div className="div4">+324</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent6">
                    <div className="frame-parent7">
                      <div className="frame-container">
                        <img
                          className="frame-item"
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className="math-assessment-parent">
                          <div className="my-assessment">Math Assessment</div>
                          <div className="job-parent">
                            <div className="job">Job</div>
                            <img
                              className="frame-inner"
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className="frame-wrapper1">
                              <div className="schedule-parent">
                                <img
                                  className="schedule-icon"
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className="my-assessments">20 Apr 23</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dot-wrapper">
                        <img
                          className="bar-chart-icon"
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="frame-child1"
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className="frame-parent9">
                      <div className="frame-parent10">
                        <div className="parent">
                          <div className="my-assessment">00</div>
                          <div className="duration">Duration</div>
                        </div>
                        <div className="parent">
                          <div className="my-assessment">00</div>
                          <div className="duration">Questions</div>
                        </div>
                      </div>
                      <div className="frame-parent17">
                        <div className="link-parent">
                          <img className="link-icon" alt="" src="/link2.svg" />
                          <div className="share">Share</div>
                        </div>
                        <div className="frame-parent18">
                          <div className="frame-parent19">
                            <div className="lp-container">
                              <b className="lp">LP</b>
                            </div>
                            <div className="lp-frame">
                              <b className="lp">LP</b>
                            </div>
                            <div className="lp-wrapper1">
                              <b className="lp">LP</b>
                            </div>
                          </div>
                          <div className="div4">+324</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent6">
                    <div className="frame-parent7">
                      <div className="frame-container">
                        <img
                          className="frame-item"
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className="math-assessment-parent">
                          <div className="my-assessment">Math Assessment</div>
                          <div className="job-parent">
                            <div className="job">Job</div>
                            <img
                              className="frame-inner"
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className="frame-wrapper1">
                              <div className="schedule-parent">
                                <img
                                  className="schedule-icon"
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className="my-assessments">20 Apr 23</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dot-wrapper">
                        <img
                          className="bar-chart-icon"
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="frame-child1"
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className="frame-parent9">
                      <div className="frame-parent10">
                        <div className="parent">
                          <div className="my-assessment">00</div>
                          <div className="duration">Duration</div>
                        </div>
                        <div className="parent">
                          <div className="my-assessment">00</div>
                          <div className="duration">Questions</div>
                        </div>
                      </div>
                      <div className="frame-parent17">
                        <div className="link-parent">
                          <img className="link-icon" alt="" src="/link1.svg" />
                          <div className="share">Share</div>
                        </div>
                        <div className="frame-parent18">
                          <div className="frame-parent19">
                            <div className="lp-container">
                              <b className="lp">LP</b>
                            </div>
                            <div className="lp-frame">
                              <b className="lp">LP</b>
                            </div>
                            <div className="lp-wrapper1">
                              <b className="lp">LP</b>
                            </div>
                          </div>
                          <div className="div4">+324</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent6">
                    <div className="frame-parent7">
                      <div className="frame-container">
                        <img
                          className="frame-item"
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className="math-assessment-parent">
                          <div className="my-assessment">Math Assessment</div>
                          <div className="job-parent">
                            <div className="job">Job</div>
                            <img
                              className="frame-inner"
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className="frame-wrapper1">
                              <div className="schedule-parent">
                                <img
                                  className="schedule-icon"
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className="my-assessments">20 Apr 23</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dot-wrapper">
                        <img
                          className="bar-chart-icon"
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="frame-child1"
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className="frame-parent9">
                      <div className="frame-parent10">
                        <div className="parent">
                          <div className="my-assessment">00</div>
                          <div className="duration">Duration</div>
                        </div>
                        <div className="parent">
                          <div className="my-assessment">00</div>
                          <div className="duration">Questions</div>
                        </div>
                      </div>
                      <div className="frame-parent17">
                        <div className="link-parent">
                          <img className="link-icon" alt="" src="/link1.svg" />
                          <div className="share">Share</div>
                        </div>
                        <div className="frame-parent18">
                          <div className="frame-parent19">
                            <div className="lp-container">
                              <b className="lp">LP</b>
                            </div>
                            <div className="lp-frame">
                              <b className="lp">LP</b>
                            </div>
                            <div className="lp-wrapper1">
                              <b className="lp">LP</b>
                            </div>
                          </div>
                          <div className="div4">+324</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent6">
                    <div className="frame-parent7">
                      <div className="frame-container">
                        <img
                          className="frame-item"
                          alt=""
                          src="/frame-1000008703.svg"
                        />
                        <div className="math-assessment-parent">
                          <div className="my-assessment">Math Assessment</div>
                          <div className="job-parent">
                            <div className="job">Job</div>
                            <img
                              className="frame-inner"
                              alt=""
                              src="/vector-333.svg"
                            />
                            <div className="frame-wrapper1">
                              <div className="schedule-parent">
                                <img
                                  className="schedule-icon"
                                  alt=""
                                  src="/schedule.svg"
                                />
                                <div className="my-assessments">20 Apr 23</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dot-wrapper">
                        <img
                          className="bar-chart-icon"
                          alt=""
                          src="/3-dot.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="frame-child1"
                      alt=""
                      src="/vector-332.svg"
                    />
                    <div className="frame-parent9">
                      <div className="frame-parent10">
                        <div className="parent">
                          <div className="my-assessment">00</div>
                          <div className="duration">Duration</div>
                        </div>
                        <div className="parent">
                          <div className="my-assessment">00</div>
                          <div className="duration">Questions</div>
                        </div>
                      </div>
                      <div className="frame-parent17">
                        <div className="link-parent">
                          <img className="link-icon" alt="" src="/link3.svg" />
                          <div className="share">Share</div>
                        </div>
                        <div className="frame-parent18">
                          <div className="frame-parent19">
                            <div className="lp-container">
                              <b className="lp">LP</b>
                            </div>
                            <div className="lp-wrapper1">
                              <b className="lp">LP</b>
                            </div>
                          </div>
                          <div className="div4">+32,4090</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="add-container" onClick={openFrame2}>
          <img className="add-icon" alt="" src="/add1.svg" />
        </div>
        <div className="frame-parent">
          <div className="status-bar">
            <img className="icon" alt="" src="/941.svg" />
            <div className="frame">
              <img className="vector-icon" alt="" src="/vector.svg" />
              <img className="vector-icon1" alt="" src="/vector1.svg" />
              <img className="frame-child" alt="" src="/frame-1000007851.svg" />
            </div>
          </div>
          <div className="frame-group">
            <div className="frame-container">
              <div className="segment-wrapper" onClick={openFrame3}>
                <img className="segment-icon" alt="" src="/segment.svg" />
              </div>
              <div className="assessment">Assessment</div>
            </div>
            <div
              className="laptop-mac-wrapper"
            >
              <img className="laptop-mac-icon" alt="" src="/laptop-mac.svg" />
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-div">
              <div className="my-assessments-wrapper">
                <div className="my-assessments">My Assessments</div>
              </div>
              <div className="unstop-assessments-wrapper">
                <div className="my-assessments">Unstop Assessments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <Frame1 onClose={closeFrame1} />
        </PortalPopup>
      )}
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <Frame1 onClose={closeFrame2} />
        </PortalPopup>
      )}
      {isFrame3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame3}
        >
          <Frame onClose={closeFrame3} />
        </PortalPopup>
      )}

      
    </>
  );
};

export default PhoneFrame;
