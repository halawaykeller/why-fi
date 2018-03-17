import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Button, Header } from 'semantic-ui-react';

const Actions = (props) => (
    <div className={props.className}>
        <Header as='h3'>
            Are you a {props.call} who wants to take action?
        </Header>
        <Button content='Register' />
        <Button content='Login' />
    </div>
);

const ActionsStyled = styled(Actions)`
    padding-top: 10px;
`;

/* SplashPageColumn:
 * A component that handles the styling for a column on the splash page
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const UserActions = (props) => (
    <div className={props.className}>
        <ActionsStyled call="Business" />
        <ActionsStyled call="Non-Profit" />
    </div>
);

UserActions.propTypes = {
    className: PropTypes.string,
};

export default UserActions;
