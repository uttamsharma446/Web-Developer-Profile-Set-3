import React from 'react'
import Footer from './Footer'
import Header from "./Header"
import cryptonews from "../Components/Images/cryptonews.54869ee3.png";
import BannerFTXNews from "../Components/Images/BannerFTXNews.d0cd974b.png";
import {logos} from "../Components/Data/Logos"
function Home() {
    console.log(logos)
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="container1">
                <div class="average-subText text-center" ></div>
                <div className="row">
                    <div className="col-lg-12 align-items-center">
                        <div className="lastFiveMinut inline-block m-3 small-box">
                        <p> 0.69 %</p>
                        <small>5 mins</small>

                        </div>
                        <div className="oneHour inline-block m-3 small-box">
                        <p> 1.56 %</p>
                        <small>1 Hour</small>
                        </div>
                        <div className="avg-commission inline-block m-3 large-box">
                        <span class="subText-heading color-gray">Best Price to Trade</span>
                         <p>₹ 38,01,820</p>
                        <small>Average BTC/INR net price including commission</small>
                        </div>
                        <div className="oneDay inline-block m-3 small-box">
                        <p>5.98 %</p>
                        <small>1 Day</small>
                        </div>
                        <div className="sevenDays inline-block m-3 small-box">

                        <p> 11.5 %</p>
                        <small>7 Days</small>
                        </div>


                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-12">

                        <img src={cryptonews} width="100%" />
                    </div>

                </div>
                {/* to show table */}
                <div className="row mt-5">
                    <div className="col-lg-12 table-responsive">
                        <table  style={{color:"white",fontSize:"1.3rem",fontWeight:"bold"}} className="table">
                            <thead>
                                <tr  style={{color:"#808288"}}>
                                    <th scope="col">#</th>
                                    <th scope="col">Platform</th>
                                    <th scope="col">Last Traded Price</th>
                                    <th scope="col">Buy / Sell Price</th>
                                    <th scope="col">Difference</th>
                                    <th scope="col">Savings</th>


                                </tr>
                            </thead>
                            <tbody>
                                {logos.map((d,index)=>{
                                    return <tr className="table-row">
                                        <td>{index+1}</td>
                                       <td><img src={d.logo} width="20px"/>{" "}<span>{d.name}</span></td>
                                       <td>₹ {d.lastTradePrice}</td>
                                       <td>₹ {d.buy}/ ₹ {d.sell}</td>
                                       <td>{d.diff} %</td>
                                       <td>₹ {d.Savings}</td>


                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* end of tables */}
                {/* ************************************************ */}
<div className="row mt-4">
    <div className="col-lg-12">
        <img src={BannerFTXNews} width="100%"/>
    </div>

</div>

            </div>
            <div className="footer">
                <Footer />

            </div>

        </>
    )
}

export default Home
