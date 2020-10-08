import React, { Component } from 'react';


const ContentBlockquoteCite = ( props ) => {

	if ( '' == props.cite ) {

		return null;

	} else if ( '' != props.citeUrl ) {

		return (
			<cite className="wsu-c-blockquote__footer-cite">
				<a href={props.citeUrl}  className="wsu-c-blockquote__footer-cite-link">
					{props.cite}
				</a>
			</cite>
		);

	} else {

		return (
			<cite className="wsu-c-blockquote__footer-cite">{props.cite}</cite>
		);
	}

}

const ContentBlockquoteName = ( props ) => {

	if ( '' == props.name && '' == props.title ) {

		return null;

	} else {

		return (
			<>
				{ '' != props.name && <span className="wsu-c-blockquote__footer-name">{props.name}</span>}
				{ '' != props.title && <span className="wsu-c-blockquote__footer-title">{props.title}</span>}
			</>
		);

	}

}


const ContentBlockquoteFooter = ( props ) => {

	if ( ! props.name && ! props.cite && ! props.title ) {

		return null;

	} else {


		return (
			<footer className={props.className}>
				<ContentBlockquoteName name={props.name} title={props.title} />
				<ContentBlockquoteCite cite={props.cite} citeUrl={props.citeUrl} />
			</footer>
		)

	}

}

ContentBlockquoteFooter.defaultProps = {
	name: '',
	title: '',
	cite: '',
	citeUrl: '',
	className: 'wsu-c-blockquote__footer',
}

ContentBlockquoteCite.defaultProps = {
	cite: '',
	citeUrl: '',
}

ContentBlockquoteName.defaultProps = {
	name: '',
	title: '',
}

export default ContentBlockquoteFooter;
