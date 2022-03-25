import React, { Fragment, Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';



class Nav extends Component {

    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler= () => {
        this.setState({showSideDrawer: false});

    } 

    SideDrawerToggleHandler = () => {
        this.setState(( prevState ) => {
            return {showSideDrawer: !prevState.showSideDrawer};

        });
    }

    render () {
        return(
            <Fragment >
                <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
				<main >
                    {this.props.children}
                </main>
                
            </Fragment>
        );
    }
    
    
};

export default Nav;