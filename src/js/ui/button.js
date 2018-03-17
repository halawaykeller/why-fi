import React from 'react';

import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

import { COLORS } from '../../data/constants';

export const PrimaryButton = styled(Button)`
    background: ${COLORS.GREY_LIGHT} !important;
    color: ${COLORS.WHITE} !important;
    
    &:hover {
        background: ${COLORS.BLUE} !important;
    }
`;


export default PrimaryButton;