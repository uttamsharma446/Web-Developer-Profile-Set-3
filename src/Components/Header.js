import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap'
import logo1 from "../Components/Images/HODLINFO.8f78fc06.png";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import data, { assests, currency } from "../Components/Data/data";
import TelegramLogo from "../Components/Images/tele-icon.png";
function Header() {
   var date=new Date();
    const [countDownTimer, setCountDownTimer] = useState(20);
    const currencyStyle = {
        color: "red",
        border: "1px solid red"
    }
    
    useEffect(() => {
       
       setTimeout(()=>{
         
        
       },1000)
       
      });

    const  handleSwitchBTN=(e)=>{
        var switch1=document.querySelector("#switch");
console.log(e)
        var mainStyle=document.querySelector("body");
        mainStyle.style.backgroundColor="white"
        var table=document.querySelector("table");
        table.style.color="#000";
        table.style.border="none"
        var avgCom=document.querySelector(".avg-commission p").style.color="#0F0F48";
        var dropToggle=document.querySelectorAll(".drop-toggle");
         for(var i=0;i<dropToggle.length;i++)
         {
             dropToggle[i].style.backgroundColor="#fff";
             dropToggle[i].style.color="#000";
         }

    }
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const toggle1 = () => setDropdownOpen1(prevState => !prevState);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);
    return (
        <div style={{ padding: "20px 30px 0px 30px" }} >
            <Row>
                <Col xs="12" sm="7" md="5" lg="4" className='mt-3'>
                    <img src={logo1} width="70%" style={{ padding: "10px" }} />
                    <p className="col-12 text-center-xs" style={{ fontFamily: "'Oswald', sans-serif", marginTop: "-18px", opacity: "0.8", fontSize: "18px", color: "gray" }}>Powered By <a className="footer-text-link" rel="nofollow" target="_blank" style={{ color: "#3dc6c1" }} href="https://www.finstreet.in/"> Finstreet</a> </p>

                </Col>
                <Col xs="12" sm="7" md="5" lg="4" className="text-center mt-5">
                    <Dropdown toggle={toggle1} isOpen={dropdownOpen1} className="d-inline  drop-down">
                        <DropdownToggle className="drop-toggle" caret>
                            INR
                   </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem >INR</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown toggle={toggle2} isOpen={dropdownOpen2} className="d-inline drop-down ">
                        <DropdownToggle className="drop-toggle" caret>
                            BTC
                   </DropdownToggle>
                        <DropdownMenu>
                            {Object.keys(assests).map(ast => {
                                return <DropdownItem>{ast}</DropdownItem>
                            })}
                        </DropdownMenu>
                    </Dropdown >
                    <div className="btn-group ml-4 ">
                        <a target="_blank" href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn" type="button" aria-haspopup="true" aria-expanded="false" className="header-button drop-toggle btn btn-secondary">BUY BTC</a>
                    </div>

                </Col>
                <Col xs="12" sm="7" md="5" lg="4" className="text-center mt-3">
                    <div className="d-inline-flex mr-4  " >
                        <div className="progress-bar-wrapper ">
                            <CircularProgressbar
                           
                                styles={
                                    buildStyles({
                                       
                                        
                                        rotation: 0.25,

                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'butt',

                                        // Text size
                                        textSize: '2rem',
                                        // How long animation takes to go from one percentage to another, in seconds
                                        pathTransitionDuration: 0.5,

                                        // Can specify path transition in more detail, or remove it entirely
                                        // pathTransition: 'none',

                                        // Colors
                                        pathColor: `#3dc6c1`,
                                        textColor: '#3dc6c1',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#3e98c7',
                                    })
                                }
                                value={parseFloat(countDownTimer * 100 / 60.0)} text={`${countDownTimer}`} />

                        </div>
                        <div className={"d-flex telegram-logo-text header-telegram-button btn align-items-center pointer ml-4 color-white"}>

                            <div style={{ backgroundColor: "#3dc6c1" }} className="d-inline-block"><img src={TelegramLogo} className="telegram-logo" /></div>
                            <div style={{ backgroundColor: "#3dc6c1" }} className="text-nowrap d-inline-block  color-white">Connect Telegram</div>
                        </div> <br/>
                    
                    </div>
                    <div className="m-3">
                     <label class="switch">
                        <input onChange={
                            handleSwitchBTN
                        } id="switch" type="checkbox"/>
                            <span class="slider round"></span>
                     </label>
                     </div>
                   
                </Col>
            </Row>

        </div>
    )


}

export default Header
