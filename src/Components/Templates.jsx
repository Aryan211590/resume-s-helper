import React from 'react'
import Carousel from "react-multi-carousel";
import { Link } from 'react-router-dom';
import temp1 from './images/temp1.png'
import temp2 from './images/temp2.png'
import temp3 from './images/temp3.png'
import temp4 from './images/temp4.png'
import temp5 from './images/temp5.png'
import temp6 from './images/temp6.png'
import temp7 from './images/temp7.png'
const Templates = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8,
            margin: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.7,

        }
    };
    return (
        <>
            <div className="templatesdiv">
                <Carousel responsive={responsive} >
                    <div ><img src={temp1} alt="Resume_image" srcSet="" /> <p><a href="nothing">use Template</a></p></div>
                    <div className="templatessec" ><img src={temp2} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link> </div>
                    <div className="templatessec" ><img src={temp3} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link> </div>
                    <div className="templatessec" ><img src={temp4} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link> </div>
                    <div className="templatessec" ><img src={temp5} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link> </div>
                    <div className="templatessec" ><img src={temp6} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link> </div>
                    <div className="templatessec" ><img src={temp7} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link> </div>
                    <div className="templatessec" ><img src={temp1} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link> </div>
                    <div className="templatessec" ><img src={temp2} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp3} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp4} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp5} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp6} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp7} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp1} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp2} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec"  ><img src={temp3} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec"  ><img src={temp4} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp5} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp6} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp7} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp1} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp2} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp3} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp4} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp5} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp6} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                    <div className="templatessec" ><img src={temp7} alt="Resume_image" srcSet="" /> <Link to="/editor"><p> Create my resume</p></Link></div>
                </Carousel>
            </div>
        </>
    )
}

export default Templates