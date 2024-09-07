import React, { useState } from 'react'
import '../css/slideshow.css'
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import rightArrow from '../assets/rightArrow.svg'
import leftArrow from '../assets/leftArrow.svg'

const slides = [slide1, slide2, slide3];

function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slideshow">

            <img src={leftArrow} alt='leftArrow' className='nextSlide' onClick={prevSlide}/>

            <div className='slideImage'>
                {slides.map(url =>(
                    <img key={url} src={url} style={{translate: `${-100 * currentIndex}%` }}/>
                ))}
                
            </div>
            

            <img src={rightArrow} alt='rightArrow' className='nextSlide' onClick={nextSlide}/>

        </div>
    );
}

export default Slideshow;
