import React from 'react';

const About = () => {
    return (
        <div className="about-area rn-section-gap bg_color--1" id="about">
            <div className="about-wrapper">
                <div className="container">
                    <div className="row row--35 align-items-center">
                        <div className="col-lg-5">
                            <div className="thumbnail">
                                <img className="w-100" src="/images/veo.jpg" alt="About Images"/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-inner inner pt--100 pt_sm--40 pt_md--40">
                                <div className="section-title">
                                    <h2 className="title">About Me</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered <a href="#">alteration</a> in
                                        some form, by injected humour, or randomised words which dont look even
                                        slightly believable. If you are going to use a passage of Lorem Ipsum,
                                    </p>
                                </div>
                                <div className="tab-wrapper mt--30">
                                    <ul className="nav nav-tabs tab-style--1" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="mainskill" data-toggle="tab"
                                               href="#rn-mainskill" role="tab" aria-controls="mainskill"
                                               aria-selected="true">Main skills</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="awards" data-toggle="tab" href="#rn-awards"
                                               role="tab" aria-controls="awards" aria-selected="false">Awards</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="experience" data-toggle="tab"
                                               href="#rn-experience" role="tab" aria-controls="experience"
                                               aria-selected="false">Experience</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="education" data-toggle="tab"
                                               href="#rn-education" role="tab" aria-controls="education"
                                               aria-selected="false">Education & Certification</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="rn-mainskill" role="tabpanel"
                                             aria-labelledby="mainskill">
                                            <div className="single-tab-content">
                                                <ul>
                                                    <li><a href="service.html">User experience design <span> -
                                                                    UI/UX</span></a>Delight the user and make it
                                                        work.
                                                    </li>
                                                    <li><a href="service.html">Web and user interface
                                                        design<span> -
                                                                    Development</span></a>Websites, web experiences,
                                                        ...
                                                    </li>
                                                    <li><a href="service.html">Interaction design <span> -
                                                                    Animation</span></a>I
                                                        like to move it move it.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="rn-awards" role="tabpanel"
                                             aria-labelledby="awards">
                                            <div className="single-tab-content">
                                                <ul>
                                                    <li><a href="service.html">Awwwards.com <span>-
                                                                    Winner</span></a> 2019 -
                                                        2020
                                                    </li>
                                                    <li><a href="service.html">CSS Design Awards <span>-
                                                                    Winner</span></a> 2017
                                                        -
                                                        2018
                                                    </li>
                                                    <li><a href="service.html">Design nominees <span>- site of
                                                                    the
                                                                    day</span></a>
                                                        2013- 2014
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="rn-experience" role="tabpanel"
                                             aria-labelledby="experience">
                                            <div className="single-tab-content">
                                                <ul>
                                                    <li><a href="../../service.html">Sr. Front-end Engineer<span> -
                                                                    Google</span></a> 2018
                                                        - Current
                                                    </li>
                                                    <li><a href="../../service.html">Front-end Engineer<span> -
                                                                    Microsoft</span></a> 2017
                                                        - 2018
                                                    </li>
                                                    <li><a href="../../service.html">Software Engineer<span> - Alibaba
                                                                </span></a> 2013-
                                                        2014
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="rn-education" role="tabpanel"
                                             aria-labelledby="education">
                                            <div className="single-tab-content">
                                                <ul>
                                                    <li><a href="../../service.html">BSc In CSE<span> - ABC University,
                                                                    Los Angeles,
                                                                    CA</span></a> 2010
                                                    </li>
                                                    <li><a href="../../service.html">Diploma in Computer Science<span> -
                                                                    Gamma Technical
                                                                    Institute</span></a> 2009
                                                    </li>
                                                    <li><a href="../../service.html">Graphic Designer<span> - ABC
                                                                    Institute, Los Angeles,
                                                                    CA</span></a> 2007
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
