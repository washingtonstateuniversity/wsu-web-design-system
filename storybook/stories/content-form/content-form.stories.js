import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

// Storybook Imports
import ComponentWrapper from '../../../packages/storybook-components/content-wrapper';
import './content-form.scss';

// Story Time
export default {
	title: 'Elements/Forms',
	decorators: [
		withA11y,
		withKnobs
	]
};

export const DefaultForm = () => {
	return (
		<ComponentWrapper layout="content">
			<div className="wsu-c-form__wrapper">
				<form action="#" className="wsu-c-form__container">
					<div className="wsu-c-form__field-container--text">
						<label id="companyNameLabel" for="companyName">Company Name</label>
						<input type="text" name="companyName" id="companyName" aria-labelledby="companyNameLabel" placeholder="Type something..." />
					</div>

					<div className="wsu-c-form__field-container--password">
						<label id="passwordLabel" for="password">Password</label>
						<input type="password" name="password" id="password" aria-labelledby="passwordLabel" placeholder="Type something..." />
					</div>

					<div className="wsu-c-form__field-container--search">
						<label id="searchLabel" for="search">Search</label>
						<input type="search" name="search" id="search" aria-labelledby="searchLabel" placeholder="Type something..." />
					</div>

					<div className="wsu-c-form__field-container--textarea">
						<label id="textAreaLabel" for="textArea">Text Area</label>
						<textarea id="textArea" aria-labelledby="textAreaLabel" rows="4" cols="50" placeholder="Type something..."></textarea>
					</div>

					<div className="wsu-c-form__field-container--fieldset">
						<fieldset>
							<legend>Fieldset legend:</legend>
							<div className="wsu-c-form__field-container">
								<label id="firstNameLabel" for="firstName">First Name</label>
								<input type="text" name="firstName" id="firstName" aria-labelledby="firstNameLabel" placeholder="Type something..." />
							</div>
							<div className="wsu-c-form__field-container">
								<label id="lastNameLabel" for="lastName">Last Name</label>
								<input type="text" name="lastName" id="lastName" aria-labelledby="lastNameLabel" placeholder="Type something..." />
							</div>
							<div className="wsu-c-form__field-container">
								<label id="phoneNumberLabel" for="phoneNumber">Phone Number</label>
								<input type="tel" name="phoneNumber" id="phoneNumber" aria-labelledby="phoneNumberLabel" placeholder="Type something..." />
							</div>
							<div className="wsu-c-form__field-container">
								<label id="emailLabel" for="email">Email</label>
								<input type="email" name="email" id="email" aria-labelledby="emailLabel" placeholder="Type something..." />
							</div>
						</fieldset>
					</div>

					<div className="wsu-c-form__field-container--select">
						<label id="selectwithoptgroupLabel" for="selectwithoptgroup">Select w/ optgroup</label>
						<select id="selectwithoptgroup" aria-labelledby="selectwithoptgroupLabel">
							<optgroup label="Swedish Cars">
								<option value="volvo">Volvo</option>
								<option value="saab">Saab</option>
							</optgroup>
							<optgroup label="German Cars">
								<option value="mercedes">Mercedes</option>
								<option value="audi">Audi</option>
							</optgroup>
						</select>
					</div>
					<div className="wsu-c-form__field-container--select">
						<label id="selectLabel" for="select">Email</label>
						<select id="select" aria-labelledby="selectLabel">
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="mercedes">Mercedes</option>
							<option value="audi">Audi</option>
						</select>
					</div>
					<div className="wsu-c-form__field-container--radio">
						<div className="wsu-c-form__input-item">
							<input type="radio" id="pullmanRadio" name="city" value="pullmanRadio" checked />
							<label for="pullmanRadio">Pullman</label>
							<span className="wsu-c-form__input"></span>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="radio" id="spokaneRadio" name="city" value="spokaneRadio" />
							<label for="spokaneRadio">Spokane</label>
							<span className="wsu-c-form__input"></span>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="radio" id="tricitiesRadio" name="city" value="tricitiesRadio" />
							<label for="tricitiesRadio">Tri-Cities</label>
							<span className="wsu-c-form__input"></span>
						</div>
					</div>

					<div className="wsu-c-form__field-container--checkbox">
						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="moscowCheckbox" name="moscowCheckbox" />
							<label for="moscowCheckbox">Moscow</label>
							<span className="wsu-c-form__input"></span>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="pullmanCheckbox" name="pullmanCheckbox" />
							<label for="pullmanCheckbox">Pullman</label>
							<span className="wsu-c-form__input"></span>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="colfaxCheckbox" name="colfaxCheckbox" />
							<label for="colfaxCheckbox">Colfax</label>
							<span className="wsu-c-form__input"></span>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="albionCheckbox" name="albionCheckbox" />
							<label for="albionCheckbox">Albion</label>
							<span className="wsu-c-form__input"></span>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="clarkstonCheckbox" name="clarkstonCheckbox" />
							<label for="clarkstonCheckbox">Clarkston</label>
							<span className="wsu-c-form__input"></span>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="uniontownCheckbox" name="uniontownCheckbox" />
							<label for="uniontownCheckbox">Uniontown</label>
							<span className="wsu-c-form__input"></span>
						</div>
					</div>

					<button type="submit">Submit</button>
					<button type="reset">Reset</button>
				</form>
			</div>
			<form action="">
				<div>
					<label id="companyNameLabel" for="companyName">Company Name</label>
					<input type="text" name="companyName" id="companyName" aria-labelledby="companyNameLabel" placeholder="Type something..." />
				</div>

				<div>
					<label id="passwordLabel" for="password">Password</label>
					<input type="password" name="password" id="password" aria-labelledby="passwordLabel" placeholder="Type something..." />
				</div>

				<div>
					<label id="searchLabel" for="search">Search</label>
					<input type="search" name="search" id="search" aria-labelledby="searchLabel" placeholder="Type something..." />
				</div>

				<div>
					<label id="textAreaLabel" for="textArea">Text Area</label>
					<textarea id="textArea" aria-labelledby="textAreaLabel" rows="4" cols="50" placeholder="Type something..."></textarea>
				</div>

				<div>
					<fieldset>
						<legend>Fieldset legend:</legend>
						<div className="wsu-c-form__field-container">
							<label id="firstNameLabel" for="firstName">First Name</label>
							<input type="text" name="firstName" id="firstName" aria-labelledby="firstNameLabel" placeholder="Type something..." />
						</div>
						<div className="wsu-c-form__field-container">
							<label id="lastNameLabel" for="lastName">Last Name</label>
							<input type="text" name="lastName" id="lastName" aria-labelledby="lastNameLabel" placeholder="Type something..." />
						</div>
						<div className="wsu-c-form__field-container">
							<label id="phoneNumberLabel" for="phoneNumber">Phone Number</label>
							<input type="tel" name="phoneNumber" id="phoneNumber" aria-labelledby="phoneNumberLabel" placeholder="Type something..." />
						</div>
						<div className="wsu-c-form__field-container">
							<label id="emailLabel" for="email">Email</label>
							<input type="email" name="email" id="email" aria-labelledby="emailLabel" placeholder="Type something..." />
						</div>
					</fieldset>
				</div>

				<div>
					<label id="selectwithoptgroupLabel" for="selectwithoptgroup">Select w/ optgroup</label>
					<select id="selectwithoptgroup" aria-labelledby="selectwithoptgroupLabel">
						<optgroup label="Swedish Cars">
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
						</optgroup>
						<optgroup label="German Cars">
							<option value="mercedes">Mercedes</option>
							<option value="audi">Audi</option>
						</optgroup>
					</select>
				</div>
				<div>
					<label id="selectLabel" for="select">Email</label>
					<select id="select" aria-labelledby="selectLabel">
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="mercedes">Mercedes</option>
						<option value="audi">Audi</option>
					</select>
				</div>
				<div>
					<input type="radio" id="pullmanRadio2" name="city2" value="pullmanRadio2" checked />
					<label for="pullmanRadio2">Pullman</label>

					<input type="radio" id="spokaneRadio2" name="city2" value="spokaneRadio2" />
					<label for="spokaneRadio2">Spokane</label>

					<input type="radio" id="tricitiesRadio2" name="city2" value="tricitiesRadio2" />
					<label for="tricitiesRadio2">Tri-Cities</label>
				</div>

				<div>
					<input type="checkbox" id="moscowCheckbox2" name="moscowCheckbox2" checked />
					<label for="moscowCheckbox2">Moscow</label>

					<input type="checkbox" id="pullmanCheckbox2" name="pullmanCheckbox2" />
					<label for="pullmanCheckbox2">Pullman</label>

					<input type="checkbox" id="colfaxCheckbox2" name="colfaxCheckbox2" />
					<label for="colfaxCheckbox2">Colfax</label>

					<input type="checkbox" id="albionCheckbox2" name="albionCheckbox2" />
					<label for="albionCheckbox2">Albion</label>

					<input type="checkbox" id="clarkstonCheckbox2" name="clarkstonCheckbox2" />
					<label for="clarkstonCheckbox2">Clarkston</label>

					<input type="checkbox" id="uniontownCheckbox2" name="uniontownCheckbox2" />
					<label for="uniontownCheckbox2">Uniontown</label>
				</div>
				<button type="submit">Submit</button>
				<button type="reset">Reset</button>
			</form>

		</ComponentWrapper>
	)
}