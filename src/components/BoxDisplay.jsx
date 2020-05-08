import React, { useState } from 'react';
import styled from 'styled-components';

const BoxDisplay= styled.div`
    border: 1px solid lightgray;
    background: ${props => props.bgColor};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
    display: inline-block;
`;

export default BoxDisplay;