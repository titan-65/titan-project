import React from 'react';

const Slider = () => {
    return (
        <div class="rn-slider-area" id="home">
            {/*// <!-- Start Single Slide  -->*/}
            <div class="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image"
                 style={{backgroundImage: `url('https://images.unsplash.com/photo-1516575355332-d2934104e253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80')`}}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="inner text-left" style={{color: 'white'}}>
                                <span>Freelance Developer</span>
                                <h1 class="title">Hello, I’m <span>Vantol.</span><span> Welcome</span> to <span>Project Titan.</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!-- End Single Slide  -->*/}
            </div>
        </div>
    );
};

export default Slider;
