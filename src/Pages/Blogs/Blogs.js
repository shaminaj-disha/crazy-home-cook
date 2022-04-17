import React from 'react';

const Blogs = (props) => {
    const { question, answer } = props.blog;
    return (
        <div className='m-5 p-5 border border-2 rounded bg-info text-center'>
            <h2 className='py-5 fw-bold'>{question}</h2>
            <p><span className='fw-bold'>Answer:</span> {answer}</p>
        </div>
    );
};

export default Blogs;