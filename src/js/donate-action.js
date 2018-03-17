import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PrimaryButton as Button } from './ui/button';

import { setCurrentPage } from '../data/actions';
import { PAGES } from '../data/constants';

/* SplashPageColumn:
 * A component that handles the styling for a column on the splash page
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const DonateAction = (props) => (
    <div className={props.className}>
        <Button content='Donate' onClick={props.onClick} />
    </div>
);

DonateAction.propTypes = {
    className: PropTypes.string,
};


const md2p = (dispatch) => ({
    onClick: () => {
        dispatch(setCurrentPage(PAGES.DONATION));
    }
});

export default connect(null, md2p)(DonateAction);
