import React from 'react'
import Select from 'react-select';
import axios from 'axios';
import classes from 'categoriesPage.module.scss'


const CategoriesPage = () => {

    let [countriesLoading, setCountriesLoading] = React.useState()
    let [countries, setSountries] = React.useState([])
    let [cities, setSities] = React.useState([])
    let [serachResultCategories, setSerachResultCategories] = React.useState()
    let [serachResultLoading, setSerachResultLoading] = React.useState(false)
    let [serachResultMessage, setSerachResultMessage] = React.useState()

    return (
        <section className={classes.categoriesPage}>
            <>
                <div className={classes.menuPageSearchRow}>
                    <div className={classes.menuPageSearchInputsbox}>
                        <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={classes.menuPageSearchInputBottom} onChange={e => this.serachHandler(e)} />
                         <div className={classes.menuPageSearchInputTopbox}>
                            <Select
                                inputId="menuPageSearchInputTopContry11"
                                instanceId="menuPageSearchInputTopContry12"
                                placeholder="استان"
                                className={classes.menuPageSearchInputTopContry}
                                // defaultValue={countries[2]}
                                label="Single select"
                                // loadingMessage="درال بارگیری"
                                isRtl={true}
                                isLoading={countriesLoading}
                                loadingMessage={() => "درحال بارگیری..."}
                                noOptionsMessage={() => "نتیجه ای یافت نشد"}
                                styles={customStyles}
                                options={countries}
                                onChange={val => this.countryChanger(val)}
                            />
                            <Select
                                inputId="menuPageSearchInputTopCity11"
                                instanceId="menuPageSearchInputTopCity12"
                                placeholder="شهر"
                                className={classes.menuPageSearchInputTopCity}
                                // defaultValue={countries[2]}
                                label="Single select"
                                isRtl={true}
                                isLoading={countriesLoading}
                                // isDisabled={cityDisabled}
                                loadingMessage={() => "درحال بارگیری..."}
                                noOptionsMessage={() => "نتیجه ای یافت نشد"}
                                styles={customStyles}
                                options={cities}
                                onChange={val => this.cityChanger(val)}
                            />
                        </div>
                    </div>
                    <div className={classes.menuPageSearchLogobox}>
                        <img src="/GearIcon.svg" alt="" ref={img => this.searchCharkhIcon = img}
                        className={classes.menuPageSearchCharkhIcon} onClick={this.animateToggler} />
                    </div>
                </div>

                <div className={classes.menuPageSearchResultBox} ref={div => this.searchResultBox = div}>
                    {serachResultCategories === null && !serachResultLoading ?
                    <h1>{serachResultMessage}</h1> : null
                    }
                    {serachResultCategories !== null && !serachResultLoading ?
                        <Scrollbar className={classes.menuPageSearchResultScrollbar}
                        wrapperProps={{
                            renderer: props => {
                                const { elementRef, ...restProps } = props;
                                return <span {...restProps} ref={elementRef} className="menuPageSearchResultScrollbarWrapper" />;
                            }
                            }}
                            scrollerProps={{
                            renderer: props => {
                                const { elementRef, ...restProps } = props;
                                return <span {...restProps} ref={elementRef} className="menuPageSearchResultScrollbarScroller" />;
                            }
                            }}
                            trackXProps={{
                            renderer: props => {
                                const { elementRef, ...restProps } = props;
                                return <span {...restProps} ref={elementRef}
                                className="menuPageSearchResultScrollbarTrackX" />;
                            }
                            }}
                            trackYProps={{
                            renderer: props => {
                                const { elementRef, ...restProps } = props;
                                return <span {...restProps} ref={elementRef}
                                className="menuPageSearchResultScrollbarTrackY" />;
                            }
                            }}
                            >
                                
                        {serachResultCategories.map((ctg, index) => (
                            <div className={classes.menuPageSearchResultItembox} key={index}>
                                <h2 className={classes.menuPageSearchResultItem}>
                                    {ctg}
                                </h2>
                            </div>
                        ))
                        }
                        </Scrollbar>
                        :null
                    }
                    {serachResultLoading ?
                    <div className={classes.menuPageSearchResultBoxLoader}>درحال بارگیری...</div>
                    : null}
                </div>
            </>
        </section>
    )
}

export default CategoriesPage
