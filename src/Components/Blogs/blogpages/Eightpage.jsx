import React from 'react';
import '../blogpages/Firstpage.css'
import blogfirst from './Blogimages/blogfirst1.jpg'
import { Container } from 'react-bootstrap';
import Header from '../../Header';
import Footer from '../../Footer';
const Eightpage = () => {
  return (
    <>
    <Header/>
      <div className="gobacklink">
      </div>
      <Container>

        <article>
          <div className="firstblogpageheading text-center">
            <h1 className='mb-5' title='Resume to Perfection'> Easy Ways to Shorten a Resume to Perfection </h1>
            <a className="started mt-5" href="dfkahsdkfjh"> CREATE YOUR RESUME NOW  </a>
            <div className="blog-image mt-5 text-start">
              <img src={blogfirst} alt="" srcSet="" />
              <p className='mt-4'>It's simple, the more information you put in, the more difficult it gets to read the whole and it gets even more difficult to highlight your top skills and achievements. You all know, no recruiter is ever immune to getting along well with long and bulky resumes.
              </p>
              <br></br>
              <b className='mb-3'>Want to convey more with less on your resume?
              </b>
              <br></br>
              <p className='p-3'>We understand the necessity of short resumes that serve the maximum purpose. It is not always necessary to include everything in there, however, whatever piece of information you leave out, you can always incorporate that in your cover letter or use it at the time of the hiring process. Read further to know easy ways to cut your resume short very efficiently.
              </p>
              <h2>Easy Ways to Shorten your Resume & Make it Stand Out</h2>
              <b> 1. Know that you are sending your resume to recruiters, not delivery agents.</b>
              <p className='p-3' >Don’t mention your full address. No one needs to know where exactly you live. They want to hire you and not send you some parcels. Also if you belong to the same city as in which you are applying then the name of the city and state would be enough. If by chance you happen to live in a different city you can rather consider skipping out mentioning city and state. Whoever would be interested in knowing may look up your previous job location.
              </p>
              <b>
                2. Make your resume objective very clear.
              </b>
              <p className='p-3'>
                Some of the resume objectives sound like some “My Best Friend” essays. Just run to the point in this case and make them believe that you are a strong candidate with brilliant soft and hard skills, as someone who is able to articulate well.
              </p>
              <b> 3.Show what you achieved, not what your job looked like.   </b>
              <p className='p-3'>
                Convert job descriptions into what you accomplished from your job. It’s time to highlight what you achieved and how you gave fruitful outputs to the company. Your experience shall totally look like what you achieved and not something like an ad post for a job that lists roles and responsibilities.

              </p>
              <b> 4.Merge sections where possible and use bullet points. </b>
              <p className='p-3'>
                <ul>
                  <li>Merge sections like interests, hobbies, and certificates.
                  </li>
                  <li>You can use titles like “Additional Information” or “Awards and Achievements” etc.
                  </li>
                  <li>Using bullet points is also a very effective way to communicate what you want to in a presentable manner.
                  </li>
                  <li>Write only the details that can possibly make a huge difference.
                  </li>
                </ul>
              </p>
              <b> 5. Choose active voice over passive voice.</b>
              <div className="lted">
            
              <p className='pl-2'>
              Use active voice instead of passive voice. We will tell you why. Passive sentences are sometimes confusing because they are wordier. 
              </p>
              <p className='p-2'>
              Let’s consider an example - 

                </p>
                <p className='p-2'>
                Active voice - I submitted the resume.

                </p>
                <p className='p-2'>
                Passive voice - The resume was submitted by me. 

                </p>
                <p className='p-2'>
                You can see the difference, active sentence is to the point. 
                </p>
                <p>When you are using an active voice, you are at the centre of action which might help you reflect on your achievements better. 
</p>
<p>Also make sure that you don’t use overused words like “managed”, “ responsible for” etc, you can try using words like “acquired”, “administered”.</p>
<p>The bottom line is to stick to 1 page long resumes and if at times it gets too necessary to put in some information you can just go for 2 pages long resumes but never more than that. </p>
              </div>
            </div>

          </div>
        </article>
      </Container>
      <Footer/>
    </>
  );
};

export default Eightpage;
