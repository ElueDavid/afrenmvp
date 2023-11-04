import React from 'react'
import "../Styles/sett-afr-pf.css"
import ellipse from "../assets/afren-images2/Ellipse 31.png"
import badge from "../assets/afren-images2/Badge.png"
import rect from "../assets/afren-images2/Rectangle 34624338.png"
import rect2 from "../assets/afren-images2/Rectangle 34624339.png"
import rect3 from "../assets/afren-images2/Rectangle 34624273.png"
import ellipse2 from "../assets/afren-images2/Ellipse 36.png"



export default function SettingProfile() {
  return (
    <div id="main">
    <div id="main-inner">
        <div id="main-left">
            <div id="user-info-cover">
                <div id="user-info">
                    <div id="online-ba">
                        <div id="onl-dot"></div>
                        <p>Online</p>
                    </div>
                    <div id="prof-pic2">
                        <img src={ellipse} alt=""/>
                    </div>
                    <div id="us-name">
                        <h3>Jane Doe</h3>
                        <div id="user-lvl"><img src={badge} alt=""/> <span>Elite Level</span></div>
                    </div>
                    <div id="user-skl-pay">
                        <p>Product Designer</p>
                        <p><strong>$25.00/hr</strong></p>
                    </div>
                    <div id="contact-butts">
                        <a href="javascript:void(0)" className="ctact-butt cntct">Contact Me</a>
                        <a href="javascript:void(0)" className="ctact-butt">Get a Quote</a>
                    </div>
                </div>
                <div id="evaluation">
                    <div className="each-total">
                        <h3>$70K+</h3>
                        <p>Total Earnings</p>
                    </div>
                    <div className="each-total">
                        <h3>155</h3>
                        <p>Total Jobs</p>
                    </div>
                    <div className="each-total">
                        <h3>2,961</h3>
                        <p>Total Hours</p>
                    </div>
                </div>
                <div id="prof-tbl">
                    <table>
                        <tr>
                            <th>Location</th>
                            <td>United Kingdom</td>
                        </tr>
                        <tr>
                            <th>Member Since</th>
                            <td>January 4, 2023</td>
                        </tr>
                        <tr>
                            <th>Avg Response Time</th>
                            <td>2 Hrs</td>
                        </tr>
                        <tr>
                            <th>Recent Delivery</th>
                            <td>5 days</td>
                        </tr>
                    </table>
                    <div id="report-acc">
                        <i className="fas fa-flag"></i>
                        <a href="">Report this account</a>
                    </div>
                </div>
            </div>
            <div id="about">
                <h3>About</h3>
                <p>I am a passionate blah blah blah, God I’m exhausted. I am a passionate blah blah blah, God I’m exhausted I am a passionate blah blah blah, God I’m exhausted I am a passionate blah blah blah, God I’m exhausted I am a passionate blah blah blah, God I’m exhausted </p>
                <a href="" className="more">more...</a>
                <h3>Portfolio website</h3>
                <a href="" className="prtflio-link"><i className="fas fa-link"></i><p>myportfolio.com.io</p></a>
                <h3>Socials</h3>
                <a href="javascript:void(0)" className="socials-link"><i className="fab fa-linkedin-in"></i>LINKEDIN</a>
                <a href="javascript:void(0)" className="socials-link"><i className="fab fa-twitter"></i>TWITTER</a>
                <a href="javascript:void(0)" className="socials-link"><i className="fab fa-facebook-f"></i>FACEBOOK</a>
            </div>
            <div id="ski-ed-whole">
                <div className="ski-ed-header">
                    <h3>Skills</h3>
                    <i className="fas fa-pen"></i>
                </div>
                <div id="skils">
                    <div className="idvdual-skill">UI/UX Prototyping</div>
                    <div className="idvdual-skill">Prototyping</div>
                    <div className="idvdual-skill">Interaction design</div>
                    <div className="idvdual-skill">UI/UX Wireframing</div>
                    <div className="idvdual-skill">Figma</div>
                    <div className="idvdual-skill">Motion graphics</div>
                    <div className="idvdual-skill">Figma</div>
                    <div className="idvdual-skill">UI/UX Wireframing</div>
                    <div className="idvdual-skill">UI/UX Wireframing</div>
                </div>
                <div className="ski-ed-header">
                    <h3>Education</h3>
                    <i className="fas fa-pen"></i>
                </div>
                <div className="edu-info">
                    <h3>University of Design</h3>
                    <p>United States</p>
                    <p>Master of design and illustration</p>
                    <p className="edu-year">2016 - 2019</p>
                </div>
                <div className="edu-info">
                    <h3>University of Design</h3>
                    <p>United States</p>
                    <p>Master of design and illustration</p>
                    <p className="edu-year">2016 - 2019</p>
                </div>
                <h3 id="cert">Certificates</h3>
                <div id="certificates">
                    <img src={rect} alt=""/>
                    <img src={rect2} alt=""/>
                </div>
            </div>
        </div>
        <div id="main-right">
            <div id="wrk-history">
                <h3 id="wrk-htry-header">Work History</h3>
                <div className="work">
                    <div className="title-date">
                        <div className="wrk-title"><h3>I need an illustrator to draw</h3></div>
                        <div className="wrk-date">
                            <p>Jan 2023 - Feb 2023</p>
                            <p>fixed prize $200</p>
                        </div>
                    </div>
                    <div className="wrk-contnt">
                        <div className="wrk-cli-prof"><img src={ellipse2}/></div>
                        <div className="wrk-detail">
                            <p className="star"><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i></p>
                            <p className="desc">Alex was very kind blah blah blah Alex was very kind blah blah blah. Alex was very kind blah blah blah Alex was very kind blah blah blah
                                Alex was very kind blah blah blah Alex was very kind blah blah blah Alex was very kind blah blah blah Alex was very kind blah blah blah</p>
                        </div>
                    </div>
                </div>
                <div className="work">
                    <div className="title-date">
                        <div className="wrk-title"><h3>I need an illustrator to draw</h3></div>
                        <div className="wrk-date">
                            <p>Jan 2023 - Feb 2023</p>
                            <p>fixed prize $200</p>
                        </div>
                    </div>
                    <div className="wrk-contnt">
                        <div className="wrk-cli-prof"><img src={ellipse2}/></div>
                        <div className="wrk-detail">
                            <p className="star"><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i></p>
                            <p className="desc">Alex was very kind blah blah blah Alex was very kind blah blah blah. Alex was very kind blah blah blah Alex was very kind blah blah blah
                                Alex was very kind blah blah blah Alex was very kind blah blah blah Alex was very kind blah blah blah Alex was very kind blah blah blah</p>
                        </div>
                    </div>
                </div>
                <div className="work">
                    <div className="title-date">
                        <div className="wrk-title"><h3>I need an illustrator to draw</h3></div>
                        <div className="wrk-date">
                            <p>Jan 2023 - Feb 2023</p>
                            <p>fixed prize $200</p>
                        </div>
                    </div>
                    <div className="wrk-contnt">
                        <div className="wrk-cli-prof"><img src={ellipse2}/></div>
                        <div className="wrk-detail">
                            <p className="star"><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i></p>
                            <p className="desc">Alex was very kind blah blah blah Alex was very kind blah blah blah. Alex was very kind blah blah blah Alex was very kind blah blah blah
                                Alex was very kind blah blah blah Alex was very kind blah blah blah Alex was very kind blah blah blah Alex was very kind blah blah blah</p>
                        </div>
                    </div>
                </div>
                <div className="work">
                    <div className="title-date">
                        <div className="wrk-title"><h3>I need an illustrator to draw</h3></div>
                        <div className="wrk-date">
                            <p>Jan 2023 - Feb 2023</p>
                            <p>fixed prize $200</p>
                        </div>
                    </div>
                    <div className="wrk-contnt">
                        <div className="wrk-cli-prof"><img src={ellipse2}/></div>
                        <div className="wrk-detail">
                            <p className="star"><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i></p>
                            <p className="desc">Alex was very kind blah blah blah Alex was very kind blah blah blah. Alex was very kind blah blah blah Alex was very kind blah blah blah
                                Alex was very kind blah blah blah Alex was very kind blah blah blah Alex was very kind blah blah blah Alex was very kind blah blah blah</p>
                        </div>
                    </div>
                </div>
                <div className="work">
                    <div className="title-date">
                        <div className="wrk-title"><h3>I need an illustrator to draw</h3></div>
                        <div className="wrk-date">
                            <p>Jan 2023 - Feb 2023</p>
                            <p>fixed prize $200</p>
                        </div>
                    </div>
                    <div className="wrk-contnt">
                        <div className="wrk-cli-prof"><img src={ellipse2} /></div>
                        <div className="wrk-detail">
                            <p className="star"><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i></p>
                            <p className="desc">Alex was very kind blah blah blah Alex was very kind blah blah blah. Alex was very kind blah blah blah Alex was very kind blah blah blah
                                Alex was very kind blah blah blah Alex was very kind blah blah blah Alex was very kind blah blah blah Alex was very kind blah blah blah</p>
                        </div>
                    </div>
                </div>
                <div className="work">
                    <div className="title-date">
                        <div className="wrk-title"><h3>I need an illustrator to draw</h3></div>
                        <div className="wrk-date">
                            <p>Jan 2023 - Feb 2023</p>
                            <p>fixed prize $200</p>
                        </div>
                    </div>
                    <div className="wrk-contnt">
                        <div className="wrk-cli-prof"><img src={ellipse2} /></div>
                        <div className="wrk-detail">
                            <p className="star"><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i></p>
                            <p className="desc">Alex was very kind blah blah blah Alex was very kind blah blah blah. Alex was very kind blah blah blah Alex was very kind blah blah blah
                                Alex was very kind blah blah blah Alex was very kind blah blah blah Alex was very kind blah blah blah Alex was very kind blah blah blah</p>
                        </div>
                    </div>
                </div>
                <div id="page-num-cover">
                    <ul id="page-num">
                        <li className="page pg-more"><a href="javascript:void(0)">First</a></li>
                        <li className="page pg active"><a href="javascript:void(0)">1</a></li>
                        <li className="page pg"><a href="javascript:void(0)">2</a></li>
                        <li className="page pg"><a href="javascript:void(0)">3</a></li>
                        <li className="page pg"><a href="javascript:void(0)">4</a></li>
                        <li className="page pg-more"><a href="javascript:void(0)">Last</a></li>
                    </ul>
                </div>
            </div>
            <div id="feat-wrk">
                <h3>Featured Work</h3>
                <div id="worked-prj">
                    <div className="prj-div">
                        <div className="prj-client-info">
                            <div className="prj-client-prf">
                                <div className="prj-client-pic">
                                    <img src={rect3} alt=""/></div>
                                <div>
                                    <p>Alexander willians</p>
                                    <span>Updated 10m ago</span>
                                </div>
                            </div>
                            <div className="prj-skill">Design</div>
                        </div>
                        <p className="prj-title">Need a designer to form a design system for my business</p>
                        <p className="prj-desc">Looking for a talented product designer. Looking for a talented product designer, Looking for a talented product designer</p>
                        <p className="star"><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i></p>
                    </div>
                    <div className="prj-div">
                        <div className="prj-client-info">
                            <div className="prj-client-prf">
                                <div className="prj-client-pic">
                                    <img src={rect3} alt=""/></div>
                                <div>
                                    <p>Alexander willians</p>
                                    <span>Updated 10m ago</span>
                                </div>
                            </div>
                            <div className="prj-skill">Design</div>
                        </div>
                        <p className="prj-title">Need a designer to form a design system for my business</p>
                        <p className="prj-desc">Looking for a talented product designer. Looking for a talented product designer, Looking for a talented product designer</p>
                        <p className="star"><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i></p>
                    </div>
                    <div className="prj-div">
                        <div className="prj-client-info">
                            <div className="prj-client-prf">
                                <div className="prj-client-pic">
                                    <img src={rect3} alt=""/></div>
                                <div>
                                    <p>Alexander willians</p>
                                    <span>Updated 10m ago</span>
                                </div>
                            </div>
                            <div className="prj-skill">Design</div>
                        </div>
                        <p className="prj-title">Need a designer to form a design system for my business</p>
                        <p className="prj-desc">Looking for a talented product designer. Looking for a talented product designer, Looking for a talented product designer</p>
                        <p className="star"><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i></p>
                    </div>
                    <div className="prj-div">
                        <div className="prj-client-info">
                            <div className="prj-client-prf">
                                <div className="prj-client-pic">
                                    <img src={rect3} alt=""/></div>
                                <div>
                                    <p>Alexander willians</p>
                                    <span>Updated 10m ago</span>
                                </div>
                            </div>
                            <div className="prj-skill">Design</div>
                        </div>
                        <p className="prj-title">Need a designer to form a design system for my business</p>
                        <p className="prj-desc">Looking for a talented product designer. Looking for a talented product designer, Looking for a talented product designer</p>
                        <p className="star"><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
