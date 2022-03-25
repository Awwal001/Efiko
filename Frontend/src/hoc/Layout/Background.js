import React from 'react';
import classes from './Layout.module.css';
import Background from '../../assets/images/calc.gif';



const sectionStyle = {
  width: "100%",
  // height: "400px",
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  
};

const BackGround = (props) => {
	return(
		<div style={ sectionStyle } className={classes.Banner}>
                <main className ={classes.Content}>
                    
                </main>
				<p style={{ textAlign: 'center' }}>Confirm your Grade-system type</p>
            </div>
	);
}



export default BackGround;