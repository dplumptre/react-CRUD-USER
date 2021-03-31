import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import MyAlert from "../FormValidation/MyAlert";
import formValidation from "../FormValidation/StandardForm";
//import FormAlert from '../Partials/FormAlert';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { addAccount } from "../store/reducers/Account";
import Spinner from "../Partials/Spinner/Spinner";
import ResponseError from "../FormValidation/ResponseError";

const OpenAccount = (props) => {
	const v = new formValidation();
	const member_code = "UBAS";
	const min = 100;
	const max = 10000000000000;
	const generated_ref_no = Math.floor(Math.random() * (max - min + 1)) + min;

	const loading = useSelector((state) => state.accountReducer.loading);
	const success = useSelector((state) => state.accountReducer.success);
	const error = useSelector((state) => state.accountReducer.error);
	const [refNumber, setRefNumber] = useState(generated_ref_no);
	const dispatch = useDispatch();

	useEffect(() => {
		setRefNumber(Math.floor(Math.random() * (max - min + 1)) + min);
	}, []);

	const [state, setState] = useState({
		myForm: {
			member: member_code,
			fullname: "",
			maiden_name: "",
			nimco: "",
			contact_person: "",
			contact_person_phone: "",
			accounttype: "I",
			email: "",
			alt_email: "",
			dob: new Date(),
			phone1: "",
			phone2: "",
			nx_phone: "",
			address: "",
			city: "",
			country: "NG",
			your_state: "Lagos",
			postalcode: "",
			bank: "",
			bank_account_name: "",
			account: "",
			date_open_account: new Date(),
			request_date: new Date(),
			gender: "M",
			company_reg: "",
			company_reg_date: new Date(),
			citizen: "NG",
			bvn: "",
			ref_no: generated_ref_no,
			lga: "",
			sort_code: "4000470158",
			tax_id: "",
		},
		formErrors: {
			fullname: "",
			maiden_name: "",
			nimco: "",
			contact_person: "",
			contact_person_phone: "",
			nx_phone: "",
			AccountType: "",
			email: "",
			alt_email: "",
			dob: "",
			phone1: "",
			phone2: "",
			address: "",
			city: "",
			country: "",
			your_state: "",
			postalcode: "",
			bank: "",
			bank_account_name: "",
			account: "",
			date_open_account: "",
			request_date: "",
			gender: "",
			company_reg: "",
			company_reg_date: "",
			citizen: "",
			bvn: "",
			ref_no: "",
			lga: "",
			sort_code: "",
			tax_id: "",
		},
	});

	const onchangeHandler = (event) => {
		const { name, value } = event.target;
		console.log(name, value);
		const { myForm, formErrors } = state;
		const { errorState, valueState } = v.validation(
			name,
			value,
			formErrors,
			myForm
		);
		console.log(errorState, valueState);

		let updateForm = { ...state };
		updateForm.formErrors = errorState;
		updateForm.myForm = valueState;
		setState({
			myForm: updateForm.myForm,
			formErrors: updateForm.formErrors,
		});
	};

	const DOB = (date) => {
		setState({
			...state,
			myForm: {
				...state.myForm,
				dob: date,
			},
		});
	};

	const changeDateOpenAccount = (date) => {
		setState({
			...state,
			myForm: {
				...state.myForm,
				date_open_account: date,
			},
		});
	};

	const requestDate = (date) => {
		setState({
			...state,
			myForm: {
				...state.myForm,
				request_date: date,
			},
		});
	};

	const companyRegDate = (date) => {
		setState({
			...state,
			myForm: {
				...state.myForm,
				company_reg_date: date,
			},
		});
	};

	const getMyDate = (currentDate) => {
		const date = currentDate.getDate();
		const month = currentDate.getMonth(); //Be careful! January is 0 not 1
		const year = currentDate.getFullYear();
		// return (
		// 	year + "-" + ("0" + (month + 1)).slice(-2) + "-" + ("0" + date).slice(-2)
		// );// had to format it to YYYYMMDD
		return year + ("0" + (month + 1)).slice(-2) + ("0" + date).slice(-2);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		const formData = {
			Member: member_code,
			AccountType: state.myForm.accounttype,
			BirthDate: getMyDate(state.myForm.dob),
			Name: state.myForm.fullname,
			Guardian: state.myForm.contact_person,
			Address1: state.myForm.address,
			City: state.myForm.city,
			Country: state.myForm.country,
			Postal: state.myForm.postalcode,
			Phone1: state.myForm.phone1,
			Phone2: state.myForm.phone2,
			Email: state.myForm.email,
			BankName: state.myForm.bank,
			BankAccNo: state.myForm.account,
			BOPDate: getMyDate(state.myForm.date_open_account),
			REQDate: getMyDate(state.myForm.request_date),
			NXPhone: state.myForm.nx_phone,
			AltEMail: state.myForm.alt_email,
			Gender: state.myForm.gender,
			RCNumber: state.myForm.company_reg,
			Citizen: state.myForm.citizen,
			MadianName: state.myForm.maiden_name,
			RefNo: refNumber,
			NIMCNo: state.myForm.nimco,
			CPPhone: state.myForm.contact_person_phone,
			CPName: state.myForm.contact_person,
			NXCHN: "",
			NIN: state.myForm.nin,
			State: state.myForm.your_state,
			LGA: state.myForm.lga,
			SortCode: state.myForm.sort_code,
			BankAccountname: state.myForm.bank_account_name,
			RCDate: getMyDate(state.myForm.company_reg_date),
			BVN: state.myForm.bvn,
			TaxId: state.myForm.tax_id,
		};
		console.log(generated_ref_no);
		console.log(refNumber);
		console.log(formData);
		dispatch(addAccount(formData));
	};

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

	let accountForm = (
		<form>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label>Name of Individual / Company</label>
					<input
						type="text"
						onChange={onchangeHandler}
						value={state.myForm.fullname}
						className="form-control"
						name="fullname"
						placeholder="Name of Individual or Company"
					/>
					<MyAlert error={state.formErrors.fullname} />
				</div>

				<div className="form-group col-md-6">
					<label>Maiden Name</label>
					<input
						type="text"
						onChange={onchangeHandler}
						value={state.myForm.maiden_name}
						className="form-control"
						name="maiden_name"
						placeholder="Maiden Name"
					/>
					<MyAlert error={state.formErrors.maiden_name} />
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-4">
					<label>Account Type</label>
					<select
						name="accounttype"
						value={state.myForm.accounttype}
						className="form-control"
						onChange={onchangeHandler}
					>
						<option value="Individual">Individual</option>
						<option value="Cooperate">Cooperate</option>
					</select>
				</div>
				<div className="form-group col-md-4">
					<label>Email</label>
					<input
						type="email"
						value={state.myForm.email}
						name="email"
						onChange={onchangeHandler}
						className="form-control"
						id="inputEmail4"
						placeholder="Email"
					/>
					<MyAlert error={state.formErrors.email} />
				</div>
				<div className="form-group col-md-4">
					<label>Alternative Email</label>
					<input
						type="email"
						value={state.myForm.alt_email}
						name="alt_email"
						onChange={onchangeHandler}
						className="form-control"
						id="inputEmail4"
						placeholder="Email"
					/>
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-4">
					<label style={{ display: "block" }}>Date of Birth</label>
					<DatePicker
						selected={state.myForm.dob}
						className=" mb-2 form-control"
						name="dob"
						dateFormat="yyyy-MM-dd"
						onChange={(date) => DOB(date)}
					/>
				</div>
				<div className="form-group col-md-4">
					<label>Phone</label>
					<input
						name="phone1"
						value={state.myForm.phone1}
						type="text"
						onChange={onchangeHandler}
						className="form-control"
					/>
					<MyAlert error={state.formErrors.phone1} />
				</div>

				<div className="form-group col-md-4">
					<label>Alternate Phone</label>
					<input
						name="phone2"
						value={state.myForm.phone2}
						type="text"
						onChange={onchangeHandler}
						className="form-control"
					/>
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-7">
					<label>Next of Kin Phone</label>
					<input
						name="nx_phone"
						value={state.myForm.nx_phone}
						type="text"
						onChange={onchangeHandler}
						className="form-control"
					/>
					<MyAlert error={state.formErrors.nx_phone} />
				</div>

				<div className="form-group col-md-3">
					<label>Gender</label>
					<select
						name="gender"
						value={state.myForm.gender}
						onChange={onchangeHandler}
						className="form-control"
					>
						<option>M</option>
						<option>F</option>
					</select>
				</div>

				<div className="form-group col-md-2">
					<label>Citizen</label>
					<select
						name="citizen"
						onChange={onchangeHandler}
						className="form-control"
					>
						<option value="NG">NG</option>
						<option value="USA">USA</option>
						<option value="UK">UK</option>
					</select>
				</div>
			</div>
			<div className="form-group">
				<label>Address</label>
				<input
					type="text"
					value={state.myForm.address}
					name="address"
					onChange={onchangeHandler}
					className="form-control"
					id="inputAddress"
					placeholder="1234 Main St"
				/>
				<MyAlert error={state.formErrors.address} />
			</div>

			<div className="form-row">
				<div className="form-group col-md-4">
					<label>Country</label>
					<select
						name="country"
						value={state.myForm.country}
						onChange={onchangeHandler}
						className="form-control"
					>
						<option value="NG">Nigeria</option>
						<option value="AF">Afghanistan</option>
						<option value="AX">Åland Islands</option>
						<option value="AL">Albania</option>
						<option value="DZ">Algeria</option>
						<option value="AS">American Samoa</option>
						<option value="AD">Andorra</option>
						<option value="AO">Angola</option>
						<option value="AI">Anguilla</option>
						<option value="AQ">Antarctica</option>
						<option value="AG">Antigua and Barbuda</option>
						<option value="AR">Argentina</option>
						<option value="AM">Armenia</option>
						<option value="AW">Aruba</option>
						<option value="AU">Australia</option>
						<option value="AT">Austria</option>
						<option value="AZ">Azerbaijan</option>
						<option value="BS">Bahamas</option>
						<option value="BH">Bahrain</option>
						<option value="BD">Bangladesh</option>
						<option value="BB">Barbados</option>
						<option value="BY">Belarus</option>
						<option value="BE">Belgium</option>
						<option value="BZ">Belize</option>
						<option value="BJ">Benin</option>
						<option value="BM">Bermuda</option>
						<option value="BT">Bhutan</option>
						<option value="BO">Bolivia, Plurinational State of</option>
						<option value="BQ">Bonaire, Sint Eustatius and Saba</option>
						<option value="BA">Bosnia and Herzegovina</option>
						<option value="BW">Botswana</option>
						<option value="BV">Bouvet Island</option>
						<option value="BR">Brazil</option>
						<option value="IO">British Indian Ocean Territory</option>
						<option value="BN">Brunei Darussalam</option>
						<option value="BG">Bulgaria</option>
						<option value="BF">Burkina Faso</option>
						<option value="BI">Burundi</option>
						<option value="KH">Cambodia</option>
						<option value="CM">Cameroon</option>
						<option value="CA">Canada</option>
						<option value="CV">Cape Verde</option>
						<option value="KY">Cayman Islands</option>
						<option value="CF">Central African Republic</option>
						<option value="TD">Chad</option>
						<option value="CL">Chile</option>
						<option value="CN">China</option>
						<option value="CX">Christmas Island</option>
						<option value="CC">Cocos (Keeling) Islands</option>
						<option value="CO">Colombia</option>
						<option value="KM">Comoros</option>
						<option value="CG">Congo</option>
						<option value="CD">Congo, the Democratic Republic of the</option>
						<option value="CK">Cook Islands</option>
						<option value="CR">Costa Rica</option>
						<option value="CI">Côte d'Ivoire</option>
						<option value="HR">Croatia</option>
						<option value="CU">Cuba</option>
						<option value="CW">Curaçao</option>
						<option value="CY">Cyprus</option>
						<option value="CZ">Czech Republic</option>
						<option value="DK">Denmark</option>
						<option value="DJ">Djibouti</option>
						<option value="DM">Dominica</option>
						<option value="DO">Dominican Republic</option>
						<option value="EC">Ecuador</option>
						<option value="EG">Egypt</option>
						<option value="SV">El Salvador</option>
						<option value="GQ">Equatorial Guinea</option>
						<option value="ER">Eritrea</option>
						<option value="EE">Estonia</option>
						<option value="ET">Ethiopia</option>
						<option value="FK">Falkland Islands (Malvinas)</option>
						<option value="FO">Faroe Islands</option>
						<option value="FJ">Fiji</option>
						<option value="FI">Finland</option>
						<option value="FR">France</option>
						<option value="GF">French Guiana</option>
						<option value="PF">French Polynesia</option>
						<option value="TF">French Southern Territories</option>
						<option value="GA">Gabon</option>
						<option value="GM">Gambia</option>
						<option value="GE">Georgia</option>
						<option value="DE">Germany</option>
						<option value="GH">Ghana</option>
						<option value="GI">Gibraltar</option>
						<option value="GR">Greece</option>
						<option value="GL">Greenland</option>
						<option value="GD">Grenada</option>
						<option value="GP">Guadeloupe</option>
						<option value="GU">Guam</option>
						<option value="GT">Guatemala</option>
						<option value="GG">Guernsey</option>
						<option value="GN">Guinea</option>
						<option value="GW">Guinea-Bissau</option>
						<option value="GY">Guyana</option>
						<option value="HT">Haiti</option>
						<option value="HM">Heard Island and McDonald Islands</option>
						<option value="VA">Holy See (Vatican City State)</option>
						<option value="HN">Honduras</option>
						<option value="HK">Hong Kong</option>
						<option value="HU">Hungary</option>
						<option value="IS">Iceland</option>
						<option value="IN">India</option>
						<option value="ID">Indonesia</option>
						<option value="IR">Iran, Islamic Republic of</option>
						<option value="IQ">Iraq</option>
						<option value="IE">Ireland</option>
						<option value="IM">Isle of Man</option>
						<option value="IL">Israel</option>
						<option value="IT">Italy</option>
						<option value="JM">Jamaica</option>
						<option value="JP">Japan</option>
						<option value="JE">Jersey</option>
						<option value="JO">Jordan</option>
						<option value="KZ">Kazakhstan</option>
						<option value="KE">Kenya</option>
						<option value="KI">Kiribati</option>
						<option value="KP">Korea, Democratic People's Republic of</option>
						<option value="KR">Korea, Republic of</option>
						<option value="KW">Kuwait</option>
						<option value="KG">Kyrgyzstan</option>
						<option value="LA">Lao People's Democratic Republic</option>
						<option value="LV">Latvia</option>
						<option value="LB">Lebanon</option>
						<option value="LS">Lesotho</option>
						<option value="LR">Liberia</option>
						<option value="LY">Libya</option>
						<option value="LI">Liechtenstein</option>
						<option value="LT">Lithuania</option>
						<option value="LU">Luxembourg</option>
						<option value="MO">Macao</option>
						<option value="MK">
							Macedonia, the former Yugoslav Republic of
						</option>
						<option value="MG">Madagascar</option>
						<option value="MW">Malawi</option>
						<option value="MY">Malaysia</option>
						<option value="MV">Maldives</option>
						<option value="ML">Mali</option>
						<option value="MT">Malta</option>
						<option value="MH">Marshall Islands</option>
						<option value="MQ">Martinique</option>
						<option value="MR">Mauritania</option>
						<option value="MU">Mauritius</option>
						<option value="YT">Mayotte</option>
						<option value="MX">Mexico</option>
						<option value="FM">Micronesia, Federated States of</option>
						<option value="MD">Moldova, Republic of</option>
						<option value="MC">Monaco</option>
						<option value="MN">Mongolia</option>
						<option value="ME">Montenegro</option>
						<option value="MS">Montserrat</option>
						<option value="MA">Morocco</option>
						<option value="MZ">Mozambique</option>
						<option value="MM">Myanmar</option>
						<option value="NA">Namibia</option>
						<option value="NR">Nauru</option>
						<option value="NP">Nepal</option>
						<option value="NL">Netherlands</option>
						<option value="NC">New Caledonia</option>
						<option value="NZ">New Zealand</option>
						<option value="NI">Nicaragua</option>
						<option value="NE">Niger</option>
						<option value="NU">Niue</option>
						<option value="NF">Norfolk Island</option>
						<option value="MP">Northern Mariana Islands</option>
						<option value="NO">Norway</option>
						<option value="OM">Oman</option>
						<option value="PK">Pakistan</option>
						<option value="PW">Palau</option>
						<option value="PS">Palestinian Territory, Occupied</option>
						<option value="PA">Panama</option>
						<option value="PG">Papua New Guinea</option>
						<option value="PY">Paraguay</option>
						<option value="PE">Peru</option>
						<option value="PH">Philippines</option>
						<option value="PN">Pitcairn</option>
						<option value="PL">Poland</option>
						<option value="PT">Portugal</option>
						<option value="PR">Puerto Rico</option>
						<option value="QA">Qatar</option>
						<option value="RE">Réunion</option>
						<option value="RO">Romania</option>
						<option value="RU">Russian Federation</option>
						<option value="RW">Rwanda</option>
						<option value="BL">Saint Barthélemy</option>
						<option value="SH">
							Saint Helena, Ascension and Tristan da Cunha
						</option>
						<option value="KN">Saint Kitts and Nevis</option>
						<option value="LC">Saint Lucia</option>
						<option value="MF">Saint Martin (French part)</option>
						<option value="PM">Saint Pierre and Miquelon</option>
						<option value="VC">Saint Vincent and the Grenadines</option>
						<option value="WS">Samoa</option>
						<option value="SM">San Marino</option>
						<option value="ST">Sao Tome and Principe</option>
						<option value="SA">Saudi Arabia</option>
						<option value="SN">Senegal</option>
						<option value="RS">Serbia</option>
						<option value="SC">Seychelles</option>
						<option value="SL">Sierra Leone</option>
						<option value="SG">Singapore</option>
						<option value="SX">Sint Maarten (Dutch part)</option>
						<option value="SK">Slovakia</option>
						<option value="SI">Slovenia</option>
						<option value="SB">Solomon Islands</option>
						<option value="SO">Somalia</option>
						<option value="ZA">South Africa</option>
						<option value="GS">
							South Georgia and the South Sandwich Islands
						</option>
						<option value="SS">South Sudan</option>
						<option value="ES">Spain</option>
						<option value="LK">Sri Lanka</option>
						<option value="SD">Sudan</option>
						<option value="SR">Suriname</option>
						<option value="SJ">Svalbard and Jan Mayen</option>
						<option value="SZ">Swaziland</option>
						<option value="SE">Sweden</option>
						<option value="CH">Switzerland</option>
						<option value="SY">Syrian Arab Republic</option>
						<option value="TW">Taiwan, Province of China</option>
						<option value="TJ">Tajikistan</option>
						<option value="TZ">Tanzania, United Republic of</option>
						<option value="TH">Thailand</option>
						<option value="TL">Timor-Leste</option>
						<option value="TG">Togo</option>
						<option value="TK">Tokelau</option>
						<option value="TO">Tonga</option>
						<option value="TT">Trinidad and Tobago</option>
						<option value="TN">Tunisia</option>
						<option value="TR">Turkey</option>
						<option value="TM">Turkmenistan</option>
						<option value="TC">Turks and Caicos Islands</option>
						<option value="TV">Tuvalu</option>
						<option value="UG">Uganda</option>
						<option value="UA">Ukraine</option>
						<option value="AE">United Arab Emirates</option>
						<option value="GB">United Kingdom</option>
						<option value="US">United States</option>
						<option value="UM">United States Minor Outlying Islands</option>
						<option value="UY">Uruguay</option>
						<option value="UZ">Uzbekistan</option>
						<option value="VU">Vanuatu</option>
						<option value="VE">Venezuela, Bolivarian Republic of</option>
						<option value="VN">Viet Nam</option>
						<option value="VG">Virgin Islands, British</option>
						<option value="VI">Virgin Islands, U.S.</option>
						<option value="WF">Wallis and Futuna</option>
						<option value="EH">Western Sahara</option>
						<option value="YE">Yemen</option>
						<option value="ZM">Zambia</option>
						<option value="ZW">Zimbabwe</option>
					</select>
				</div>

				<div className="form-group col-md-4">
					<label>State</label>
					<select
						name="your_state"
						onChange={onchangeHandler}
						className="form-control"
					>
						<option value="Abia">Abia</option>
						<option value="Adamawa">Adamawa</option>
						<option value="Akwa Ibom">Akwa Ibom</option>
						<option value="Anambra">Anambra</option>
						<option value="Bauchi">Bauchi</option>
						<option value="Bayelsa">Bayelsa</option>
						<option value="Benue">Benue</option>
						<option value="Borno">Borno</option>
						<option value="Cross Rive">Cross River</option>
						<option value="Delta">Delta</option>
						<option value="Ebonyi">Ebonyi</option>
						<option value="Edo">Edo</option>
						<option value="Ekiti">Ekiti</option>
						<option value="Enugu">Enugu</option>
						<option value="FCT">Federal Capital Territory</option>
						<option value="Gombe">Gombe</option>
						<option value="Imo">Imo</option>
						<option value="Jigawa">Jigawa</option>
						<option value="Kaduna">Kaduna</option>
						<option value="Kano">Kano</option>
						<option value="Katsina">Katsina</option>
						<option value="Kebbi">Kebbi</option>
						<option value="Kogi">Kogi</option>
						<option value="Kwara">Kwara</option>
						<option value="Lagos">Lagos</option>
						<option value="Nasarawa">Nasarawa</option>
						<option value="Niger">Niger</option>
						<option value="Ogun">Ogun</option>
						<option value="Ondo">Ondo</option>
						<option value="Osun">Osun</option>
						<option value="Oyo">Oyo</option>
						<option value="Plateau">Plateau</option>
						<option value="Rivers">Rivers</option>
						<option value="Sokoto">Sokoto</option>
						<option value="Taraba">Taraba</option>
						<option value="Yobe">Yobe</option>
						<option value="Zamfara">Zamfara</option>
					</select>

					<MyAlert error={state.formErrors.your_state} />
				</div>

				<div className="form-group col-md-4">
					<label>City</label>
					<input
						type="text"
						value={state.myForm.city}
						onChange={onchangeHandler}
						className="form-control"
						name="city"
						id="inputCity"
					/>
					<MyAlert error={state.formErrors.city} />
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label>Postal Code</label>
					<input
						name="postalcode"
						value={state.myForm.postalcode}
						onChange={onchangeHandler}
						type="text"
						className="form-control"
					/>
					<MyAlert error={state.formErrors.postalcode} />
				</div>
				<div className="form-group col-md-6">
					<label>LGA</label>{" "}
					<span style={{ fontSize: 11 }}>
						{" "}
						( click <Link to="dashboard"> here </Link> to check )
					</span>
					<input
						name="lga"
						value={state.myForm.lga}
						onChange={onchangeHandler}
						type="text"
						className="form-control"
					/>
					<MyAlert error={state.formErrors.lga} />
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-4">
					<label>Bank Name</label>
					<input
						type="text"
						name="bank"
						value={state.myForm.bank}
						onChange={onchangeHandler}
						className="form-control"
					/>
					<MyAlert error={state.formErrors.bank} />
				</div>

				<div className="form-group col-md-4">
					<label>Account Name</label>
					<input
						type="text"
						name="bank_account_name"
						value={state.myForm.bank_account_name}
						onChange={onchangeHandler}
						className="form-control"
					/>
					<MyAlert error={state.formErrors.bank_account_name} />
				</div>

				<div className="form-group col-md-4">
					<label>Account Number</label>
					<input
						type="text"
						name="account"
						value={state.myForm.account}
						onChange={onchangeHandler}
						className="form-control"
					/>
					<MyAlert error={state.formErrors.account} />
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-4">
					<label style={{ display: "block" }}>Account Opening Date</label>
					<DatePicker
						selected={state.myForm.date_open_account}
						className="  form-control"
						name="date_open_account"
						dateFormat="yyyy-MM-dd"
						onChange={(date) => changeDateOpenAccount(date)}
					/>
				</div>

				<div className="form-group col-md-4">
					<label style={{ display: "block" }}>Acc Opening Req Date</label>
					<DatePicker
						selected={state.myForm.request_date}
						className="  form-control"
						name="request_date"
						dateFormat="yyyy-MM-dd"
						onChange={(date) => requestDate(date)}
					/>
				</div>

				<div className="form-group col-md-4">
					<label>Tax Identification Number</label>
					<input
						name="tax_id"
						type="text"
						value={state.myForm.tax_id}
						onChange={onchangeHandler}
						className="form-control"
					/>
					<MyAlert error={state.formErrors.tax_id} />
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-8">
					<label>Company Registration Number</label>
					<input
						name="company_reg"
						type="text"
						value={state.myForm.company_reg}
						onChange={onchangeHandler}
						className="form-control"
					/>
					<MyAlert error={state.formErrors.company_reg} />
				</div>
				<div className="form-group col-md-4">
					<label style={{ display: "block" }}>Company Reg Date</label>
					<DatePicker
						selected={state.myForm.company_reg_date}
						className=" form-control"
						name="company_reg_date"
						dateFormat="yyyy-MM-dd"
						onChange={(date) => companyRegDate(date)}
					/>
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-4">
					<label>Contact Person </label>
					<input
						type="text"
						name="contact_person"
						value={state.myForm.contact_person}
						onChange={onchangeHandler}
						className="form-control"
					/>
					<MyAlert error={state.formErrors.contact_person} />
				</div>

				<div className="form-group col-md-4">
					<label>Contact Person Phone</label>
					<input
						type="text"
						name="contact_person_phone"
						value={state.myForm.contact_person_phone}
						onChange={onchangeHandler}
						className="form-control"
					/>
					<MyAlert error={state.formErrors.contact_person_phone} />
				</div>

				<div className="form-group col-md-4">
					<label>BVN</label>
					<input
						type="text"
						name="bvn"
						value={state.myForm.bvn}
						onChange={onchangeHandler}
						className="form-control"
					/>
					<MyAlert error={state.formErrors.bvn} />
				</div>
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label>Nimc Number</label>
					<input
						type="text"
						value={state.myForm.nimco}
						name="nimco"
						onChange={onchangeHandler}
						className="form-control"
					/>
					<MyAlert error={state.formErrors.nimco} />
				</div>

				<div className="form-group col-md-6">
					<label>Bank Sort Code</label>

					<select
						name="sort_code"
						value={state.myForm.sort_code}
						onChange={onchangeHandler}
						className="form-control"
					>
						<option value="4000470158">ACCESS BANK</option>
						<option value="4000260192">CITIBANK NIGERLIA LTD</option>
						<option value="4020100130">
							CORONATION MERCHANT BANK LIMITED{" "}
						</option>
						<option value="4000630109">Diamond Bank Limited</option>
						<option value="4000460155">ECOBANK NIGERIA PLC</option>
						<option value="4000530176">ECOBANK (OLD OCEANIC)</option>
						<option value="4000720136">ENTERPRISE BANK OF NIG</option>
						<option value="4010160155">FIDELITY BANK</option>
						<option value="4010100137">FIRST CITY MONUMENT BANK PLC</option>
						<option value="4000370128">FIRST INLAND BANK PLC</option>
						<option value="4000070135">FIRSTBANK OF NIG PLC</option>
						<option value="4000560185">Guaranty Trust Bank</option>
						<option value="4000015030">HERITAGE BANK LTD</option>
						<option value="0000000000">JAIZ BANK PLC</option>

						<option value="4010270188">KEYSTONE BANK OF NIG</option>
						<option value="4000080138">MAINSTREET BANK OF NIG</option>
						<option value="4010350115">SKYE BANK PLC (POLARIS)</option>
						<option value="4010250182">STANBIC IBTC BANK PLC</option>
						<option value="4000710133">STANDARD CHARTERED BANK</option>
						<option value="4010030116">Sterling Bank PLC</option>
						<option value="4000090141">UNION BANK OF NIG PLC</option>
						<option value="44000120150">UNITED BANK FOR AFRICA</option>
						<option value="4000410140">UNITY BANK PLC</option>
						<option value="4000020120">WEMA BANK PLC</option>
						<option value="4000540179">Zenith International</option>
					</select>
					<MyAlert error={state.formErrors.sort_code} />
				</div>
			</div>
			<button
				disabled={!v.isformValid(state.myForm, state.formErrors)}
				type="submit"
				onClick={onSubmitHandler.bind(this)}
				className="btn btn-primary"
			>
				Submit
			</button>
		</form>
	);

	if (loading) {
		accountForm = <Spinner />;
	}

	return (
		<div>
			<ol className="breadcrumb">
				<li className="breadcrumb-item active">
					<Link to="open-account">Dashboard</Link>
				</li>
				<li className="breadcrumb-item ">
					<Link to="open-account">Open Account</Link>
				</li>
			</ol>

			{/* register */}

			<div className="card card-register ">
				<div className="card-body">
					{success ? <Redirect to="account-status" /> : null}
					{error ? <ResponseError error={error} /> : ""}
					{accountForm}
				</div>
			</div>
		</div>
	);
};

export default OpenAccount;
