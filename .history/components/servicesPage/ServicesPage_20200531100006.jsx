import React, {useState} from 'react'
import Swiper from 'react-id-swiper';
import TopSlider from './TopSlider';
import BottomSlider from './BottomSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faToolbox } from "@fortawesome/free-solid-svg-icons";

import classes from './servicesPage.module.scss'


const ServicesPage = () => {

    const [swiper, updateSwiper] = useState(null);
    const [bottomSliderGuid, setBottomSliderGuid] = useState(null);
    const [dataForBottom, setdDtaForBottom] = useState(null);

    const sendGuidToBottomSlider = guid => {
      setBottomSliderGuid(guid)
      axios.get(`http://185.94.97.164/api/Category/GetPrimaries?guid=${guid}`)
      .then(res => {
        setdDtaForBottom(res.data.primaryCategories)
      })
    }

    const goNext = () => {
      if (swiper !== null) {
        swiper.slideNext();
      }
    };
    const goPrev = () => {
      if (swiper !== null) {
        swiper.slidePrev();
      }
    };

    const params = {
          containerModifierClass: 'services-swiper-container',
          loop: true,
          freeMode: false,
          grabCursor: false,
          lazy: false,
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 0,
        //   breakpoints: {
        //     576: {
        //         centeredSlides: true,
        //         slidesPerView: 'auto',
        //         spaceBetween: 0,
        //     },
        //     300: {
        //         centeredSlides: true,
        //         slidesPerView: 'auto',
        //         spaceBetween: 0,
        //     },
        // }
        }

        

    return (
        <section name="servicesPage" className={classes.servicesPageSection}>
            <div className="container">
                <div className={classes.servicesPageTitlebox}>
                    <h4 className={classes.servicesPageTitle}><b>خدمات</b> ما</h4>
                    <p className={classes.servicesPageSubtitle}>
                        خدمات پیشه یار یکی از برترین خدمات صنعتی شناخته شده که به شما کمک می کند از متنوع ترین خدمات صنعتی مطلع و در صورت نیاز با مراجعه به دسته بندی، خدمات مورد نیاز را پیدا کنید و همچنین با مراجعه به اپلیکیشن پیشه یار سفارشات خود را به اتمام برسانید.
                    </p>
                </div>
                <TopSlider
                sendGuidToBottomSlider={guid => sendGuidToBottomSlider(guid)} />
                <BottomSlider
                dataForBottom={dataForBottom}
                givenGuid={bottomSliderGuid} />
            </div>
        </section>
    )
}

export default ServicesPage
