import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import HeroImage from '../hero-image';
import SplashPageColumn from './splash-page-col';
import DonateAction from '../donate-action';
import UserActions from '../user-actions';
import HookGraph from '../hook-graph';

/* SplashPage:
 * A component that holds the content for the splash page
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const SplashPage = (props) => (
    <div className={props.className}>
        <HeroImage />
        <SplashPageColumn
            title='Internet Usage Statistics'
        >
            <HookGraph />
        </SplashPageColumn>
        <SplashPageColumn
            title='Ready to Take Action?'
        >
            <DonateAction />
            <UserActions />
        </SplashPageColumn>
        <SplashPageColumn
            title='Project Sponsors'
        >
            <h3>We welcome community partners and corporate sponsorships. We are presently seeking an internet provider partner. Please speak with a member of our team if your organization is interested in getting involved!</h3>
        </SplashPageColumn>
    </div>
);

SplashPage.propTypes = {
    className: PropTypes.string,
};

const SplashPageStyled = styled(SplashPage)`
    height: 100%;
`;

export default SplashPageStyled;
