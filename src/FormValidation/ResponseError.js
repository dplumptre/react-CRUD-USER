

import React from 'react';

const ResponseError = props =>{


    let ErrorContainer = null;
          if(typeof props.error === 'object' && props.error !== null){
          // i need to check if its a object object response so I will know how to send
            ErrorContainer =  Object.keys(props.error).map(k=>(
              <li className="text-danger" key={k}>{props.error[k]}</li>
            ));
          }else{
            // i need to check if its a object object response so I will know how to send
            ErrorContainer =  <li className="text-danger">{props.error.toString()} </li>
          }   

    return(
        <div>
            {ErrorContainer}
        </div>
    );
}

export default ResponseError;