import React from 'react';

import bLogo from '../../assets/images/letter-b.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={bLogo} alt='Your GPA'/>
    </div>
);

export default logo;