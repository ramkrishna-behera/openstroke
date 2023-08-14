import React from 'react';
import './style.css';

import corkicon from '../../Assets/Icon/cork.svg';
import pickcoloryellow from '../../Assets/Icon/pickcoloryellow.svg';
import pickcolorwhite from '../../Assets/Icon/pickcolorwhite.svg';
import pickcolororange from '../../Assets/Icon/pickcolororange.svg';
import pickcolorgreen from '../../Assets/Icon/pickcolorgreen.svg';
import pickcolordarkgreen from '../../Assets/Icon/pickcolordarkgreen.svg';
import pickcolorblue from '../../Assets/Icon/pickcolorblue.svg';
import pickcolorblack from '../../Assets/Icon/pickcolorblack.svg';
import reset from '../../Assets/Icon/reset.svg';
import seperator from '../../Assets/Icon/seperator.svg';


const View = () => {
  return (
    <div className='layout1'>
        <div className='iconpopup'>
            <div className='viewicon'>
                <div className='viewiconholder'>
                    <div className='vihead'>
                        <div className='vhtype'>
                            <div className='vtclassic'>
                                Classic
                            </div>
                            <div className='vtdot'>
                                •
                            </div>
                            <div className='vtsharp'>
                                sharp
                            </div>
                        </div>
                    </div>
                    <div className='viview'>
                        <div className='vvicon'>
                            <img src={corkicon} alt="SVG cork Icon" />
                        </div>
                        <div className='vvcolor'>
                            <img src={pickcolorblack} alt="SVG cork Icon" />
                            <img src={pickcolororange} alt="SVG cork Icon" />
                            <img src={pickcoloryellow} alt="SVG cork Icon" />
                            <img src={pickcolorgreen} alt="SVG cork Icon" />
                            <img src={pickcolorblue} alt="SVG cork Icon" />
                            <img src={pickcolordarkgreen} alt="SVG cork Icon" />
                            <img src={pickcolorwhite} alt="SVG cork Icon" />
                            <img src={seperator} alt="SVG cork Icon" />
                            <div className='reset'><img src={reset} alt="SVG cork Icon" /></div>
                        </div>
                    </div>
                    <div className='vitype'>
                        <div className='vtholder'>
                            <div className='vhicon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M21 7C21 5.89543 21.8954 5 23 5H25C26.1046 5 27 5.89543 27 7V27C27 28.1046 26.1046 29 25 29H23C21.8954 29 21 28.1046 21 27V7Z" fill="#1E3050"/>
                                <path d="M10.5 18C10.5 17.1716 11.1716 16.5 12 16.5H14C15.933 16.5 17.5 18.067 17.5 20V32C17.5 32.2761 17.7239 32.5 18 32.5H30C30.2761 32.5 30.5 32.2761 30.5 32V20C30.5 18.067 32.067 16.5 34 16.5H36C36.8284 16.5 37.5 17.1716 37.5 18C37.5 18.8284 36.8284 19.5 36 19.5H34C33.7239 19.5 33.5 19.7239 33.5 20V32C33.5 33.933 31.933 35.5 30 35.5H25.5V40.5H30C30.8284 40.5 31.5 41.1716 31.5 42C31.5 42.8284 30.8284 43.5 30 43.5H18C17.1716 43.5 16.5 42.8284 16.5 42C16.5 41.1716 17.1716 40.5 18 40.5H22.5V35.5H18C16.067 35.5 14.5 33.933 14.5 32V20C14.5 19.7239 14.2761 19.5 14 19.5H12C11.1716 19.5 10.5 18.8284 10.5 18Z" fill="#1E3050"/>
                                </svg>

                            </div>
                            <div className='vhtext'>
                                Solid
                            </div>

                        </div>
                        <div className='vtholder'>
                            <div className='vhicon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M30 42H18" stroke="#1E3050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24 42L24 34" stroke="#1E3050" stroke-width="2" stroke-linejoin="round"/>
                                <path d="M12 18H14C15.1046 18 16 18.8954 16 20V32C16 33.1046 16.8954 34 18 34H30C31.1046 34 32 33.1046 32 32V20C32 18.8954 32.8954 18 34 18H36" stroke="#1E3050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 7C22 6.44772 22.4477 6 23 6H25C25.5523 6 26 6.44772 26 7V27C26 27.5523 25.5523 28 25 28H23C22.4477 28 22 27.5523 22 27V7Z" stroke="#1E3050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='vhtext'>
                                Standard
                            </div>
                        </div>
                        <div className='vtholder'>
                            <div className='vhicon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M30 42H18" stroke="#1E3050" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24 42L24 34" stroke="#1E3050" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M12 18H14C15.1046 18 16 18.8954 16 20V32C16 33.1046 16.8954 34 18 34H30C31.1046 34 32 33.1046 32 32V20C32 18.8954 32.8954 18 34 18H36" stroke="#1E3050" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 7C22 6.44772 22.4477 6 23 6H25C25.5523 6 26 6.44772 26 7V27C26 27.5523 25.5523 28 25 28H23C22.4477 28 22 27.5523 22 27V7Z" stroke="#1E3050" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='vhtext'>
                                Light
                            </div>
                        </div>
                        <div className='vtholder'>
                            <div className='vhicon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M30 42H18" stroke="#1E3050" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24 42L24 34" stroke="#1E3050" stroke-linejoin="round"/>
                                <path d="M12 18H14C15.1046 18 16 18.8954 16 20V32C16 33.1046 16.8954 34 18 34H30C31.1046 34 32 33.1046 32 32V20C32 18.8954 32.8954 18 34 18H36" stroke="#1E3050" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 7C22 6.44772 22.4477 6 23 6H25C25.5523 6 26 6.44772 26 7V27C26 27.5523 25.5523 28 25 28H23C22.4477 28 22 27.5523 22 27V7Z" stroke="#1E3050" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='vhtext'>
                                Slim
                            </div>
                        </div>
                        <div className='vtholder'>
                            <div className='vhicon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M30 42H18" stroke="#1E3050" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24 42L24 34" stroke="#1E3050" stroke-linejoin="round"/>
                                <path d="M12 18H14C15.1046 18 16 18.8954 16 20V32C16 33.1046 16.8954 34 18 34H30C31.1046 34 32 33.1046 32 32V20C32 18.8954 32.8954 18 34 18H36" stroke="#1E3050" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 7C22 6.44772 22.4477 6 23 6H25C25.5523 6 26 6.44772 26 7V27C26 27.5523 25.5523 28 25 28H23C22.4477 28 22 27.5523 22 27V7Z" stroke="#1E3050" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='vhtext'>
                                Motion
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='icondetail'>
                <div className='idholder'>
                    <div className='ihtop'>
                        <div className='itheader'>
                            <div className='ihname'>
                                <div className='intype'>
                                    microphone-1-music-instruments
                                </div>
                                <div className='inbadge'>
                                    pro
                                </div>
                                <div className='inlink'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M6 10H14" stroke="#1E3050" stroke-width="2" stroke-linejoin="round"/>
                                    <path d="M12 15L14 15C16.7614 15 19 12.7614 19 10V10C19 7.23858 16.7614 5 14 5L12 5" stroke="#1E3050" stroke-width="2"/>
                                    <path d="M8 5L6 5C3.23857 5 0.999997 7.23858 0.999998 10V10C0.999999 12.7614 3.23858 15 6 15L8 15" stroke="#1E3050" stroke-width="2"/>
                                    </svg>
                                </div>
                            </div>
                            <div className='ihtype'>
                                instruments, communication, office, business, music
                            </div>
                            <div className='ihreport'>
                                Report
                            </div>
                        </div>
                    </div>
                    <div className='ihcenter'>
                        <div className='icstroke'>
                            <div className='istype'>
                                Stroke-weight
                            </div>
                            <div className='ispagination'>
                                <div className='ipsize'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="22" viewBox="0 0 2 22" fill="none">
                                    <path d="M1 1V21" stroke="#1E3050" stroke-width="0.5" stroke-linecap="round"/>
                                    </svg>
                                </div>
                                <div className='ipsize'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="22" viewBox="0 0 2 22" fill="none">
                                    <path d="M1 1V21" stroke="#1E3050" stroke-linecap="round"/>
                                    </svg>
                                </div>
                                <div className='ipsize'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="22" viewBox="0 0 2 22" fill="none">
                                    <path d="M1 1V21" stroke="#1E3050" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>

                                </div>
                                <div className='ipsize'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="22" viewBox="0 0 2 22" fill="none">
                                    <path d="M1 1V21" stroke="#1E3050" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                </div>
                                <div className='ipsize'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="24" viewBox="0 0 4 24" fill="none">
                                    <path d="M2 2V22" stroke="#1E3050" stroke-width="2.5" stroke-linecap="round"/>
                                    </svg>
                                </div>
                                <div className='ipsize'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="24" viewBox="0 0 4 24" fill="none">
                                    <path d="M2 2V22" stroke="#1E3050" stroke-width="3" stroke-linecap="round"/>
                                    </svg>
                                </div>  
                                <div className='ipsize'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="24" viewBox="0 0 4 24" fill="none">
                                    <path d="M2 2V22" stroke="#1E3050" stroke-width="3.5" stroke-linecap="round"/>
                                    </svg>
                                </div>
                                <div className='ipsize'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="24" viewBox="0 0 4 24" fill="none">
                                    <path d="M2 2V22" stroke="#1E3050" stroke-width="4" stroke-linecap="round"/>
                                    </svg>
                                </div>
                            </div>

                        </div>
                        <div className='icsize'>
                            <div className='istype'>
                                icon-size
                            </div>
                            <div className='ispagination'>
                                <div className='isp'><div className='ispn'>16</div></div>
                                <div className='isp'><div className='ispn'>24</div></div>
                                <div className='isp'><div className='ispn'>32</div></div>
                                <div className='isp'><div className='ispn'>48</div></div>
                                <div className='isp'><div className='ispn'>72</div></div>
                                <div className='isp'><div className='ispn'>96</div></div>
                            </div>
                        </div>
                        <div className='icformate'>
                            <div className='istype'>
                                file-format
                            </div>
                            <div className='ispagination'>
                                <div className='iftype'><div className='ift'>.svg</div></div>
                                <div className='iftype'><div className='ift'>.png</div></div>
                                <div className='iftype'><div className='ift'>.pdf</div></div>
                            </div>
                        </div>
                    </div>
                    <div className='ihbottom'>
                        <div className='add-download'>
                            
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M19 10L10 10M0.999999 10L10 10M10 10L10 1M10 10L10 19" stroke="#1E3050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            
                        </div>
                        <div className='add-download'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M3 8.6L9.99999 15M9.99999 15L17 8.6M9.99999 15V1" stroke="#1E3050" stroke-width="2"/>
                            <path d="M17 19H3" stroke="#1E3050" stroke-width="2"/>
                            </svg>
                        </div>
                        <div className='svgbutton'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 3H2V17C2 18.1046 2.89543 19 4 19H16V16" stroke="#1E3050" stroke-width="2" stroke-linejoin="round"/>
                            <path d="M5 16H18V4L15 1H5V16Z" stroke="#1E3050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> .svg
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View;