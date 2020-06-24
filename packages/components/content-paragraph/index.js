import React, { Component } from 'react';
import './component.scss';


const P = ( props ) => {

	let classes = ( props.width ) ? 'wsu-c-paragraph--' + props.width : '';

	return <p className={classes}>{props.children}</p>;

} 

export default P;