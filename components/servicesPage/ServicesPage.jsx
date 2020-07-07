import React, {useState} from 'react'
import axios from 'axios'
import TopSlider from './TopSlider';
import BottomSlider from './BottomSlider';
import classes from './servicesPage.module.scss'


const ServicesPage = () => {

    const [swiper, updateSwiper] = useState(null);
    const [bottomSliderGuid, setBottomSliderGuid] = useState('e3b1e3a1-4d79-454d-8b1f-6c9e24e290b2');
    const [dataForBottom, setdDtaForBottom] = useState([]);
    const [dataForPage2, setdDtaForPage2] = useState(null);

    React.useEffect(() => {
      axios.get(`http://185.94.97.164/api/Category/GetPrimaries?guid=e3b1e3a1-4d79-454d-8b1f-6c9e24e290b2`)
      .then(res => {
          console.log(res.data.primaryCategories);
          setdDtaForBottom(res.data.primaryCategories)
      })
    }, [])

    const sendGuidToBottomSlider = guid => {
      console.log(guid)
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
        }

        

    return (
        <section name="servicesPage" className={classes.servicesPageSection}>
            <div className="container">
                <div className={classes.servicesPageTitlebox}>
                    <h4 className={classes.servicesPageTitle}><b>خدمات</b> ما</h4>
                    <p className={classes.servicesPageSubtitle}>
                      پیشه پلاس اولین سامانه ارائه  خدمات صنعتی ایران، به شما کمک می کند از متنوع ترین خدمات صنعتی مطلع و در صورت نیاز با مراجعه به دسته بندی و یا جستجو، خدمات مورد نیاز خود را پیدا کنید و همچنین با مراجعه به اپلیکیشن پیشه پلاس سفارشات خود را پیگیری و به اتمام برسانید.
                    </p>
                </div>
                <TopSlider
                bottomSliderGuid={bottomSliderGuid}
                sendGuidToBottomSlider={guid => sendGuidToBottomSlider(guid)} />
                <BottomSlider
                dataForBottom={dataForBottom}
                givenGuid={bottomSliderGuid}
                />
            </div>
        </section>
    )
}

export default ServicesPage
