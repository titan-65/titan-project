import React from 'react';
import { fetchEntries } from "../../../lib/contentfulAPI";
import Post from '../../Post'

const Portfolio = ({posts}) => {
    console.log(posts);
    return (
        <div className="rn-portfolio-area rn-section-gap bg_color--1" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title section-title--3 text-center mb--30">
                            <h2 className="title">Latest Project</h2>
                            {/*<p>There are many variations of passages of Lorem Ipsum available, <br/> but the*/}
                            {/*    majority have suffered alteration.</p>*/}
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/*{posts.map(post => {*/}
                    {/*    return (*/}
                    {/*        <Post title={post.fields.title} />*/}
                    {/*    )*/}
                    {/*})}*/}
                    {/*// <!-- Start Single Portfolio  -->*/}
                    {/*{posts.length > 0*/}
                    {/*    ? posts.map(post => {*/}
                    {/*        // console.log(post.fields.coverImage.fields.file.url)*/}
                    {/*         // return <Post date={date}*/}
                    {/*         //              author={author}*/}
                    {/*         //              slug={slug}*/}
                    {/*         //              title={title} content={content} coverImage={coverImage}/>*/}
                    {/*        return <Post author={post.fields.author.fields.name}/>*/}
                    {/*    }) : <p>No projects found</p>*/}
                    {/*}*/}

                    {/**/}


                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="view-more-btn mt--60 mt_sm--30 text-center">
                            <a className="rn-button-style--2 btn_solid" href="#">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export async function getStaticProps() {
//     const res = await fetchEntries()
//     const posts = await res.map(value => {
//         return value.fields
//     })
//
//     return {
//         props: {
//             posts
//         }
//     }
// }

export default Portfolio;
