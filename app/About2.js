import React from 'react';
import {connect} from 'react-redux';

class About2 extends React.Component {
    
    render () {

        console.log('about2');
        return (<div>Druga ruta {this.props.i}, {this.props.reduxProp}</div>);
    }
}

const mapStateToProps = (state) => ({
    reduxProp: state.stateAbout2

});

const About2Container = connect(mapStateToProps)(About2);

export {About2Container};