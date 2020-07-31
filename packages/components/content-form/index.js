import React from 'react';

const ContentForm = () => {
	console.log('No Content Form components at this time.');
	return null;
}

const ContentFormCheatsheet = () => {
	return (
		<>
			<div className="wsu-c-form__wrapper">
				<form action="#" className="wsu-c-form__container">
					<div className="wsu-c-form__field-container--text">
						<label id="companyNameLabel" htmlFor="companyName">Company Name</label>
						<input type="text" name="companyName" id="companyName" aria-labelledby="companyNameLabel" placeholder="Type something..." />
					</div>

					<div className="wsu-c-form__field-container--password">
						<label id="passwordLabel" htmlFor="password">Password</label>
						<input type="password" name="password" id="password" aria-labelledby="passwordLabel" placeholder="Type something..." />
					</div>

					<div className="wsu-c-form__field-container--search">
						<label id="searchLabel" htmlFor="search">Search</label>
						<input type="search" name="search" id="search" aria-labelledby="searchLabel" placeholder="Type something..." />
					</div>

					<div className="wsu-c-form__field-container--textarea">
						<label id="textAreaLabel" htmlFor="textArea">Text Area</label>
						<textarea id="textArea" aria-labelledby="textAreaLabel" rows="4" cols="50" placeholder="Type something..."></textarea>
					</div>

					<div className="wsu-c-form__field-container--fieldset">
						<fieldset>
							<legend>Fieldset legend:</legend>
							<div className="wsu-c-form__field-container">
								<label id="firstNameLabel" htmlFor="firstName">First Name</label>
								<input type="text" name="firstName" id="firstName" aria-labelledby="firstNameLabel" placeholder="Type something..." />
							</div>
							<div className="wsu-c-form__field-container">
								<label id="lastNameLabel" htmlFor="lastName">Last Name</label>
								<input type="text" name="lastName" id="lastName" aria-labelledby="lastNameLabel" placeholder="Type something..." />
							</div>
							<div className="wsu-c-form__field-container">
								<label id="phoneNumberLabel" htmlFor="phoneNumber">Phone Number</label>
								<input type="tel" name="phoneNumber" id="phoneNumber" aria-labelledby="phoneNumberLabel" placeholder="Type something..." />
							</div>
							<div className="wsu-c-form__field-container">
								<label id="emailLabel" htmlFor="email">Email</label>
								<input type="email" name="email" id="email" aria-labelledby="emailLabel" placeholder="Type something..." />
							</div>
						</fieldset>
					</div>

					<div className="wsu-c-form__field-container--select">
						<label id="selectwithoptgroupLabel" htmlFor="selectwithoptgroup">Select w/ optgroup</label>
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
						<label id="selectLabel" htmlFor="select">Email</label>
						<select id="select" aria-labelledby="selectLabel">
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="mercedes">Mercedes</option>
							<option value="audi">Audi</option>
						</select>
					</div>
					<div className="wsu-c-form__field-container--radio">
						<div className="wsu-c-form__input-item">
							<input type="radio" id="pullmanRadio" name="city" value="pullmanRadio" />
							<label htmlFor="pullmanRadio">Pullman</label>
							<span className="wsu-c-form__input"></span>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="radio" id="spokaneRadio" name="city" value="spokaneRadio" />
							<label htmlFor="spokaneRadio">Spokane</label>
							<span className="wsu-c-form__input"></span>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="radio" id="tricitiesRadio" name="city" value="tricitiesRadio" />
							<label htmlFor="tricitiesRadio">Tri-Cities</label>
							<span className="wsu-c-form__input"></span>
						</div>
					</div>

					<div className="wsu-c-form__field-container--checkbox">
						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="moscowCheckbox" name="moscowCheckbox" />
							<label htmlFor="moscowCheckbox">Moscow</label>
							<span className="wsu-c-form__input"></span>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="pullmanCheckbox" name="pullmanCheckbox" />
							<label htmlFor="pullmanCheckbox">Pullman</label>
							<span className="wsu-c-form__input"></span>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="colfaxCheckbox" name="colfaxCheckbox" />
							<label htmlFor="colfaxCheckbox">Colfax</label>
							<span className="wsu-c-form__input"></span>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="albionCheckbox" name="albionCheckbox" />
							<label htmlFor="albionCheckbox">Albion</label>
							<span className="wsu-c-form__input"></span>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="clarkstonCheckbox" name="clarkstonCheckbox" />
							<label htmlFor="clarkstonCheckbox">Clarkston</label>
							<span className="wsu-c-form__input"></span>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="uniontownCheckbox" name="uniontownCheckbox" />
							<label htmlFor="uniontownCheckbox">Uniontown</label>
							<span className="wsu-c-form__input"></span>
						</div>
					</div>

					<button type="submit">Submit</button>
					<button type="reset">Reset</button>
				</form>
			</div>
			<form action="">
				<div>
					<label id="companyNameLabel" htmlFor="companyName">Company Name</label>
					<input type="text" name="companyName2" id="companyName2" aria-labelledby="companyNameLabel" placeholder="Type something..." />
				</div>

				<div>
					<label id="passwordLabel2" htmlFor="password">Password</label>
					<input type="password" name="password2" id="password2" aria-labelledby="passwordLabel" placeholder="Type something..." />
				</div>

				<div>
					<label id="searchLabel2" htmlFor="search">Search</label>
					<input type="search" name="search2" id="search2" aria-labelledby="searchLabel" placeholder="Type something..." />
				</div>

				<div>
					<label id="textAreaLabel2" htmlFor="textArea">Text Area</label>
					<textarea id="textArea2" aria-labelledby="textAreaLabel" rows="4" cols="50" placeholder="Type something..."></textarea>
				</div>

				<div>
					<fieldset>
						<legend>Fieldset legend:</legend>
						<div className="wsu-c-form__field-container">
							<label id="firstNameLabel2" htmlFor="firstName">First Name</label>
							<input type="text" name="firstName2" id="firstName2" aria-labelledby="firstNameLabel" placeholder="Type something..." />
						</div>
						<div className="wsu-c-form__field-container">
							<label id="lastNameLabel2" htmlFor="lastName">Last Name</label>
							<input type="text" name="lastName2" id="lastName2" aria-labelledby="lastNameLabel" placeholder="Type something..." />
						</div>
						<div className="wsu-c-form__field-container">
							<label id="phoneNumberLabel2" htmlFor="phoneNumber">Phone Number</label>
							<input type="tel" name="phoneNumber2" id="phoneNumber2" aria-labelledby="phoneNumberLabel" placeholder="Type something..." />
						</div>
						<div className="wsu-c-form__field-container">
							<label id="emailLabel2" htmlFor="email">Email</label>
							<input type="email" name="email2" id="email2" aria-labelledby="emailLabel" placeholder="Type something..." />
						</div>
					</fieldset>
				</div>

				<div>
					<label id="selectwithoptgroupLabel2" htmlFor="selectwithoptgroup">Select w/ optgroup</label>
					<select id="selectwithoptgroup2" aria-labelledby="selectwithoptgroupLabel">
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
					<label id="selectLabel2" htmlFor="select">Email</label>
					<select id="select2" aria-labelledby="selectLabel">
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="mercedes">Mercedes</option>
						<option value="audi">Audi</option>
					</select>
				</div>
				<div>
					<input type="radio" id="pullmanRadio22" name="city22" value="pullmanRadio2" />
					<label htmlFor="pullmanRadio2">Pullman</label>

					<input type="radio" id="spokaneRadio22" name="city22" value="spokaneRadio2" />
					<label htmlFor="spokaneRadio2">Spokane</label>

					<input type="radio" id="tricitiesRadio22" name="city22" value="tricitiesRadio2" />
					<label htmlFor="tricitiesRadio2">Tri-Cities</label>
				</div>

				<div>
					<input type="checkbox" id="moscowCheckbox22" name="moscowCheckbox22" />
					<label htmlFor="moscowCheckbox2">Moscow</label>

					<input type="checkbox" id="pullmanCheckbox22" name="pullmanCheckbox22" />
					<label htmlFor="pullmanCheckbox2">Pullman</label>

					<input type="checkbox" id="colfaxCheckbox22" name="colfaxCheckbox22" />
					<label htmlFor="colfaxCheckbox2">Colfax</label>

					<input type="checkbox" id="albionCheckbox22" name="albionCheckbox22" />
					<label htmlFor="albionCheckbox2">Albion</label>

					<input type="checkbox" id="clarkstonCheckbox22" name="clarkstonCheckbox22" />
					<label htmlFor="clarkstonCheckbox2">Clarkston</label>

					<input type="checkbox" id="uniontownCheckbox22" name="uniontownCheckbox22" />
					<label htmlFor="uniontownCheckbox2">Uniontown</label>
				</div>
				<button type="submit">Submit</button>
				<button type="reset">Reset</button>
			</form>
		</>
	)
}

export default ContentForm;
export { ContentFormCheatsheet };