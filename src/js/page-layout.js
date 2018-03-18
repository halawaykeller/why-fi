import React from 'react';

import { Menu } from 'semantic-ui-react';

const PageHeaderMenu = (props) => (
    <Menu>
        <Menu.Item>
            Why-Fi
        </Menu.Item>
    </Menu>
);

const PageLayout = (props) => {
    const { PageComponent, ...contentProps } = props;
    
    return (
        <React.Fragment>
            <PageHeaderMenu />
            <div className={props.className}>
                <PageComponent {...contentProps} />
            </div>
        </React.Fragment>
    );
}

export default PageLayout;
