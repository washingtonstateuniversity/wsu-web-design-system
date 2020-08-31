// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getUtilityClasses } from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import {
	ImageFrame,
	EyebrowHeader,
	Title,
	Caption,
	WrapperLink,
} from '../../component-parts/index';

import './style.scss';

const EmContentOrderedList = () => {
	return (
		<ol class="wsu-c-em-content-ordered-list">
			<li>Apply for admission by January 31 – <a href="http://apply.wsu.edu/">apply.wsu.edu</a></li>
			<li>Upload your high school and college transcripts with your application</li>
			<li>Pay the $70 application fee or apply for a fee waiver</li>
			<li>Complete the General Scholarship Application by January 31 – <a href="http://scholarships.wsu.edu/">scholarships.wsu.edu</a></li><li>Submit your FAFSA or WASFA by the February 15 priority date – <a href="http://fafsa.gov">fafsa.gov</a>| <a href="http://readysetgrad.org/wasfa">readysetgrad.org/wasfa</a> | <a href="http://financialaid.wsu.edu">financialaid.wsu.edu</a></li>
		</ol>
	);
}

EmContentOrderedList.propTypes = {

}

EmContentOrderedList.defaultProps = {

}

export default EmContentOrderedList;