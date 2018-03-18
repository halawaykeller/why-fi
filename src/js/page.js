import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { PAGES } from '../data/constants';

<<<<<<< HEAD
import SplashPage from './pages/splash-page';
import AuthPage from './pages/auth-page';
import DonationPage from './pages/donation-page';
=======
import SplashPage from './splash-page';
import AuthPage from './auth-page';
import DonationPage from './donation-page';
import DonateFormPage from './donation-form-page';
>>>>>>> 5686d1896db4ce42cbfe92629eb4af1b6b2b693a

const contentComponents = {
    [PAGES.HOME]: SplashPage,
    [PAGES.AUTH]: AuthPage,
    [PAGES.DONATION]: DonationPage,
    [PAGES.DONATE_FORM]: DonateFormPage,
};


/* Page:
 * A component used to set up the page
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 * page (str, optional, default=PAGES.HOME):
 *     what page to render content for - use PAGES.<page>
 */
const Page = (props) => {
    // Allow for the passing of props to the content's component
    const { className, currentPage, ...contentProps } = props;
    const ContentComponent = contentComponents[currentPage];
    
    return (
        <div className={className}>
            <ContentComponent {...contentProps} />
        </div>
    );
    
};

Page.propTypes = {
    className: PropTypes.string,
    currentPage: PropTypes.string,
};

Page.defaultProps = {
    currentPage: PAGES.HOME,
};

const PageContentStyled = styled(Page)`
    margin-top: 0 !important;
    height: 100%;
`;

const ms2p = ({ ui: { currentPage } }) => ({ currentPage });

export default connect(ms2p, () => ({}))(PageContentStyled);
