import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { PAGES } from '../data/constants';

import PageLayout from './page-layout';

import SplashPage from './pages/splash-page';
import AuthPage from './pages/auth-page';
import DonationPage from './pages/donation-page';
import DonateFormPage from './pages/donation-form-page';
import DonationConfirmationPage from './pages/donation-confirmation-page';
import DonationTrackingPage from './pages/donation-tracking-page';

const contentComponents = {
    [PAGES.HOME]: SplashPage,
    [PAGES.AUTH]: AuthPage,
    [PAGES.DONATION]: DonationPage,
    [PAGES.DONATE_FORM]: DonateFormPage,
    [PAGES.DONATION_CONFIRMATION_FORM]: DonationConfirmationPage,
    [PAGES.DONATION_TRACKING]: DonationTrackingPage,
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
    const PageLayoutComponent = currentPage == PAGES.HOME 
        ? <ContentComponent {...contentProps} />
        : (<PageLayout PageComponent={ContentComponent} {...contentProps} />);
    
    return (
        <div className={className}>
            {PageLayoutComponent}
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
