import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { 
	ArticleCopy,
	ArticleFooter,
	ArticleHeader
} from './component-parts/components';

import './style.scss';

const ContentArticle = ( props, ref ) => {
	return(
		<article className="wsu-c-article">
			{props.children}
			<ArticleFooter></ArticleFooter>
		</article>
	)
}


ContentArticle.propTypes = {
}

ContentArticle.defaultProps = {
}

export default ContentArticle;
