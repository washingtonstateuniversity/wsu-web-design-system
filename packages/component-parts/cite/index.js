import React from 'react';
import empty from '../../storybook-components/field-checker';


const Cite = ( props ) => {

	if ( empty( props.cite ) ) {
		return null;
	}

	let prefix = ( props.prefix ) ? props.prefix : 'wsu-c-cite';


	return (
		<cite className={ prefix }>
				{ props.cite }
		</cite>
	);

}


Cite.defaultProps = {
	cite: '',
	prefix:'',
}

export default Cite;