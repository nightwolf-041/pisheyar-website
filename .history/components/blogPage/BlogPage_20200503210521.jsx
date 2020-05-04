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
            </div>
        </section>
    )
}

export default BlogPage
