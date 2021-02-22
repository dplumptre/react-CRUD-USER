import React from 'react';


const FormAlert = props => {
            
    let response = null;
    if (!props.condition && props.touch === true) {
        response = props.resp;
    }



    return <div style={{ fontSize: 13, color: 'red' }}>{response}</div>
}


export default FormAlert;