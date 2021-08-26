import React from 'react';

function WaveLine(props){
    return(
        <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg"  version="1.1" {...props}>
            <path 
                d="M0 433L13.7 423C27.3 413 54.7 393 82 384C109.3 375 136.7 377 163.8 393.5C191 410 218 441 245.2 447C272.3 453 299.7 434 327 433.8C354.3 433.7 381.7 452.3 409 459.3C436.3 466.3 463.7 461.7 491 450.7C518.3 439.7 545.7 422.3 573 422.5C600.3 422.7 627.7 440.3 654.8 432.2C682 424 709 390 736.2 391.3C763.3 392.7 790.7 429.3 818 427.8C845.3 426.3 872.7 386.7 886.3 366.8L900 347" 
                fill="none" 
                stroke="#06111C" 
                strokeWidth="40" 
                strokeLinecap="round" strokeLinejoin="miter">
            </path>
        </svg>

    );
}

export default WaveLine;