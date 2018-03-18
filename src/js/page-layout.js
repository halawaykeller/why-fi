import React from 'react';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';

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

const PageHeaderMenu = (props) => {
    const logout = props.auth || (props.auth && props.auth.isEmpty)
        ? (
            <Menu.Menu position='right'>
                <PageHeaderMenuItemStyled
                    content='Logout'
                    onClick={props.onLogout}
                />
            </Menu.Menu>
        )
        : null;
    
    return (
        <Menu>
            <PageHeaderMenuItemStyled
                onClick={props.onHomeClick}
                content='Why-Fi'
            />
            {logout}
        </Menu>
    )
};

const ms2p = ({ firebase: { auth } }) => ({ auth });
const md2p = (dispatch, ownProps) => ({
    onLogout: () => {
        ownProps.firebase.logout();
        dispatch(setCurrentPage(PAGES.HOME));
    },
    onHomeClick: () => {
        dispatch(setCurrentPage(PAGES.HOME));
    }
});

const PageHeaderMenuSmart = withFirestore(connect(ms2p, md2p)(PageHeaderMenu));

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
