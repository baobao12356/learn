import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Field, reduxForm } from 'redux-form';

import cx from 'classnames'; 
import s from './PageThree.scss';
import n from '../base/Base.css';

class RenderField extends React.Component{
	constructor(props) {
		super(props);
		
	}
	render() {
		// console.log('@@@#@',this.props)
		const { input, label, type, meta: { touched, error, warning } } = this.props;
		// console.log(type)
		const cc= (type=='checkbox') ? 'specialBox' : 'inputBox'
		return(
			<div className={cx(s[cc])}>
			      <label>{label}</label>
			      <input {...input} placeholder={label} type={type}/>
			      {touched && error && <span style={{color:'red',paddingLeft:'20px'}}>{error}</span>}
			</div>
		)
	}
}


class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		console.log(this.props)
		const { handleSubmit, pristine, reset, submitting } = this.props;
		return(
	        <form onSubmit={handleSubmit} className={cx(s.form)}>
		      <Field name="firstName" type="text" component={RenderField} label="First Name"/>

		      <Field name="lastName" type="text" component={RenderField} label="Last Name"/>

		      <Field name="email" type="text" component={RenderField} label="Email"/>

		     
		      <div className={cx(s.radioBox)}>
		        <label>Sex</label>
		          <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
		          <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
		      </div>
		      <div className={cx(s.selectBox)}>
		        <label>Favorite Color</label>
		        <Field name="favoriteColor" component="select">
		            <option value="ff0000">Red</option>
		            <option value="00ff00">Green</option>
		            <option value="0000ff">Blue</option>
		        </Field>
		      </div>

		      <Field name="employed" type="checkbox" component={RenderField} label="Employed"/>

		      <div className={cx(s.notesBox)}>
		        	<label>Notes</label>
		          	<Field name="notes" component="textarea"/>
		      </div>
		      <div className={cx(s.buttonBox)}>
		        <button type="submit" disabled={pristine || submitting}>Submit</button>
		        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
		      </div>
		    </form>
		)
	}
}
const validate = values => {
	const errors = {};
	if (!values.firstName) {
	    errors.firstName = 'Required'
	} else if (values.firstName.length > 15) {
	    errors.firstName = 'Must be 15 characters or less'
	}

	if (!values.lastName) {
	    errors.lastName = 'Required'
	} else if (values.lastName.length > 15) {
	    errors.lastName = 'Must be 15 characters or less'
	}

	if (!values.email) {
	    errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
	    errors.email = 'Invalid email address'
	}

	if (!values.sex) {
	    errors.sex = 'Required'
	}

	if (!values.favoriteColor) {
	    errors.favoriteColor = 'Required'
	}

	if (!values.notes) {
	    errors.notes = 'Required'
	}
	return errors;
}


// Decorate the form component
ContactForm = reduxForm({
  form: 'contact', // a unique name for this form
  validate
})(ContactForm);



export class Greater extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			values:'{}'
		}
		
	}
	handleSubmit(values){
		console.log(values)
		// const  aaa=JSON.stringify(values)
		this.setState({
			values
		})
	}
	render() {
		const { values } = this.state;
		return(
			<div>
				<ContactForm onSubmit={this.handleSubmit}></ContactForm>
				<div className={cx(s.dataBox)}>
					 <p><span>"firstName":</span> <i>{values.firstName}</i></p>
					 <p><span>"lastName":</span><i>{values.lastName}</i></p>
					 <p><span>"email":</span><i>{values.email}</i></p>
					 <p><span>"sex":</span><i>{values.sex}</i></p>
					 <p><span>"favoriteColor":</span><i>{values.favoriteColor}</i></p>
					 <p><span>"employed":</span><i>{values.employed? values.employed.toString() : ''}</i></p>
					 <p><span>"notes":</span><i>{values.notes}</i></p>
				</div>
			</div>
			 
		)
	}
}

export default Greater



