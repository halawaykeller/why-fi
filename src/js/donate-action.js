import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

/* SplashPageColumn:
 * A component that handles the styling for a column on the splash page
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const DonateAction = (props) => (
    <div className={props.className}>
        <Button content='Donate' />
    </div>
);

DonateAction.propTypes = {
    className: PropTypes.string,
};

export default DonateAction;
