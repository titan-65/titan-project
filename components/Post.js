import React from 'react';

const Post = ({author, title, content, slug, coverImage, date, url}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
            <div className="portfolio text-center">
                <div className="thumbnail-inner">
                    <div className="thumbnail image-8" style={{backgroundImage: `url{'${url}'}`}}></div>
                    <div className="bg-blr-image"></div>
                </div>
                <div className="content">
                    <div className="inner">
                        <p>Development</p>
                        <h4><a href="portfolio-details.html">{title}</a>
                        </h4>
                        <div className="portfolio-button">
                            <a className="rn-btn" href="portfolio-details.html">Case Study</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
