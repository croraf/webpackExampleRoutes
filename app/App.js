import React from 'react';
import { connect } from 'react-redux';

import {ElementContainer} from './ElementContainer';

class App extends React.Component {

    render() {
        /*let output = [];
        for (let i = 0; i <= this.state.clicked; i++){
            output.unshift(<ElementContainer key={i} i={i}/>)
        }*/
        //console.log('APP');

        return(
            <div>
                {/*{output}*/}

                {this.props.i1 > 2 ? <ElementContainer i={this.props.i2}/> : null}
                <ElementContainer i={this.props.i2}/>
                <button onClick={this.props.increment}>Click</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    i1: state.stateA.i1,
    i2: state.stateA.i2
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({type: 'ACTION_A'})
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export {AppContainer};