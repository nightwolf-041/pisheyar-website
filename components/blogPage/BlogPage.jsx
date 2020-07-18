import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faComments, faThumbsUp  } from "@fortawesome/free-regular-svg-icons";
import classes from './blogPage.module.scss'


const BlogPage = () => {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://185.211.59.237/Post/GetIndexesAnonymous')
        .then(res => {
            console.log(res.data.posts)
            setPosts(res.data.posts)
        })
    }, [])

    return (
        <section name="blogPage" className={classes.blogPageSection}>
            <div className="container">
                <div className={classes.blogPageTitlebox}>
                    <h4 className={classes.blogPageTitle}>بلاگ ما</h4>
                    <p className={classes.blogPageDesc}>
                        آخرین اخبار صنعتی را در بلاگ پیشه پلاس دنبال کنید؛ شما می توانید با وارد شدن به بلاگ پیشه پلاس از اخبار به رور صنعتی با خبر شوید
                    </p>
                </div>
                <div className={classes.blogPagePostsbox}>
                    {posts !== null && posts !== [] && posts !== undefined ?
                    posts.map((post, index) => (
                        <div className={classes.blogPagePost} key={index}>
                            <div className={classes.blogPagePostImagebox}>
                                <img src={post.document.source} alt="" className={classes.blogPagePostImage} />
                            </div>
                            <div className={classes.blogPagePostInfobox}>
                                <div className={classes.blogPagePostDatebox}>
                                    <FontAwesomeIcon icon={faClock}
                                    className={classes.blogPagePostDateIcon} />
                                    <span className={classes.blogPagePostDateSpan}>
                                        {post.modifiedDate}
                                    </span>
                                </div>
                                <div className={classes.blogPagePostCommentsbox}>
                                    <FontAwesomeIcon icon={faThumbsUp}
                                    className={classes.blogPagePostCommentsIcon} />
                                    <span className={classes.blogPagePostCommentsSpan}>
                                        {post.likeCount}
                                    </span>
                                </div>
                            </div>
                            <h5 className={classes.blogPagePostTitle}>
                                {post.abstract}
                            </h5>
                            <p className={classes.blogPagePostDesc}>
                                {post.description}
                            </p>
                        </div>
                    )) : 
                    <div className={classes.blogPageEmptyMsg}>
                        موردی یافت نشد
                    </div>
                    }
                    
                   
                </div>
            </div>
        </section>
    )
}

export default BlogPage
