import React, {useState} from 'react';


const AccountStatus = props => {


    // membercode from them


const [myForm, setMyForm] = useState({
    firstname : '',
    phone:''
})


const onchangeHandler = event =>{
    const {name,value} = event.target;
    console.log(name,value);
    setMyForm({
        ...myForm,
        [name]:value
    });

}  



const submitHandler =(event)=>{
    event.preventDefault();
    console.log(event.target.value);
}



    return (<div>
        <ol className="breadcrumb">
            <li className="breadcrumb-item active">Status</li>
        </ol>
            <form>
                <label>Name</label>
                <input name="firstname" onChange={onchangeHandler} value={myForm.firstname} />
                <label>Phone</label>
                <input name="phone" onChange={onchangeHandler} value={myForm.phone}/>
                <button  className="btn-primary btn" onSubmit={submitHandler}>Submit</button>
            
            </form>
    </div>);

}

export default AccountStatus;