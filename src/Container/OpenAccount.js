import React, { useReducer,useState } from 'react';
import { Link } from 'react-router-dom';
import MyAlert from '../FormValidation/MyAlert';
import formValidation  from'../FormValidation/StandardForm';
//import FormAlert from '../Partials/FormAlert';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const OpenAccount = props => {


  const v = new formValidation();

   


  const [state, setState] = useState({
    myForm: {
        fullname: '',
        accounttype: 'Individual',
        email: '',
        dob: new Date(),
        phone: '',
        address: '',
        city: '',
        your_state:'',
        country: 'Nigeria',
        postalcode: '',
        bank: '',
        account: '',
        date_open_account: new Date(),
        request_date: new Date(),
        gender: 'Male',
        company_reg: '',
        company_reg_date: new Date(),
        contact_person: '',
        citizen: 'NG',
        bvn: '',
        ref_no: '',
        lga: '',
    },
    formErrors: {
        fullname: '',
        accounttype: '',
        email: '',
        dob: '',
        phone: '',
        address: '',
        city: '',
        your_state:'',
        country: '',
        postalcode: '',
        bank: '',
        account: '',
        date_open_account: '',
        request_date: '',
        gender: '',
        company_reg: '',
        company_reg_date: '',
        contact_person: '',
        bvn: '',
        citizen: '',
        ref_no: '',
        lga: '',
    },
  });


  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    const { myForm, formErrors } = state;
    const { errorState, valueState } = v.validation(name, value, formErrors, myForm);
    console.log(errorState, valueState);

    let updateForm = { ...state };
    updateForm.formErrors = errorState;
    updateForm.myForm = valueState;
    setState({
        myForm:updateForm.myForm,
        formErrors:updateForm.formErrors
    });
  }


  const DOB = date => {
    setState({ 
      ...state,
      myForm:{
        ...state.myForm,
        dob: date
      }
    });
 }



  const changeDateOpenAccount = date => {
     setState({ 
       ...state,
       myForm:{
         ...state.myForm,
         date_open_account: date
       }
     });
  }

  const requestDate = date => {
    setState({ 
      ...state,
      myForm:{
        ...state.myForm,
        request_date: date
      }
    });
 }

 const companyRegDate = date => {
  setState({ 
    ...state,
    myForm:{
      ...state.myForm,
      company_reg_date: date
    }
  });
}



  const getMyDate = (currentDate) =>{
    const date = currentDate.getDate();
    const month = currentDate.getMonth(); //Be careful! January is 0 not 1
    const year = currentDate.getFullYear();
  return  year + "-" +('0' + (month + 1)).slice(-2) + "-" +('0' + date).slice(-2);
  }







  const onSubmitHandler = (event) => {
    event.preventDefault();

    const formData = {
      fullname: state.myForm.fullname,
      accounttype: state.myForm.accounttype,
      email: state.myForm.email,
      dob: getMyDate(state.myForm.dob),
      phone: state.myForm.phone,
      address: state.myForm.address,
      city: state.myForm.city,
      your_state:state.myForm.your_state,
      country: state.myForm.country,
      postalcode: state.myForm.postalcode,
      bank: state.myForm.bank,
      account: state.myForm.accounttype,
      date_open_account: getMyDate(state.myForm.date_open_account),
      request_date: getMyDate(state.myForm.request_date),
      gender: state.myForm.gender,
      company_reg:state.myForm.company_reg,
      company_reg_date: getMyDate(state.myForm.company_reg_date),
      contact_person: state.myForm.contact_person,
      bvn: state.myForm.bvn,
      ref_no: state.myForm.ref_no,
      lga: state.myForm.lga,
    }




    console.log(formData);
  }

  // const FORM_CURRENT_INPUT = "FORM_CURRENT_INPUT";
  // const formReducer = (state, action) => {
  //   if (action.type === FORM_CURRENT_INPUT) {
  //     const updatedInputs = {
  //       ...state.inputValues,
  //       [action.input]: action.value
  //     };
  //     const updatedValidity = {
  //       ...state.inputValidities,
  //       [action.input]: action.isValid
  //     };
  //     let updatedFormIsValid = true;
  //     for (const key in updatedValidity) {
  //       updatedFormIsValid = updatedFormIsValid && updatedValidity[key]
  //     }
  //     return {
  //       inputValidities: updatedValidity,
  //       inputValues: updatedInputs,
  //       formIsValid: updatedFormIsValid
  //     };
  //   }
  //   return this.state;
  // }



  // const [formState, dispatchFormState] = useReducer(formReducer,
  //   {
  //     inputValues: {
  //       fullname: '',
  //       accounttype: '',
  //       email: '',
  //       dob: '',
  //       phone: '',
  //       address: '',
  //       city: '',
  //       country: '',
  //       postalcode: '',
  //       bank: '',
  //       account: '',
  //       date_open_account: '',
  //       request_date: '',
  //       gender: '',
  //       company_reg: '',
  //       contact_person: '',
  //       bvn: '',
  //       ref_no: '',
  //       lga: '',
  //     },
  //     inputValidities: {
  //       fullname: false,
  //       accounttype: false,
  //       email: false,
  //       dob: false,
  //       phone: false,
  //       address: false,
  //       city: false,
  //       country: false,
  //       postalcode: false,
  //       bank: false,
  //       account: false,
  //       date_open_account: false,
  //       request_date: false,
  //       gender: false,
  //       company_reg: false,
  //       contact_person: false,
  //       bvn: false,
  //       ref_no: false,
  //       lga: false,
  //     },
  //     formIsValid: false
  //   }
  // )


  // const emailRegx = RegExp(/^\w+([-._]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  // const onchangeHandler = event => {
  //   const { name, value } = event.target;
  //   console.log(name, value);
  //   let isValid = false;
  //   if (value.trim().length > 3 && name ==="fullname") {
  //     isValid = true;
  //   }
  //   if (emailRegx.test(value)  && name ==="email") {
  //     isValid = true;
  //   }

  //   dispatchFormState({
  //     type: FORM_CURRENT_INPUT,
  //     value: value,
  //     isValid: isValid,
  //     input: name
  //   });
  // }




  return (
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">
          <Link to="open-account">Open Account</Link>
        </li>
      </ol>











      {/* register */}

      <div className="card card-register  mt-5">
        <div className="card-body">

          <form>
            <div className="form-row">

              <div className="form-group col-md-12">
                <label >Name of Individual / Company</label>
                <input type="text"    onChange={onchangeHandler} value={state.myForm.fullname} className="form-control" name="fullname" placeholder="Name of Individual or Company" />
                <MyAlert error={state.formErrors.fullname}  />
             </div>
            </div>

        


            <div className="form-row">
              <div className="form-group col-md-6">
                <label >Account Type</label>
                <select name="accounttype" 
                value={state.myForm.accounttype} className="form-control" onChange={onchangeHandler}
                   name="accounttype">
                  <option value="Individual">Individual</option>
                  <option value="Cooperate">Cooperate</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label >Email</label>
                <input type="email" value={state.myForm.email} name="email" onChange={onchangeHandler} className="form-control" id="inputEmail4" placeholder="Email" />
                <MyAlert error={state.formErrors.email}  />
              </div>
            </div>


            <div className="form-row">
              <div className="form-group col-md-6">
                <label style={{display:'block'}}>Date of Birth</label>
               <DatePicker
                      selected={state.myForm.dob}
                      className=" mb-2 form-control" 
                      name="dob"
                      dateFormat="yyyy-MM-dd"
                      onChange={date =>DOB(date)}
                    />
              </div>
              <div className="form-group col-md-6">
                <label >Phone</label>
                <input name="phone" value={state.myForm.phone} type="text" onChange={onchangeHandler} className="form-control" />
                <MyAlert error={state.formErrors.phone}  />
              </div>
            </div>





            <div className="form-group">
              <label >Address</label>
              <input type="text" value={state.myForm.address} name="address" onChange={onchangeHandler} className="form-control" id="inputAddress" placeholder="1234 Main St" />
              <MyAlert error={state.formErrors.address}  />
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label >City</label>
                <input type="text" value={state.myForm.city} onChange={onchangeHandler} className="form-control" name="city" id="inputCity" />
                <MyAlert error={state.formErrors.city}  />
              </div>
              <div className="form-group col-md-4">
                <label >Country</label>
                <select name="country" value={state.myForm.country} onChange={onchangeHandler} className="form-control">
                  <option value="Nigeria">Nigeria</option>
                  <option value="USA">USA</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label >Postal Code</label>
                <input name="postalcode" value={state.myForm.postalcode} onChange={onchangeHandler} type="text" className="form-control" />
                <MyAlert error={state.formErrors.postalcode}  />
              </div>
            </div>




            <div className="form-row">
              <div className="form-group col-md-6">
                <label >Name of Bank</label>
                <input type="text" name="bank" value={state.myForm.bank} onChange={onchangeHandler} className="form-control" />
                <MyAlert error={state.formErrors.bank}  />
              </div>

              <div className="form-group col-md-6">
                <label >Account Number</label>
                <input type="text" name="account" value={state.myForm.account} onChange={onchangeHandler} className="form-control" />
                <MyAlert error={state.formErrors.account}  />

              </div>
            </div>


            <div className="form-row">
              <div className="form-group col-md-6">
                <label  style={{display:'block'}}>Date of Opening Account</label>
                <DatePicker
                      selected={state.myForm.date_open_account}
                      className="  form-control" 
                      name="date_open_account"
                      dateFormat="yyyy-MM-dd"
                      onChange={date =>changeDateOpenAccount(date)}
                    />
              </div>

              <div className="form-group col-md-6">
                <label style={{display:'block'}}>Request Date</label>
               <DatePicker
                      selected={state.myForm.request_date}
                      className="  form-control" 
                      name="request_date"
                      dateFormat="yyyy-MM-dd"
                      onChange={date =>requestDate(date)}
                    />       
              </div>
            </div>



            <div className="form-row">
              <div className="form-group col-md-4">
                <label >Gender</label>
                <select name="gender" value={state.myForm.gender} onChange={onchangeHandler} className="form-control">
                  <option >Choose...</option>
                  <option>Female</option>
                  <option>Male</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label >Company Registration Number</label>
                <input name="company_reg" type="text" value={state.myForm.company_reg} onChange={onchangeHandler} className="form-control" />
                <MyAlert error={state.formErrors.company_reg}  />   
              </div>
              <div className="form-group col-md-2">
                <label>Citizen</label>
                <select name="citizen"  onChange={onchangeHandler} className="form-control">
                  <option value="NG">NG</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>
            </div>





            <div className="form-row">
              <div className="form-group col-md-4">
                <label >Contact Person Phone</label>
                <input type="text" name="contact_person" value={state.myForm.contact_person} onChange={onchangeHandler} className="form-control" />
                <MyAlert error={state.formErrors.contact_person}  />   
              </div>
              <div className="form-group col-md-6">
                <label style={{display:'block'}} >Company Registration Date</label>
               <DatePicker
                      selected={state.myForm.company_reg_date}
                      className=" form-control" 
                      name="company_reg_date"
                      dateFormat="yyyy-MM-dd"
                      onChange={date =>companyRegDate(date)}
                    />
              </div>
              <div className="form-group col-md-2">
                <label >BVN</label>
                <input type="text" name="bvn" value={state.myForm.bvn} onChange={onchangeHandler} className="form-control" />
                <MyAlert error={state.formErrors.bvn}  />   
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label >Ref No</label>
                <input type="text" value={state.myForm.ref_no} name="ref_no" onChange={onchangeHandler} className="form-control" />
                <MyAlert error={state.formErrors.ref_no}  />   
              </div>
              <div className="form-group col-md-4">
                <label >State</label>
                <input name="your_state" type="text" value={state.myForm.your_state} onChange={onchangeHandler} className="form-control" />
                <MyAlert error={state.formErrors.your_state}  /> 
              </div>
              <div className="form-group col-md-4">
                <label >LGA</label>
                <input type="text" name="lga" value={state.myForm.lga} onChange={onchangeHandler} className="form-control" />
                <MyAlert error={state.formErrors.lga}  />   
              </div>
            </div>
            <button disabled={!v.isformValid(state.myForm,state.formErrors)}   type="submit" onClick={onSubmitHandler.bind(this)} className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>




    </div>













  )
}

export default OpenAccount;