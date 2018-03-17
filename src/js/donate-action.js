import React from 'react';
import PropTypes from 'prop-types';

import { Header} from 'semantic-ui-react';
import { PrimaryButton as Button } from '../ui/button';

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
