import React, { Component } from 'react';
import './style.scss';


const A = ( props ) => {


	return <a href={props.href}>{props.children}</a>;

} 

export { A };