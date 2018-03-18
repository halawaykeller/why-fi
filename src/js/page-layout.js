import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { Menu } from 'semantic-ui-react';

import { setCurrentPage } from '../data/actions';
import { PAGES } from '../data/constants';

const PageHeaderMenuItem = (props) => (
    <Menu.Item {...props} />
);

const PageHeaderMenuItemStyled = styled(PageHeaderMenuItem)`
    cursor: pointer;
`;

const PageHeaderMenu = (props) => (
    <Menu>
        <PageHeaderMenuItemStyled onClick={props.onHomeClick} content='Why-Fi' />
    </Menu>
);

const md2p = (dispatch) => ({
    onHomeClick: () => {
        dispatch(setCurrentPage(PAGES.HOME));
    }
});

const PageHeaderMenuSmart = connect(null, md2p)(PageHeaderMenu);

const PageLayout = (props) => {
    const { PageComponent, ...contentProps } = props;
    
    return (
        <React.Fragment>
            <PageHeaderMenuSmart />
            <div className={props.className}>
                <PageComponent {...contentProps} />
            </div>
        </React.Fragment>
    );
}

export default PageLayout;
