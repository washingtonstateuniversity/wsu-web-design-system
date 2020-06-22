// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Deps
import '@wsuwebteam/wsu-icons';
import './content-icons.scss';

// Component Starts
class Icon extends Component {
	render() {
		return (
			<i className={'wsu-icon wsu-i-' + this.props.iconName}></i>
		);
	}
}

Icon.propTypes = {
	iconName: PropTypes.string
};

Icon.defaultProps = {
	iconName: 'alarm'
};

class IconCheatsheet extends Component {
	render() {
		return (
			<div className="icon-cheatsheet-container">
				<i className="wsu-icon wsu-i-alarm">
					<span>
						wsu-i-alarm<br />
						F101
					</span>
				</i>
				<i className="wsu-icon wsu-i-alert-notification">
					<span>
						wsu-i-alert-notification<br />
						F102
					</span>
				</i>
				<i className="wsu-icon wsu-i-arrow-down-carrot">
					<span>
						wsu-i-arrow-down-carrot<br />
						F103
					</span>
				</i>
				<i className="wsu-icon wsu-i-arrow-down">
					<span>
						wsu-i-arrow-down<br />
						F104
					</span>
				</i>
				<i className="wsu-icon wsu-i-arrow-left-carrot">
					<span>
						wsu-i-arrow-left-carrot<br />
						F105
					</span>
				</i>
				<i className="wsu-icon wsu-i-arrow-left">
					<span>
						wsu-i-arrow-left<br />
						F106
					</span>
				</i>
				<i className="wsu-icon wsu-i-arrow-right-carrot">
					<span>
						wsu-i-arrow-right-carrot<br />
						F107
					</span>
				</i>
				<i className="wsu-icon wsu-i-arrow-right">
					<span>
						wsu-i-arrow-right<br />
						F108
					</span>
				</i>
				<i className="wsu-icon wsu-i-arrow-up-carrot">
					<span>
						wsu-i-arrow-up-carrot<br />
						F109
					</span>
				</i>
				<i className="wsu-icon wsu-i-arrow-up">
					<span>
						wsu-i-arrow-up<br />
						F10A
					</span>
				</i>
				<i className="wsu-icon wsu-i-attachment">
					<span>
						wsu-i-attachment<br />
						F10B
					</span>
				</i>
				<i className="wsu-icon wsu-i-basket">
					<span>
						wsu-i-basket<br />
						F10C
					</span>
				</i>
				<i className="wsu-icon wsu-i-bookmark">
					<span>
						wsu-i-bookmark<br />
						F10D
					</span>
				</i>
				<i className="wsu-icon wsu-i-calendar">
					<span>
						wsu-i-calendar<br />
						F10E
					</span>
				</i>
				<i className="wsu-icon wsu-i-cart">
					<span>
						wsu-i-cart<br />
						F10F
					</span>
				</i>
				<i className="wsu-icon wsu-i-check">
					<span>
						wsu-i-check<br />
						F110
					</span>
				</i>
				<i className="wsu-icon wsu-i-collapse">
					<span>
						wsu-i-collapse<br />
						F111
					</span>
				</i>
				<i className="wsu-icon wsu-i-comment">
					<span>
						wsu-i-comment<br />
						F112
					</span>
				</i>
				<i className="wsu-icon wsu-i-contrast">
					<span>
						wsu-i-contrast<br />
						F113
					</span>
				</i>
				<i className="wsu-icon wsu-i-credit-card">
					<span>
						wsu-i-credit-card<br />
						F114
					</span>
				</i>
				<i className="wsu-icon wsu-i-cut">
					<span>
						wsu-i-cut<br />
						F115
					</span>
				</i>
				<i className="wsu-icon wsu-i-discussion">
					<span>
						wsu-i-discussion<br />
						F116
					</span>
				</i>
				<i className="wsu-icon wsu-i-document">
					<span>
						wsu-i-document<br />
						F117
					</span>
				</i>
				<i className="wsu-icon wsu-i-download">
					<span>
						wsu-i-download<br />
						F118
					</span>
				</i>
				<i className="wsu-icon wsu-i-edit">
					<span>
						wsu-i-edit<br />
						F119
					</span>
				</i>
				<i className="wsu-icon wsu-i-email">
					<span>
						wsu-i-email<br />
						F11A
					</span>
				</i>
				<i className="wsu-icon wsu-i-expand">
					<span>
						wsu-i-expand<br />
						F11B
					</span>
				</i>
				<i className="wsu-icon wsu-i-favorite">
					<span>
						wsu-i-favorite<br />
						F11C
					</span>
				</i>
				<i className="wsu-icon wsu-i-feedback">
					<span>
						wsu-i-feedback<br />
						F11D
					</span>
				</i>
				<i className="wsu-icon wsu-i-filter">
					<span>
						wsu-i-filter<br />
						F11E
					</span>
				</i>
				<i className="wsu-icon wsu-i-flag">
					<span>
						wsu-i-flag<br />
						F11F
					</span>
				</i>
				<i className="wsu-icon wsu-i-gallery">
					<span>
						wsu-i-gallery<br />
						F120
					</span>
				</i>
				<i className="wsu-icon wsu-i-graph">
					<span>
						wsu-i-graph<br />
						F121
					</span>
				</i>
				<i className="wsu-icon wsu-i-home">
					<span>
						wsu-i-home<br />
						F122
					</span>
				</i>
				<i className="wsu-icon wsu-i-info">
					<span>
						wsu-i-info<br />
						F123
					</span>
				</i>
				<i className="wsu-icon wsu-i-key">
					<span>
						wsu-i-key<br />
						F124
					</span>
				</i>
				<i className="wsu-icon wsu-i-light-bulb">
					<span>
						wsu-i-light-bulb<br />
						F125
					</span>
				</i>
				<i className="wsu-icon wsu-i-link">
					<span>
						wsu-i-link<br />
						F126
					</span>
				</i>
				<i className="wsu-icon wsu-i-location">
					<span>
						wsu-i-location<br />
						F127
					</span>
				</i>
				<i className="wsu-icon wsu-i-map-location">
					<span>
						wsu-i-map-location<br />
						F128
					</span>
				</i>
				<i className="wsu-icon wsu-i-map">
					<span>
						wsu-i-map<br />
						F129
					</span>
				</i>
				<i className="wsu-icon wsu-i-menu">
					<span>
						wsu-i-menu<br />
						F12A
					</span>
				</i>
				<i className="wsu-icon wsu-i-minus-circle">
					<span>
						wsu-i-minus-circle<br />
						F12B
					</span>
				</i>
				<i className="wsu-icon wsu-i-minus">
					<span>
						wsu-i-minus<br />
						F12C
					</span>
				</i>
				<i className="wsu-icon wsu-i-mobile">
					<span>
						wsu-i-mobile<br />
						F12D
					</span>
				</i>
				<i className="wsu-icon wsu-i-monitor">
					<span>
						wsu-i-monitor<br />
						F12E
					</span>
				</i>
				<i className="wsu-icon wsu-i-more-vertical">
					<span>
						wsu-i-more-vertical<br />
						F12F
					</span>
				</i>
				<i className="wsu-icon wsu-i-more">
					<span>
						wsu-i-more<br />
						F130
					</span>
				</i>
				<i className="wsu-icon wsu-i-next">
					<span>
						wsu-i-next<br />
						F131
					</span>
				</i>
				<i className="wsu-icon wsu-i-pause">
					<span>
						wsu-i-pause<br />
						F132
					</span>
				</i>
				<i className="wsu-icon wsu-i-phone">
					<span>
						wsu-i-phone<br />
						F133
					</span>
				</i>
				<i className="wsu-icon wsu-i-photos">
					<span>
						wsu-i-photos<br />
						F134
					</span>
				</i>
				<i className="wsu-icon wsu-i-play-circle">
					<span>
						wsu-i-play-circle<br />
						F135
					</span>
				</i>
				<i className="wsu-icon wsu-i-play">
					<span>
						wsu-i-play<br />
						F136
					</span>
				</i>
				<i className="wsu-icon wsu-i-plus">
					<span>
						wsu-i-plus<br />
						F137
					</span>
				</i>
				<i className="wsu-icon wsu-i-pluse-circle">
					<span>
						wsu-i-pluse-circle<br />
						F138
					</span>
				</i>
				<i className="wsu-icon wsu-i-previous">
					<span>
						wsu-i-previous<br />
						F139
					</span>
				</i>
				<i className="wsu-icon wsu-i-print">
					<span>
						wsu-i-print<br />
						F13A
					</span>
				</i>
				<i className="wsu-icon wsu-i-profile-circle">
					<span>
						wsu-i-profile-circle<br />
						F13B
					</span>
				</i>
				<i className="wsu-icon wsu-i-profile">
					<span>
						wsu-i-profile<br />
						F13C
					</span>
				</i>
				<i className="wsu-icon wsu-i-rate">
					<span>
						wsu-i-rate<br />
						F13D
					</span>
				</i>
				<i className="wsu-icon wsu-i-refresh">
					<span>
						wsu-i-refresh<br />
						F13E
					</span>
				</i>
				<i className="wsu-icon wsu-i-save">
					<span>
						wsu-i-save<br />
						F13F
					</span>
				</i>
				<i className="wsu-icon wsu-i-search">
					<span>
						wsu-i-search<br />
						F140
					</span>
				</i>
				<i className="wsu-icon wsu-i-secure">
					<span>
						wsu-i-secure<br />
						F141
					</span>
				</i>
				<i className="wsu-icon wsu-i-send">
					<span>
						wsu-i-send<br />
						F142
					</span>
				</i>
				<i className="wsu-icon wsu-i-settings">
					<span>
						wsu-i-settings<br />
						F143
					</span>
				</i>
				<i className="wsu-icon wsu-i-share">
					<span>
						wsu-i-share<br />
						F144
					</span>
				</i>
				<i className="wsu-icon wsu-i-social-facebook">
					<span>
						wsu-i-social-facebook<br />
						F145
					</span>
				</i>
				<i className="wsu-icon wsu-i-social-instagram">
					<span>
						wsu-i-social-instagram<br />
						F146
					</span>
				</i>
				<i className="wsu-icon wsu-i-social-linkedin">
					<span>
						wsu-i-social-linkedin<br />
						F147
					</span>
				</i>
				<i className="wsu-icon wsu-i-social-twitter">
					<span>
						wsu-i-social-twitter<br />
						F148
					</span>
				</i>
				<i className="wsu-icon wsu-i-social-youtube">
					<span>
						wsu-i-social-youtube<br />
						F149
					</span>
				</i>
				<i className="wsu-icon wsu-i-stop-circle">
					<span>
						wsu-i-stop-circle<br />
						F14A
					</span>
				</i>
				<i className="wsu-icon wsu-i-stop">
					<span>
						wsu-i-stop<br />
						F14B
					</span>
				</i>
				<i className="wsu-icon wsu-i-tag">
					<span>
						wsu-i-tag<br />
						F14C
					</span>
				</i>
				<i className="wsu-icon wsu-i-tent">
					<span>
						wsu-i-tent<br />
						F14D
					</span>
				</i>
				<i className="wsu-icon wsu-i-time">
					<span>
						wsu-i-time<br />
						F14E
					</span>
				</i>
				<i className="wsu-icon wsu-i-trash">
					<span>
						wsu-i-trash<br />
						F14F
					</span>
				</i>
				<i className="wsu-icon wsu-i-upload">
					<span>
						wsu-i-upload<br />
						F150
					</span>
				</i>
				<i className="wsu-icon wsu-i-video-slideshow">
					<span>
						wsu-i-video-slideshow<br />
						F151
					</span>
				</i>
				<i className="wsu-icon wsu-i-warning-caution">
					<span>
						wsu-i-warning-caution<br />
						F152
					</span>
				</i>
				<i className="wsu-icon wsu-i-warning-stop">
					<span>
						wsu-i-warning-stop<br />
						F153
					</span>
				</i>
				<i className="wsu-icon wsu-i-x-close">
					<span>
						wsu-i-x-close<br />
						F154
					</span>
				</i>
				<i className="wsu-icon wsu-i-zoom-in">
					<span>
						wsu-i-zoom-in<br />
						F155
					</span>
				</i>
				<i className="wsu-icon wsu-i-zoom-out">
					<span>
						wsu-i-zoom-out<br />
						F156
					</span>
				</i>
			</div>
		);
	}
}

export default Icon;
export { IconCheatsheet };