import React from 'react';

const MyAlert = props => {

    let res = null;



    if (props.error.length > 1) {
        // if error is more than 1 that means
        // theres error show it
        res = (<div  style={{ color: 'red', fontSize: 12 }}>
            {props.error}
        </div>)
    }


    return res;
} 

export default MyAlert;