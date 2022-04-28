import React, { useEffect, useState } from 'react';
import './Home.css'
import logo from '../../img/kisspng-finchcocks-duntons-photography-photographer-portra-vector-slr-camera-5aa2a4d1bde079.1329631715206084657778.png'
import { useNavigate, Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import img1 from '../../img/pexels-egor-kamelev-927497.jpg';
import img2 from '../../img/pexels-janko-ferlic-1068554.jpg';
import img3 from '../../img/pexels-jeremy-bishop-2422915.jpg';
import img4 from '../../img/pexels-pixabay-247431.jpg';
import img5 from '../../img/pexels-twilight-kenya-lions.jpg';
import travelVid from '../../vid/TRAVEL MEMORIES - Short Cinematic film.mp4'
import Shop from '../Shop/Shop';

const Home = () => {
    let navigate = useNavigate();
    const toShop = () => {
        navigate('/shop');
    }
    return (
        <div id='home'>
            <div className="container">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid carousel-img"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Green Reptile</h3>
                            <p>In the depths of coast of africa, All snake eyes on me</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid carousel-img"
                            src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Grizzly Bear</h3>
                            <p>To the ruins of mounts, Grizzly Bear is here to give you a hug</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid carousel-img"
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Pod of Dolphins</h3>
                            <p>Floating with the tides of Indian Ocean, Dolphins do amaze me</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid carousel-img"
                            src={img4}
                            alt="Forth slide"
                        />

                        <Carousel.Caption>
                            <h3>Elephant in Water</h3>
                            <p>In the depths of africa, With danger roaming all around a true deadly experience it was.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid carousel-img"
                            src={img5}
                            alt="Grass and Roaring"
                        />

                        <Carousel.Caption>
                            <h3>Grass and Roaring</h3>
                            <p>The King of jungle, Just being the King it was meant to be</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='row mt-5 p-5 align-items-center'>
                <div className='col-sm-12 col-md-12 col-lg-6 order-lg-first column-first mt-5'>
                    <h1 className='text-start'>Nature Never Goes Out Of Style</h1>
                    <p className='text-start'>Photography is the art of frozen time. The ability to store emotion and feelings within a frame. Taking an image, freezing a moment, reveals how rich reality truly is. With all that I don't trust words. I trust pictures.</p>
                    <div className='column-first-btn'>
                        <button onClick={() => toShop()} className='button-33'>To Shop</button>
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6 order-first order-xs-first column-second text-end'>
                    <img src={logo} alt="" className='img-fluid' width="600px" />
                </div>
            </div>
            <div>
                <h1 className='text-center shop-header container'>Lore About Me</h1>
                <div className='row mt-5 px-3 aboutMe'>
                    <div className="col-lg-6 col-md-12 col-sm-12 fs-4">
                        <p>
                            Hi i am <Link className='AboutLink' to='/about'><span className='fs-3' style={{ color: "teal" }}>Sajid Shahriar</span> </Link> Known as <Link className='AboutLink' to='/about'><span className='fs-3' style={{ color: "teal" }}>Shriiar</span> </Link>. I am an American photographer and artist, based in the California Central Coast region. My photographs landscape, lifestyle, surf, outdoor, and travel subjects. Photojournalistic approach to make editorial projects, using multiple media is my passion. I use natural light to capture humanizing moments.Burkard specializes in photographing in cold places, including in Iceland, Norway, the Faroe Islands, India, Cuba, New Zealand, Russia, Switzerland, and Italy. I have been named a top travel influencer.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12"></div>
                    <div className="col-lg-6 col-md-12 col-sm-12"></div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <video class="mt-3" src={travelVid}
                            autoPlay loop muted></video>
                    </div>
                </div>
            </div>
            <Shop></Shop>
        </div>
    );
};

export default Home;