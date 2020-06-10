import React, { useState, useEffect } from 'react';
import { Typography} from '@material-ui/core';
import { ContentContainer } from '../../Layout'
import Tags from './BlogTags';
import Selector from '../../Common/Selector';

const DEFAULT_TAG = 'techno';
const BLOG_ENDPOINT = '/blog/posts/tags/'

export default (props) => {

    const [blogPosts, setBlogPosts] = useState({entries: []});
    const [error, setError] = useState();
    const [currentTag, setCurrentTag] = useState(DEFAULT_TAG);

    let setBlogFailError = () => {
        setError('Unable to retrieve blog posts.  Please try again momentarily or contact the administrator.');
    }

    useEffect(() => {
        async function retrieveBlogPosts(){
            const res = await fetch(BLOG_ENDPOINT + `${currentTag.toLowerCase()}`, {
                method: 'GET'
            }).catch((err) => {
                console.error(err);
                setBlogFailError();
            });
            if(res){
                res.json().then((json) => {
                    if(json.message){
                        console.log(json.message);
                        setBlogFailError();
                    } else {
                        setBlogPosts({entries: JSON.parse(json.postEntries)});
                    }
                });
            };
        }
        retrieveBlogPosts();
    }, [currentTag]);

    let tagSelected = (tag) => {
        setCurrentTag(tag);
    }

    return (
        <>
            <ContentContainer title='LATEST BLOG POSTS'>
                <Typography paragraph variant='caption'>
                    Follow Rodan and discover more music on the <a href='https://www.night-beats.com/'>Night Beats</a> blog.
                </Typography>
                <Typography variant='caption'>
                    <Selector items={Tags} default={'Techno'} handleSelect={tagSelected} descriptor={'Select a genre'}></Selector>
                </Typography>
            </ContentContainer>
            {   
                blogPosts && blogPosts.entries && blogPosts.entries.length > 0 && blogPosts.entries.map((value, index) => {
                    return <ContentContainer key={index}><div key={index} dangerouslySetInnerHTML={{__html: value}}></div></ContentContainer>  
                })
            }
            {
                error && <ContentContainer><Typography color={'error'} style={{paddingTop: '20px'}} variant='body2' paragraph>{error}</Typography></ContentContainer>
            }

        </>
    );
}