import React from 'react';

import './style.scss';

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

					<label>City Radio</label>
					<div className="wsu-c-form__field-container--radio">
						<div className="wsu-c-form__input-item">
							<input type="radio" id="pullmanRadio" name="city" value="pullmanRadio" />
							<label htmlFor="pullmanRadio">Pullman</label>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="radio" id="spokaneRadio" name="city" value="spokaneRadio" />
							<label htmlFor="spokaneRadio">Spokane</label>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="radio" id="tricitiesRadio" name="city" value="tricitiesRadio" />
							<label htmlFor="tricitiesRadio">Tri-Cities</label>
						</div>
					</div>

					<label>City Checkbox</label>
					<div className="wsu-c-form__field-container--checkbox">
						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="moscowCheckbox" name="moscowCheckbox" />
							<label htmlFor="moscowCheckbox">Moscow</label>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="pullmanCheckbox" name="pullmanCheckbox" />
							<label htmlFor="pullmanCheckbox">Pullman</label>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="colfaxCheckbox" name="colfaxCheckbox" />
							<label htmlFor="colfaxCheckbox">Colfax</label>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="albionCheckbox" name="albionCheckbox" />
							<label htmlFor="albionCheckbox">Albion</label>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="clarkstonCheckbox" name="clarkstonCheckbox" />
							<label htmlFor="clarkstonCheckbox">Clarkston</label>
						</div>

						<div className="wsu-c-form__input-item">
							<input type="checkbox" id="uniontownCheckbox" name="uniontownCheckbox" />
							<label htmlFor="uniontownCheckbox">Uniontown</label>
						</div>
					</div>

					<button type="submit">Submit</button>
				</form>
			</div>
		</>
	)
}

export default ContentForm;
export { ContentFormCheatsheet };