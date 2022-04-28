import React from 'react';
import './AboutMe.css';
import aboutMePic from '../../img/rsz_1alejandro-tocornal-oytn8p5kawa-unsplash.jpg';
import aboutMevid from '../../vid/TRAVEL MEMORIES - Short Cinematic film.mp4';

const AboutMe = () => {
    return (
        <div className='row container mx-auto align-items-center'>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <p className='fs-4'>
                    Hi i am <span className='fs-3' style={{ color: "teal" }}>Sajid Shahriar</span>, Known as <span className='fs-3' style={{ color: "teal" }}>Shriiar</span>. I am an American photographer and artist, based in the California Central Coast region. My photographs landscape, lifestyle, surf, outdoor, and travel subjects. Photojournalistic approach to make editorial projects, using multiple media is my passion. I use natural light to capture humanizing moments.Burkard specializes in photographing in cold places, including in Iceland, Norway, the Faroe Islands, India, Cuba, New Zealand, Russia, Switzerland, and Italy. I have been named a top travel influencer.
                </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <img src={aboutMePic} width='' className='img-fluid' alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 aboutMe">
                <video class="mt-3" src={aboutMevid}
                    autoPlay loop muted></video>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <p className='fs-4'>In the early years of mine career, I have worked as a freelance photographer on both editorial and commercial projects, as well as having work published on over 35 national and international covers of magazines including Surfer Magazine, The New Yorker. In all my life i wanted to serve people by bringing nature up close to them. The raw beauty of nature motivates me. Looking back all these years I think i would just hang a lil bit more and serve you guys the best i can. Thamk You.</p>
            </div>
        </div>
    );
};

export default AboutMe;