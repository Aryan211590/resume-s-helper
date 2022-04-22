import React from 'react';
import './Questions.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Container } from "react-bootstrap";
import avta from './images/Avatar-01.png'
import avta1 from './images/Avatar-03.png'
import avta2 from './images/Avatar-02.png'
import avta3 from './images/Avatar-04.png'
import avta4 from './images/Avatar-05.png'
import avta5 from './images/Avatar-07.png'
import avta6 from './images/Avatar-10.png'
import avta7 from './images/Avatar-09.png'
import avta8 from './images/Captureqwer.PNG'

// Avatar-03
// import { AiFillStar } from "react-icons/ai";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const items = [
  <div className="scro" data-value="1">
    <div className="review">
      <img src={avta8} alt="" />
      <p>I tried a few of these websites but Resume's helper was the easiest to use. Plus it worked! 🔥 #resumehelper </p>
      <div className="pix">
        <div className="ramdfdf">
          <img src={avta} alt="" id="avtar" />
        </div>
        <p id="nameofreverw">Matt Jackson</p>
      </div>
    </div>
  </div>,
  <div className="scro" data-value="2">
    <div className="review">
      <img src={avta8} alt="" />
      <p>I signed up for Resume's helper and within 10 days 3 companies got back to me, including my current employer! 👏 #resumehelper </p>
      <div className="pix">
        <div className="ramdfdf">
          <img src={avta1} alt="" id="avtar" />
        </div>
        <p id="nameofreverw">Maria Hernandez</p>
      </div>
    </div>
  </div>,
  <div className="scro" data-value="1">
    <div className="review">
      <img src={avta8} alt="" />
      <p>Resume's helper was ideal for me because I struggle with computers. I just followed the instructions and ended up with a great resume :) #resumehelper </p>
      <div className="pix">
        <div className="ramdfdf">
          <img src={avta2} alt="" id="avtar" />
        </div>
        <p id="nameofreverw">Kevin Brooks</p>
      </div>
    </div>
  </div>,
  <div className="scro" data-value="2">
    <div className="review">
      <img src={avta8} alt="" />
      <p> It worked even better than I thought!!!!!! 😁 It’s day 12 and I’ve just had a job offer!!!! Thank you #resumehelper!!!!!   </p>
      <div className="pix">
        <div className="ramdfdf">
          <img src={avta3} alt="" id="avtar" />
        </div>
        <p id="nameofreverw">Eliza Murphy</p>
      </div>
    </div>
  </div>,
  <div className="scro" data-value="1">
    <div className="review">
      <img src={avta8} alt="" />
      <p>Really cool features that let you quickly build an a top-notch resume. Got 3 interviews lined up already!!!!! 💪 </p>
      <div className="pix">
        <div className="ramdfdf">
          <img src={avta4} alt="" id="avtar" />
        </div>
        <p id="nameofreverw">Kimberly Gonzalez</p>
      </div>
    </div>
  </div>,
  <div className="scro" data-value="2">
    <div className="review">
      <img src={avta8} alt="" />
      <p>ready!!!!! 💪avatar Brian Martin Signed up for the 7-day plan for just $1.95! 1st resume since college and was so easy! Tips and examples make it easy 😏 </p>
      <div className="pix">
        <div className="ramdfdf">
          <img src={avta5} alt="" id="avtar" />
        </div>
        <p id="nameofreverw">Brian Martin</p>
      </div>
    </div>
  </div>,
  <div className="scro" data-value="2">
    <div className="review">
      <img src={avta8} alt="" />
      <p>Just followed the administrative assistant resume example and the instructions. Start my new job on Wednesday!!!!!! Would recommend #resumehelper
      </p>
      <div className="pix">
        <div className="ramdfdf">
          <img src={avta6} alt="" id="avtar" />
        </div>
        <p id="nameofreverw">Jeff Campbell</p>
      </div>
    </div>
  </div>,
  <div className="scro" data-value="2">
    <div className="review">
      <img src={avta8} alt="" />
      <p>Feeling proud of my #Resume'shelper resume! Didn’t take long but looks like a professional has created it! :) </p>
      <div className="pix">
        <div className="ramdfdf">
          <img src={avta7} alt="" id="avtar" />
        </div>
        <p id="nameofreverw">Lauren Scott</p>
      </div>
    </div>
  </div>,
];
const Questions = () => {
  return (
    <>
      <div className="section_10">
        <h2 className='text-center' id="dskfhjsd">Success stories from satisfied customers</h2>
        <p className='Based'>Based on <b> 16,786 Reviews</b></p>
        <Container>
          <AliceCarousel
             infinite
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={1000}
            animationDuration={1000}
            // animationType="fadeout"
            items={items}
            responsive={responsive}
          />
          {/* <Carousel variant="dark">
            <Carousel.Item>
              <div className="reviews">
                <b>Laxu Verma</b>
                <p>It’s a big task to create a right resume but ResumesHelper <br /> made it too easy for me. With ResumesHelper I have actually been<br /> able to create a resume that I actually wanted.  <br></br>
                  < AiFillStar /> < AiFillStar /> < AiFillStar /> < AiFillStar /> < AiFillStar />
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="reviews">
                <b>Pardeep Verma</b>
                <p>Amazing!!! I got results in such a short period of time.<br /> Within 5 days 3 companies got back to me. <br />I must say impressive resume designs.
                  <br /><br />
                  < AiFillStar /> < AiFillStar /> < AiFillStar /> < AiFillStar /> < AiFillStar />
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="reviews">
                <b>Amit </b>
                <p>People like me who struggle with computers, ResumesHelper<br /> will not at all hurt your sentiments.<br /> It is too easy to use, you just have to follow the <br />instructions. I made the resume in just 5 minutes.
                  <br></br>
                  < AiFillStar /> < AiFillStar /> < AiFillStar /> < AiFillStar /> < AiFillStar />
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="reviews">
                <b>Khusboo</b>
                <p>I did not imagine it would help bring such great outputs.<br /> It has totally got all the latest features <br /> + it's too easy to use. Great time saver.

                  <br></br>
                  < AiFillStar /> < AiFillStar /> < AiFillStar /> < AiFillStar /> < AiFillStar />
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="reviews">
                <b>Gurpreet</b>
                <p>It has saved my time of editing and formatting. I made the<br /> resume in just a few clicks and I could <br />actually focus on job opportunities laid in front of me.<br /> Totally recommended
                  <br></br>
                  < AiFillStar /> < AiFillStar /> < AiFillStar /> < AiFillStar /> < AiFillStar />
                </p>
              </div>
            </Carousel.Item>
          </Carousel> */}
        </Container>
      </div>
    </>
  );
};

export default Questions;
