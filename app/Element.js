import React from 'react';

const Element = ({i}) => {

    return (
        <div>
            <div>Rafa {i}</div>
            <button disabled={''}>button</button>
        </div>
    );
};

/*class Element extends React.Component {
    

    render(){

        
        console.log('ELEMENT');

        return (
            <div>Rafa {this.props.i}</div>
        );
    }
};*/

export {Element};
