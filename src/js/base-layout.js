import React from 'react';

import Page from './page';

const BaseLayout = (props) => {
    return (
        <div className={props.className}>
            <Page />
        </div>
    );
}

export default BaseLayout;
