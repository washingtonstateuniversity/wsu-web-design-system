// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Deps
import '@wsuwebteam/wsu-icons';
import './style.scss';

// Component Starts
class Icon extends Component {
	render() {

		if ( '' == this.props.name ) {
			return null;
		}
		
		return (
			<i className={'wsu-icon wsu-i-' + this.props.name}></i>
		);
	}
}

Icon.propTypes = {
	name: PropTypes.string
};

Icon.defaultProps = {
	name: ''
};

class IconCheatsheet extends Component {
	render() {
		return (
			<div className="icon-cheatsheet-container">
				<i className="wsu-icon wsu-i-alarm">
					<div className="icon-spec-container">
						<div className="icon-spec-container_item"><span className="label">Name</span> alarm</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-alarm</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F101</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-alert-notification">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> alert-notification</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-alert-notification</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F102</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-down-carrot">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-down-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-down-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F103</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-down">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-down</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-down</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F104</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-left-carrot">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-left-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-left-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F105</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-left">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-left</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-left</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F106</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-right-carrot">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-right-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-right-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F107</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-right">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-right</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-right</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F108</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-up-carrot">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-up-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-up-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F109</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-up">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-up</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-up</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F10A</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-attachment">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> attachment</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-attachment</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F10B</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-basket">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> basket</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-basket</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F10C</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-bookmark">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> bookmark</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-bookmark</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F10D</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-calendar">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> calendar</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-calendar</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F10E</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-cart">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> cart</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-cart</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F10F</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-check">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> check</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-check</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F110</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-collapse">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> collapse</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-collapse</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F111</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-comment">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> comment</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-comment</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F112</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-contrast">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> contrast</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-contrast</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F113</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-credit-card">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> credit-card</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-credit-card</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F114</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-cut">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> cut</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-cut</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F115</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-discussion">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> discussion</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-discussion</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F116</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-document">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> document</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-document</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F117</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-download">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> download</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-download</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F118</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-edit">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> edit</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-edit</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F119</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-email">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> email</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-email</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F11A</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-expand">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> expand</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-expand</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F11B</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-favorite">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> favorite</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-favorite</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F11C</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-feedback">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> feedback</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-feedback</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F11D</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-filter">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> filter</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-filter</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F11E</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-flag">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> flag</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-flag</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F11F</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-gallery">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> gallery</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-gallery</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F120</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-graph">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> graph</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-graph</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F121</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-home">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> home</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-home</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F122</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-info">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> info</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-info</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F123</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-key">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> key</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-key</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F124</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-light-bulb">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> light-bulb</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-light-bulb</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F125</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-link">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> link</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-link</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F126</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-location">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> location</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-location</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F127</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-map-location">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> map-location</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-map-location</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F128</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-map">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> map</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-map</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F129</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-menu">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> menu</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-menu</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F12A</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-minus-circle">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> minus-circle</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-minus-circle</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F12B</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-minus">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> minus</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-minus</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F12C</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-mobile">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> mobile</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-mobile</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F12D</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-monitor">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> monitor</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-monitor</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F12E</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-more-vertical">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> more-vertical</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-more-vertical</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F12F</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-more">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> more</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-more</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F130</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-next">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> next</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-next</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F131</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-pause">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> pause</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-pause</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F132</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-phone">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> phone</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-phone</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F133</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-photos">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> photos</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-photos</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F134</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-play-circle">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> play-circle</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-play-circle</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F135</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-play">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> play</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-play</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F136</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-plus">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> plus</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-plus</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F137</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-pluse-circle">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> pluse-circle</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-pluse-circle</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F138</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-previous">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> previous</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-previous</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F139</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-print">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> print</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-print</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F13A</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-profile-circle">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> profile-circle</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-profile-circle</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F13B</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-profile">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> profile</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-profile</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F13C</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-rate">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> rate</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-rate</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F13D</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-refresh">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> refresh</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-refresh</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F13E</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-save">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> save</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-save</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F13F</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-search">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> search</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-search</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F140</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-secure">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> secure</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-secure</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F141</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-send">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> send</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-send</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F142</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-settings">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> settings</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-settings</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F143</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-share">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> share</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-share</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F144</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-social-facebook">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> social-facebook</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-social-facebook</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F145</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-social-instagram">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> social-instagram</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-social-instagram</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F146</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-social-linkedin">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> social-linkedin</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-social-linkedin</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F147</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-social-twitter">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> social-twitter</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-social-twitter</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F148</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-social-youtube">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> social-youtube</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-social-youtube</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F149</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-stop-circle">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> stop-circle</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-stop-circle</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F14A</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-stop">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> stop</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-stop</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F14B</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-tag">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> tag</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-tag</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F14C</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-tent">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> tent</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-tent</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F14D</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-time">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> time</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-time</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F14E</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-trash">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> trash</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-trash</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F14F</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-upload">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> upload</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-upload</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F150</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-video-slideshow">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> video-slideshow</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-video-slideshow</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F151</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-warning-caution">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> warning-caution</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-warning-caution</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F152</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-warning-stop">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> warning-stop</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-warning-stop</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F153</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-x-close">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> x-close</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-x-close</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F154</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-zoom-in">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> zoom-in</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-zoom-in</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F155</code></div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-zoom-out">
					<div className="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> zoom-out</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-zoom-out</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> <code>\F156</code></div>
					</div>
				</i>
			</div>
		);
	}
}

export default Icon;
export { IconCheatsheet };