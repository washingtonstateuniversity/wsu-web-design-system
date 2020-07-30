import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ContentArticleHeader = ( props, ref ) => {
	return(
		<>
			<header className="wsu-c-article-header">
				<h1>The quick crimson cougar jumps over the lazy husky</h1>
				<div className="wsu-c-article-header__meta__wrapper">
					<ul className="wsu-c-article-header__meta">
						<li className="wsu-c-article-header__meta__item wsu-c-article-header__meta__item__date">April 7, 2020</li>
						<li className="wsu-c-article-header__meta__item wsu-c-article-header__meta__item__author">By <a href="#">Butch Cougar</a></li>
					</ul>
				</div>
			</header>
		</>
	)
}


ContentArticleHeader.propTypes = {
}

ContentArticleHeader.defaultProps = {
}

export default ContentArticleHeader;
