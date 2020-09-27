import React, { Component, Fragment } from 'react'
import Nav1 from './components/nav/nav'
import mobile from './assets/img/juno-mobile-app@3x.png'
import './App.css'
import email from './assets/img/email.svg'
import Button1 from './components/button/button'
import flag from './assets/img/createaccount-homeaddress-flag@3x.png'
import apple from './assets/img/applepay@3x.png'
import google from './assets/img/googleplay@3x.png'
import company1 from './assets/img/sequioa-image@3x.png'
import company2 from './assets/img/polychain-capital@3x.png'
import company3 from './assets/img/consensys-logo@3x.png'
import percent from './assets/img/juno-apy-215.svg'
import card1 from './assets/img/juno-black-card@3x.png'
import card2 from './assets/img/juno-plus@3x.png'
import card3 from './assets/img/juno-basic@3x.png'
export default class App extends Component {
  constructor(props){
    super()
    this.state={
      scroll:false,
      nav:'nav1'
    }
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.scroll !== true) {
          this.setState({ scroll: true , nav:'nav2' });
        }
      } else {
        if (this.state.scroll !== false) {
          this.setState({ scroll: false, nav:'nav1' });
        }
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Nav1 navclassname={this.state.nav}/>
        <div className='container'>
          <div>
            <h1 className='heading'>The Most Powerful<br/>Checking Account</h1>
            <div>
              <h2 className='heading2'>Our checking account gives you higher returns<br/>
                 than a savings account with no hidden fees.</h2>
              </div>
              {/* inpput type style here  */}
              <div className='input_container'>
                <div>
                  <img src={email} alt='email pic' className='email_pic' />
                  </div>
                  <input type='text' placeholder='Enter Email Address' className='email_input' />
                  <div>
                    </div>
                    <Button1 classnamevalue='join_now' buttonvalue='Join Now'/>
                    <div>
                      </div>
                </div>
              {/* end */}
              {/* start of an flag */}
              <div style={{display:'flex'}}>
              <div>
                <img src={flag} alt='flag'className='flag' />
                </div>
                <div>
                  <p className='flag_quotes'>279 spots left for Priority Access</p>
                  </div>
                </div>
              {/* end */}
              {/* start of apple and google */}
              <div style={{display:'flex',marginTop:'1.5em'}}>
                <img src={google} alt='google_pic' className='google_pic'/>
                <img src={apple} alt='apple_pic' className='apple_pic' />
                </div>
              {/* end */}
            </div>
            <div>
              <img src={mobile} alt="mobile pic" className='mobile_pic'/>
              </div>
          </div>
          {/* end */}
          {/* display of company */}
          <section style={ { marginTop:'1em' }}>
            <center><h3 className='heading3'>BACKED BY THE BEST</h3></center>
            <div className='company_container'>
              <img src={company1} alt='company1_logo' className='company1'/>
              <img src={company2} alt='company2_logo' className='company2'/>
              <img src={company3} alt='company3_logo' className='company3'/>
              </div>
            </section>
            {/* end */}
            {/* start of 3rd section 2.15 %  */}
            <section>
              <div className='conatiner2'>
                <div>
                  <h2 className='heading4'>Start saving for a rainy day fund</h2>
                  <h1 className='heading5'>Use Our Checking Account to <br/> Achieve Your Financial Goals</h1>
                  <p className='paragraph1'>With the latest Federal rate cut, the largest banks are offering close to 0% APY on <br/>their checking and savings accounts. OnJuno checking will earn you more than <br/>20x the national average*. Deposits up to $250,000 are FDIC insured through our<br/>banking partner Evolve Bank and Trust. Grow your idle money faster with our<br/>checking account and start saving towards a rainy day fund, big expense, or<br/> vacation.</p>
                  </div>
                  {/* 2.15 percent image */}
                  <div>
                    <img src={percent} alt='2.15% Bonus rates on deposits' className='percent_img'/>
                    </div>
                    {/* end */}
                </div>
              </section>
            {/* end */}
            {/* start for 4th section */}
            <section>
              <div className='container3'>
              <center><div>
                <h1 className='heading6'>Sign up early to save more</h1>
                <h2 className='heading7'>Depending on the level of your checking account, you’ll earn <br/> between 1.15%<sup>3</sup> to 2.15%<sup>1</sup> bonus rate.</h2>
              </div></center>
              {/* end */}
              </div>
              {/* start of cards */}
              <div className='card-container'>
                {/* card1 */}
                <div className='card-div1'>
                <div style={{backgroundColor:'#EEFCDE',height:'19em'}}>
                  <center><img src={card1} alt='card 1' className='card1'/>        
                    <h3 className='metal'>METAL</h3>
                    <h1 className='metal_percent'>2.15%<sup style={{color:'#a0a0a0',fontSize:'0.5em'}}>1</sup></h1>
                    <div className='metal_container'>
                    <div className='metal_div'>5%</div><span className='metal_cashback'>cash back</span>
                    </div>
                    </center>
                    {/* end */}
                    <center>
                      <div className='number-container'>
                        <div style={{marginRight:'4em'}}><span style={{color:'#00a769',fontSize:'1.2em',fontWeight:'700'}}>2222</span>/<span>2500</span> <span style={{color:'#a0a0a0'}}>spots</span></div>
                        <div><span style={{fontSize:'0.8em'}}>278</span><span style={{color:'#a0a0a0',fontSize:'0.8em'}}> spots left</span></div>
                        </div>
                        <div style={{position:'relative',bottom:'4.4em'}}>
                        <div style={{height:'0.6em',backgroundColor:'#F0F0F0', marginRight:'1.8em', marginLeft:'1.8em',borderRadius:'1em'}}>
                          <div style={{height:'0.6em',boxShadow:'0px 0px 1px 1px rgb(0,0,0,0.1)',backgroundColor:'#00a769', marginRight:'2em',borderRadius:'1em'}}>
                            </div>
                            </div>
                            <Button1 classnamevalue='card_button1' buttonvalue='Sign Up Now'/>
                            <div style={{borderBottom:'0.1em solid #d3d3d3',marginTop:'1.5em'}}></div>
                        <div>
                      <h3 style={{marginRight:'0.5em',position:'relative',right:'5em',letterSpacing:'0.4em', marginTop:'2em',color:'#d0d0d0'}}>INCLUDES</h3>
                      <ul style={{top:'1em',position: 'relative'}}>
                        <li><svg id='check_icon1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain" data-v-5602b450="">
                          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path>
                          </svg><span className='list_char1'>Charcoal Black Metal Card</span></li>   
                        <li>
                          <svg id='check_icon2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain" data-v-5602b450="">
                          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path>
                          </svg><span className='list_char2'>2.15%<sup>1</sup> Bonus Rate Checking Account</span>
                          </li>
                          <li><svg id='check_icon3' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain" data-v-5602b450="">
                          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path>
                          </svg><span className='list_char3'>5% Cash back on brands you love</span></li>   
                          <li><svg id='check_icon4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain" data-v-5602b450="">
                          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path>
                          </svg><span className='list_char4'>Free Cash Withdrawals</span></li>  
                          <li><svg id='check_icon5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain" data-v-5602b450="">
                          <path stroke="#00A86B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path>
                          </svg><span className='list_char5'>Phone & Chat Support</span></li>        
                      </ul>
                      {/* end */}
                      <div className='fund'>
                        <p className='fund1'>Fund your account with a minimum opening<br/>deposit of <span style={{color:'black',fontWeight:'500'}}>$1000.</span> 3 additional free ATM<br/>withdrawals per month from out of network<br/>ATMs.</p>
                        </div>
                    </div>
                        </div>
                    </center>               
                    </div>
                  </div>
                  {/* end */}

                  {/* card 2 */}
                  <div className='card-div2'>
                <div style={{backgroundColor:'#F7F6F6',height:'19em'}}>
                  <center><img src={card2} alt='card 2' className='card2'/>        
                    <h3 className='premium'>PREMIUM</h3>
                    <h1 className='premium_percent'>1.65%<sup style={{color:'#a0a0a0',fontSize:'0.5em'}}>2</sup></h1>
                    <div className='metal_container'>
                    <div className='premium_div'>4%</div><span className='metal_cashback'>cash back</span>
                    </div>
                    </center>
                    {/* end */}
                    <center>
                      <div className='number-container'>
                        <div style={{marginRight:'7em'}}><span>2000</span> <span style={{color:'#a0a0a0'}}>spots</span></div>
                        <div><span style={{fontSize:'0.8em'}}>2000</span><span style={{color:'#a0a0a0',fontSize:'0.8em'}}> spots left</span></div>
                        </div>
                        <div style={{position:'relative',bottom:'4.4em'}}>
                        <div style={{height:'0.6em',backgroundColor:'#F0F0F0', marginRight:'1.8em', marginLeft:'1.8em',borderRadius:'1em'}}>                          
                            </div>
                            <Button1 classnamevalue='card_button2' buttonvalue='Up Next'/>
                            <div style={{borderBottom:'0.1em solid #d3d3d3',marginTop:'1.5em'}}></div>
                        <div>
                      <h3 style={{marginRight:'0.5em',position:'relative',right:'5em',letterSpacing:'0.4em', marginTop:'2em',color:'#d0d0d0'}}>INCLUDES</h3>
                      <ul style={{top:'1em',position: 'relative'}}>
                        <li><svg id='premium_check_icon1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain" data-v-5602b450="">
                          <path stroke="#b2b2b2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path>
                          </svg><span className='premium_list_char1'>Free Debit Card</span></li>   
                        <li>
                          <svg id='check_icon2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain" data-v-5602b450="">
                          <path stroke="#b2b2b2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path>
                          </svg><span className='list_char2'>1.65%<sup>2</sup> Bonus Rate Checking Account</span>
                          </li>
                          <li><svg id='check_icon3' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain" data-v-5602b450="">
                          <path stroke="#b2b2b2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path>
                          </svg><span className='list_char3'>4% Cash back on brands you love</span></li>   
                          <li><svg id='check_icon4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain" data-v-5602b450="">
                          <path stroke="#b2b2b2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path>
                          </svg><span className='list_char4'>Free Cash Withdrawals</span></li>  
                          <li><svg id='check_icon5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain" data-v-5602b450="">
                          <path stroke="#b2b2b2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path>
                          </svg><span className='list_char5'>Phone & Chat Support</span></li>        
                      </ul>
                      {/* end */}
                      <div className='fund'>
                        <p className='fund1'>Fund your account with a minimum opening<br/>deposit of <span style={{color:'black',fontWeight:'500'}}>$500.</span> 2 additional free ATM<br/>withdrawals per month from out of network<br/>ATMs.</p>
                        </div>
                    </div>
                        </div>
                    </center>               
                    </div>
                  </div>
                  {/* end */}
                    {/* start 3rd card */}
                    <div className='card-div3'>
                <div style={{backgroundColor:'#F7F6F6',height:'19em'}}>
                  <center><img src={card3} alt='card 3' className='card2'/>        
                    <h3 className='premium'>BASIC</h3>
                    <h1 className='premium_percent'>1.15%<sup style={{color:'#a0a0a0',fontSize:'0.5em'}}>3</sup></h1>
                    <div className='metal_container'>
                    <div className='premium_div'>3%</div><span className='metal_cashback'>cash back</span>
                    </div>
                    </center>
                    {/* end */}
                    <center>
                      <div className='number-container'>
                        <div style={{marginRight:'7em'}}><span>10000</span> <span style={{color:'#a0a0a0'}}>spots</span></div>
                        <div><span style={{fontSize:'0.8em'}}>10000</span><span style={{color:'#a0a0a0',fontSize:'0.8em'}}> spots left</span></div>
                        </div>
                        <div style={{position:'relative',bottom:'4.4em'}}>
                        <div style={{height:'0.6em',backgroundColor:'#F0F0F0', marginRight:'1.8em', marginLeft:'1.8em',borderRadius:'1em'}}>                          
                            </div>
                            <Button1 classnamevalue='card_button3' buttonvalue='Coming Soon'/>
                            <div style={{borderBottom:'0.1em solid #d3d3d3',marginTop:'1.5em'}}></div>
                        <div>
                      <h3 style={{marginRight:'0.5em',position:'relative',right:'5em',letterSpacing:'0.4em', marginTop:'2em',color:'#d0d0d0'}}>INCLUDES</h3>
                      <ul style={{top:'1em',position: 'relative'}}>
                        <li><svg id='premium_check_icon1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain" data-v-5602b450="">
                          <path stroke="#b2b2b2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path>
                          </svg><span className='premium_list_char1'>Free Debit Card</span></li>   
                        <li>
                          <svg id='check_icon2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain" data-v-5602b450="">
                          <path stroke="#b2b2b2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path>
                          </svg><span className='list_char2'>1.15%<sup>3</sup> Bonus Rate Checking Account</span>
                          </li>
                          <li><svg id='check_icon3' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain" data-v-5602b450="">
                          <path stroke="#b2b2b2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path>
                          </svg><span className='list_char3'>3% Cash back on brands you love</span></li>   
                          <li><svg id='check_icon4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain" data-v-5602b450="">
                          <path stroke="#b2b2b2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path>
                          </svg><span className='list_char4'>Free Cash Withdrawals</span></li>  
                          <li><svg id='check_icon5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" className="w-045 h-0381 object-contain" data-v-5602b450="">
                          <path stroke="#b2b2b2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path>
                          </svg><span className='list_char5'>Phone & Chat Support</span></li>        
                      </ul>
                      {/* end */}
                      <div className='fund'>
                        <p className='fund1'>Fund your account with a minimum opening<br/>deposit of <span style={{color:'black',fontWeight:'500'}}>$0.</span> </p>
                        </div>
                    </div>
                        </div>
                    </center>               
                    </div>
                  </div> 
                      {/* end */}
                </div>
                <br/>
                <br/>
                <br/>
              {/* end */}
              </section>
              {/* end */}
      </Fragment>
    )
  }
}
