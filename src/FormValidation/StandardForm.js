const emailRegx = RegExp(/^\w+([-._]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

class StandardForm {
	// constructor(){
	//     this.type = type;
	//     this.css = css;
	// }



	isformValid = (formValue, formErrors) => {
		let Valid = true;
		// check for error fields
		Object.values(formErrors).forEach((elem) => {
			elem.length > 0 && (Valid = false); //
			// console.log(elem.length,' form errors');
		});
		// check form value fields
		Object.values(formValue).forEach((elem) => {
			elem === "" && (Valid = false);
			// console.log(elem,' form values');
		});
		console.log(Valid);
		return Valid;
	};

	alert = (value) => {
		// values is the form errors
		if (value.length > 1) {
			return value;
		}
	};

	validation = (name, value, formErrsState, formValueState) => {
		// const {name,value} = event.target;
		// let formErrsState = this.state.myForm.formErrors;
		// let formValueState = this.state.myForm;
		const arr = {
			errorState: null,
			valueState: null,
		};

		switch (name) {
			case "name":
				formErrsState.name =
					value.length < 5 ? "Name must be more than of 5 characters" : "";
				formValueState.name = value;
				break;

			case "vendor_name":
				formErrsState.vendor_name =
					value.length < 5
						? "Vendor Name must be more than of 5 characters"
						: "";
				formValueState.vendor_name = value;
				break;
			case "maiden_name":
				formErrsState.maiden_name =
					value.length < 5
						? "maiden Name must be more than of 5 characters"
						: "";
				formValueState.maiden_name = value;
				break;
			case "firstname":
				formErrsState.firstname =
					value.length < 2
						? "First name must be more than of 2 characters"
						: "";
				formValueState.firstname = value;
				break;
			case "lastname":
				formErrsState.lastname =
					value.length < 2 ? "Last name must be more than of 2 characters" : "";
				formValueState.lastname = value;
				break;

			case "accounttype":
				formErrsState.accounttype =
					value.length < 5
						? "accounttype must be more than of 8 characters"
						: "";
				formValueState.accounttype = value;
				break;

			case "dob":
				formErrsState.dob = value.length < 5 ? "Date of Birth Required " : "";
				formValueState.dob = value;
				break;

			case "postalcode":
				formErrsState.postalcode =
					value.length < 5 ? "Postal code Required " : "";
				formValueState.postalcode = value;
				break;

			case "bank":
				formErrsState.bank = value.length < 5 ? "Bank Name Required " : "";
				formValueState.bank = value;
				break;

			case "nimco":
				formErrsState.nimco =
					value.length < 5 || isNaN(value) ? "NIMC Number Required " : "";
				formValueState.nimco = value;
				break;

			case "bank_account_name":
				formErrsState.bank_account_name =
					value.length < 10  ? "Account Name Required " : "";
				formValueState.bank_account_name = value;
				break;

			case "account":
				formErrsState.account =
					value.length < 10 || isNaN(value) ? "Account Number Required " : "";
				formValueState.account = value;
				break;

			case "date_open_account":
				formErrsState.date_open_account =
					value.length < 5 ? "Account Opening Date Required " : "";
				formValueState.date_open_account = value;
				break;

			case "company_reg":
				formErrsState.company_reg =
					value.length < 5 ? "Company Registration Required " : "";
				formValueState.company_reg = value;
				break;

			case "citizen":
				formErrsState.citizen = value.length < 5 ? "Are you a citizen " : "";
				formValueState.citizen = value;
				break;

			case "contact_person_phone":
				formErrsState.contact_person_phone =
					value.length < 10 || isNaN(value)
						? "Contact Person's Number Required "
						: "";
				formValueState.contact_person_phone = value;
				break;

			case "contact_person":
				formErrsState.contact_person =
					value.length < 8 ? "Contact's Name Required " : "";
				formValueState.contact_person = value;
				break;

			case "company_reg_date":
				formErrsState.company_reg_date =
					value.length < 5 ? "Company Registration Date Required " : "";
				formValueState.company_reg_date = value;
				break;

			case "member_number":
				formErrsState.member_number =
					value.length < 3 ? "Member Required " : "";
				formValueState.member_number = value;
				break;

			case "bvn":
				formErrsState.bvn =
					value.length < 11 || isNaN(value) ? "BVN Required " : "";
				formValueState.bvn = value;
				break;

			case "ref_no":
				formErrsState.ref_no =
					value.length < 5 ? "Reference Number Required " : "";
				formValueState.ref_no = value;
				break;

			case "lga":
				formErrsState.lga = value.length < 5 ? "LGA Required " : "";
				formValueState.lga = value;
				break;

			case "fullname":
				formErrsState.fullname =
					value.length < 5 ? "Fullname must be more than of 8 characters" : "";
				formValueState.fullname = value;
				break;
			case "phone":
				formErrsState.phone =
					value.length < 6 || isNaN(value)
						? "Please provide a valid Phone number"
						: "";
				formValueState.phone = value;
				break;

			case "phone1":
				formErrsState.phone1 =
					value.length < 6 || isNaN(value)
						? "Please provide a valid Phone number"
						: "";
				formValueState.phone1 = value;
				break;

			case "phone2":
				formErrsState.phone2 =
					value.length < 6 || isNaN(value)
						? "Please provide a valid Phone number"
						: "";
				formValueState.phone2 = value;
				break;
				case "nx_phone":
					formErrsState.nx_phone =
						value.length < 6 || isNaN(value)
							? "Please provide a valid Phone number for next of kin"
							: "";
					formValueState.nx_phone = value;
					break;
			case "sort_code":
				formErrsState.sort_code =
					value.length < 5 || isNaN(value) ? "Sort Code Required " : "";
				formValueState.sort_code = value;
				break;

			case "tax_id":
				formErrsState.tax_id =
					value.length < 4 || isNaN(value) ? "Tax_id Required " : "";
				formValueState.tax_id = value;
				break;

			case "comments":
				formErrsState.comments =
					value.length === 0 || value.length > 2 ? "" : "";
				formValueState.comments = value;
				break;
			case "mobile":
				formErrsState.mobile =
					value.length < 6 || isNaN(value)
						? "Please provide a valid Mobile number"
						: "";
				formValueState.mobile = value;
				break;
			case "amount":
				formErrsState.amount =
					value.length < 1 || isNaN(value)
						? "Please provide a valid Amount"
						: "";
				formValueState.amount = value;
				break;
			case "capital":
				formErrsState.capital =
					value.length < 1 || isNaN(value)
						? "Please provide a valid initial capital"
						: "";
				formValueState.capital = value;
				break;
			case "email":
				formErrsState.email =
					value.length > 0 && emailRegx.test(value)
						? ""
						: "Must enter a valid email address";
				formValueState.email = value;
				break;

			case "alt_email":
				formErrsState.alt_email =
					value.length > 0 && emailRegx.test(value)
						? ""
						: "Must enter a valid alt_email address";
				formValueState.alt_email = value;
				break;

			case "currency":
				formErrsState.currency =
					value.length < 3 ? "Please provide a valid currency" : "";
				formValueState.currency = value;
				break;
			case "gender":
				formErrsState.gender =
					value === "select" ? "Please select a valid gender" : "";
				formValueState.gender = value;
				break;
			case "zip":
				formErrsState.zip = value.length < 2 ? "Please select a valid zip" : "";
				formValueState.zip = value;
				break;
			case "city":
				formErrsState.city =
					value.length < 2 ? "Please Enter a valid city" : "";
				formValueState.city = value;
				break;
			case "your_state":
				formErrsState.your_state =
					value.length < 3 ? "Please Enter a valid state" : "";
				formValueState.your_state = value;
				break;
			case "country":
				formErrsState.country =
					value === "select" ? "Please select a valid country" : "";
				formValueState.country = value;
				break;
			case "purpose":
				formErrsState.purpose =
					value.length < 3 ? "Please Enter a valid purpose" : "";
				formValueState.purpose = value;
				break;
			case "password":
				formErrsState.password =
					value.length < 6 ? "Password cannot be less than 6" : "";
				formValueState.password = value;
				break;
			case "status":
				formErrsState.status =
					value === "Choose..." ? "Please select a valid status" : "";
				formValueState.status = value;
				break;
			case "address":
				formErrsState.address =
					value.length < 5 ? "Address - minimum of 6 character" : "";
				formValueState.address = value;
				break;
			default:
				break;
		}
		arr.errorState = formErrsState;
		arr.valueState = formValueState;
		return arr;
	};
}

export default StandardForm;
