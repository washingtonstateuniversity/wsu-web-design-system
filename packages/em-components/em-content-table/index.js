// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import {
	ImageFrame,
	EyebrowHeader,
	Title,
	Caption,
	WrapperLink,
} from '../../component-parts/index';

import './style.scss';

const EmContentTable = () => {
	return (
		<figure class="wsu-c-em-table">
			<table>
				<thead>
					<tr>
						<th></th>
						<th>WA Resident</th>
						<th>Non-WA Resident</th>
						<th>WUE Recipient</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tuition:</td>
						<td>$10,760</td>
						<td>$25,702</td>
						<td>$14,702</td>
					</tr>
					<tr>
						<td>Mandatory fees:</td>
						<td>$1,313</td>
						<td>$1,313</td>
						<td>$1,313</td>
					</tr>
					<tr>
						<td>Housing:</td>
						<td>$6,822</td>
						<td>$6,822</td>
						<td>$6,822</td>
					</tr>
					<tr>
						<td>Dining:</td>
						<td>$4,300</td>
						<td>$4,300</td>
						<td>$4,300</td>
					</tr>
					<tr>
						<td>Books:</td>
						<td>$960</td>
						<td>$960</td>
						<td>$960</td>
					</tr>
					<tr>
						<td>Total:</td>
						<td>$24,909</td>
						<td>$39,097</td>
						<td>$28,097</td>
					</tr>
				</tbody>
			</table>
			<figcaption>*Costs are subject to change.</figcaption>
		</figure>
	);
}

EmContentTable.propTypes = {

}

EmContentTable.defaultProps = {

}

export default EmContentTable;