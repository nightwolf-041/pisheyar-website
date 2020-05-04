import React from 'react'
import classes from './blogPage.module.scss'


const BlogPage = () => {
    return (
        <section className={classes.blogPageSection}>
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
                            <img src="/" alt="" className={classes.blogPagePostImage} />
                        </div>
                        <div className={classes.blogPagePostInfobox}>
                            <div className={blogPagePostDatebox}>
                                <img src="/home-icon.png" alt=""
                                className={classes.blogPagePostDateIcon} />
                                <span className={blogPagePostDateSpan}>22 دی</span>
                            </div>
                            <div className={blogPagePostCommentsbox}>
                            <img src="/home-icon.png" alt=""
                                className={classes.blogPagePostCommentsIcon} />
                                <span className={blogPagePostCommentsSpan}>2 نظر</span>
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
