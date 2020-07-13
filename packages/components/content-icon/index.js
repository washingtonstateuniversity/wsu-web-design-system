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
					<div class="icon-spec-container">
						<div className="icon-spec-container_item"><span className="label">Name</span> alarm</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-alarm</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F101</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-alert-notification">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> alert-notification</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-alert-notification</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F102</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-down-carrot">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-down-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-down-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F103</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-down">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-down</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-down</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F104</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-left-carrot">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-left-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-left-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F105</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-left">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-left</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-left</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F106</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-right-carrot">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-right-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-right-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F107</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-right">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-right</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-right</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F108</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-up-carrot">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-up-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-up-carrot</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F109</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-arrow-up">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> arrow-up</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-arrow-up</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F10A</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-attachment">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> attachment</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-attachment</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F10B</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-basket">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> basket</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-basket</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F10C</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-bookmark">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> bookmark</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-bookmark</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F10D</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-calendar">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> calendar</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-calendar</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F10E</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-cart">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> cart</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-cart</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F10F</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-check">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> check</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-check</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F110</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-collapse">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> collapse</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-collapse</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F111</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-comment">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> comment</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-comment</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F112</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-contrast">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> contrast</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-contrast</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F113</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-credit-card">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> credit-card</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-credit-card</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F114</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-cut">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> cut</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-cut</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F115</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-discussion">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> discussion</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-discussion</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F116</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-document">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> document</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-document</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F117</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-download">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> download</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-download</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F118</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-edit">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> edit</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-edit</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F119</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-email">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> email</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-email</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F11A</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-expand">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> expand</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-expand</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F11B</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-favorite">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> favorite</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-favorite</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F11C</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-feedback">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> feedback</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-feedback</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F11D</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-filter">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> filter</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-filter</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F11E</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-flag">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> flag</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-flag</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F11F</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-gallery">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> gallery</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-gallery</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F120</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-graph">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> graph</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-graph</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F121</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-home">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> home</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-home</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F122</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-info">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> info</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-info</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F123</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-key">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> key</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-key</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F124</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-light-bulb">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> light-bulb</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-light-bulb</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F125</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-link">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> link</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-link</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F126</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-location">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> location</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-location</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F127</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-map-location">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> map-location</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-map-location</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F128</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-map">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> map</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-map</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F129</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-menu">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> menu</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-menu</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F12A</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-minus-circle">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> minus-circle</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-minus-circle</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F12B</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-minus">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> minus</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-minus</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F12C</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-mobile">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> mobile</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-mobile</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F12D</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-monitor">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> monitor</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-monitor</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F12E</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-more-vertical">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> more-vertical</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-more-vertical</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F12F</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-more">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> more</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-more</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F130</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-next">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> next</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-next</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F131</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-pause">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> pause</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-pause</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F132</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-phone">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> phone</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-phone</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F133</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-photos">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> photos</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-photos</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F134</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-play-circle">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> play-circle</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-play-circle</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F135</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-play">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> play</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-play</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F136</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-plus">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> plus</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-plus</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F137</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-pluse-circle">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> pluse-circle</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-pluse-circle</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F138</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-previous">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> previous</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-previous</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F139</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-print">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> print</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-print</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F13A</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-profile-circle">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> profile-circle</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-profile-circle</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F13B</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-profile">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> profile</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-profile</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F13C</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-rate">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> rate</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-rate</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F13D</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-refresh">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> refresh</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-refresh</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F13E</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-save">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> save</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-save</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F13F</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-search">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> search</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-search</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F140</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-secure">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> secure</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-secure</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F141</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-send">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> send</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-send</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F142</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-settings">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> settings</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-settings</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F143</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-share">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> share</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-share</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F144</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-social-facebook">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> social-facebook</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-social-facebook</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F145</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-social-instagram">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> social-instagram</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-social-instagram</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F146</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-social-linkedin">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> social-linkedin</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-social-linkedin</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F147</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-social-twitter">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> social-twitter</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-social-twitter</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F148</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-social-youtube">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> social-youtube</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-social-youtube</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F149</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-stop-circle">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> stop-circle</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-stop-circle</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F14A</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-stop">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> stop</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-stop</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F14B</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-tag">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> tag</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-tag</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F14C</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-tent">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> tent</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-tent</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F14D</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-time">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> time</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-time</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F14E</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-trash">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> trash</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-trash</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F14F</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-upload">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> upload</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-upload</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F150</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-video-slideshow">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> video-slideshow</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-video-slideshow</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F151</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-warning-caution">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> warning-caution</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-warning-caution</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F152</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-warning-stop">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> warning-stop</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-warning-stop</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F153</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-x-close">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> x-close</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-x-close</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F154</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-zoom-in">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> zoom-in</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-zoom-in</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F155</div>
					</div>
				</i>
				<i className="wsu-icon wsu-i-zoom-out">
					<div class="icon-spec-container">
						
						<div className="icon-spec-container_item"><span className="label">Name</span> zoom-out</div>
						<div className="icon-spec-container_item"><span className="label">Class Name</span> wsu-i-zoom-out</div>
						<div className="icon-spec-container_item"><span className="label">Content Code</span> F156</div>
					</div>
				</i>
			</div>
		);
	}
}

export default Icon;
export { IconCheatsheet };