import React, { useState, useEffect } from 'react';
import { Typography} from '@material-ui/core';
import { ContentContainer } from '../../Layout'
import { tags } from './BlogTags';

const DEFAULT_TAG = "techno"

export default (props) => {

    const [blogPosts, setBlogPosts] = useState({entries: []});
    const [error, setError] = useState();
    const [currentTag, setCurrentTag] = useState(DEFAULT_TAG);

    useEffect(() => {
        // TODO: move this out
        async function retrieveBlogPosts(){
            const res = await fetch(`http://localhost:4000/blog/posts/tags/${currentTag}`, {
                method: 'GET'
            });
            res.json().then((json) => {
                let parsedJSON = JSON.parse(json.postEntries)
                setBlogPosts({entries: parsedJSON});
            }).catch((err) => {
                console.error(err);
                setError('Unable to retrieve blog posts.  Please try again momentarily or contact the administrator.');
            });
        }
        retrieveBlogPosts();
    }, []);

    return (
        <>
            <ContentContainer title='LATEST BLOG POSTS' >
                <Typography paragraph variant='caption'>
                    Follow me and discover more music on the <a href='http://rodanmusic.tumblr.com/'>Night Beats</a> blog.
                </Typography>
                <Typography variant='caption'>
                    Select Genre
                </Typography>
            </ContentContainer>
            {   
                blogPosts && blogPosts.entries && blogPosts.entries.length > 0 && blogPosts.entries.map((value, index) => {
                    return <ContentContainer key={index}><div key={index} dangerouslySetInnerHTML={{__html: value}}></div></ContentContainer>  
                })
            }
            {
                error && <Typography variant='body2' paragraph>{error}</Typography>
            }

        </>
    );
}
    