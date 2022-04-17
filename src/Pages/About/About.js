import React from 'react';
import profile from '../../images/profile/profile.jpg'

const About = () => {
    return (
        <div className='d-flex flex-column align-items-center text-center'>
            <img className='border border-2 border-primary rounded-circle my-3' style={{ width: '200px', height: '200px' }} src={profile} alt="" />
            <h2 className='fw-bold'>Shaminaj Towfika Disha</h2>
            <p className='fw-bold'>Web Developer</p>
            <p className='w-50'><small>Currently I am a student at Programming Hero, doing a course on web development. I want to be a full stack web developer in near future and get a full-time job in that field. I am also interested in AI and Machine Learning. I like to learn something new everyday. So, I will explore to as many things as I can. I also like to cook. So, I may actually be doing a catering job someday.</small></p>
        </div>
    );
};

export default About;