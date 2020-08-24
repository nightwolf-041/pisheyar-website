import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import classes from './rulesModal.module.scss'

function RulesModal(props) {
    return (
        <>
            <div className={props.show ? classes.rulesModalBackdrop : classes.rulesModalBackdropHidden}
            onClick={props.hideRulesModal}>
            </div>

            <div className={props.show ? classes.rulesModal : classes.rulesModalHidden}>
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={props.hideRulesModal}
                  className={classes.rulesModalCloseIcon}
                />
                <PerfectScrollbar>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                    <h4>asfdsadfadsfdsfadfsdf</h4>
                </PerfectScrollbar>
            </div>
        </>
    )
}

export default RulesModal
