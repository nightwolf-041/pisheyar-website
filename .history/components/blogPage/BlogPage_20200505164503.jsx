import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faComment, faCommentDots , faCommentDollar, faClock, faUserClock } from "@fortawesome/free-solid-svg-icons";
import classes from './blogPage.module.scss'


const BlogPage = () => {
    return (
        <section name="blogPage" className={classes.blogPageSection}>
            <div className="container">
                <div className={classes.blogPageTitlebox}>
                    <h4 className={classes.blogPageTitle}>بلاگ ما</h4>
                    <p className={classes.blogPageDesc}>
                        آخرین اخبار صنعتی را در بلاگ پیشه یار دنبال کنید؛ شما می توانید با وارد شدن به بلاگ پیشه یار از اخبار به رور صنعتی با خبر شوید
                    </p>
                </div>
                <div className={classes.blogPagePostsbox}>
                    <div className={classes.blogPagePost}>
                        <div className={classes.blogPagePostImagebox}>
                            <img src="/blogimg-1.jpg" alt="" className={classes.blogPagePostImage} />
                        </div>
                        <div className={classes.blogPagePostInfobox}>
                            <div className={classes.blogPagePostDatebox}>
                                <FontAwesomeIcon icon={faClock}
                                  className={classes.blogPagePostDateIcon} />
                                <span className={classes.blogPagePostDateSpan}>22 دی</span>
                            </div>
                            <div className={classes.blogPagePostCommentsbox}>
                                <FontAwesomeIcon icon={faCommentDots}
                                  className={classes.blogPagePostCommentsIcon} />
                                <span className={classes.blogPagePostCommentsSpan}>2 نظر</span>
                            </div>
                        </div>
                        <h5 className={classes.blogPagePostTitle}>
                            سود صنعتی چین در هشت ماه اول سریعتر رشد می کند
                        </h5>
                        <p className={classes.blogPagePostDesc}>
                            در پی خبر های اخیر، چین یکی از کشور های قدرتمند جهان درباره سود صنعتی خود صحبت می کند
                        </p>
                    </div>
                    <div className={classes.blogPagePost}>
                        <div className={classes.blogPagePostImagebox}>
                            <img src="/blogimg-2.jpg" alt="" className={classes.blogPagePostImage} />
                        </div>
                        <div className={classes.blogPagePostInfobox}>
                            <div className={classes.blogPagePostDatebox}>
                                <FontAwesomeIcon icon={faUserClock}
                                  className={classes.blogPagePostDateIcon} />
                                <span className={classes.blogPagePostDateSpan}>22 دی</span>
                            </div>
                            <div className={classes.blogPagePostCommentsbox}>
                                <FontAwesomeIcon icon={faCommentDollar}
                                  className={classes.blogPagePostCommentsIcon} />
                                <span className={classes.blogPagePostCommentsSpan}>2 نظر</span>
                            </div>
                        </div>
                        <h5 className={classes.blogPagePostTitle}>
                            سود صنعتی چین در هشت ماه اول سریعتر رشد می کند
                        </h5>
                        <p className={classes.blogPagePostDesc}>
                            در پی خبر های اخیر، چین یکی از کشور های قدرتمند جهان درباره سود صنعتی خود صحبت می کند
                        </p>
                    </div>
                    <div className={classes.blogPagePost}>
                        <div className={classes.blogPagePostImagebox}>
                            <img src="/blogimg-3.jpg" alt="" className={classes.blogPagePostImage} />
                        </div>
                        <div className={classes.blogPagePostInfobox}>
                            <div className={classes.blogPagePostDatebox}>
                                <FontAwesomeIcon icon={faUserClock}
                                  className={classes.blogPagePostDateIcon} />
                                <span className={classes.blogPagePostDateSpan}>22 دی</span>
                            </div>
                            <div className={classes.blogPagePostCommentsbox}>
                                <FontAwesomeIcon icon={faCommentDollar}
                                  className={classes.blogPagePostCommentsIcon} />
                                <span className={classes.blogPagePostCommentsSpan}>2 نظر</span>
                            </div>
                        </div>
                        <h5 className={classes.blogPagePostTitle}>
                            سود صنعتی چین در هشت ماه اول سریعتر رشد می کند
                        </h5>
                        <p className={classes.blogPagePostDesc}>
                            در پی خبر های اخیر، چین یکی از کشور های قدرتمند جهان درباره سود صنعتی خود صحبت می کند
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogPage
