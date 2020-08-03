import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { 
	ArticleCopy,
	ArticleFooter,
	ArticleHeader
} from './component-parts';

import './style.scss';

const ContentArticle = ( props, ref ) => {
	return(
		<>
			<ArticleHeader></ArticleHeader>
			<ArticleCopy></ArticleCopy>
			<ArticleFooter></ArticleFooter>
		</>
	)
}


ContentArticle.propTypes = {
}

ContentArticle.defaultProps = {
}

export default ContentArticle;
