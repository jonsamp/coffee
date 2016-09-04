
var React = require('react');

function IconRightArrow(props) {

  const fill = props.fill || '#FFFFFF';
  const backgroundColor = props.backgroundColor || '#1F1F1F';

  return (
    <svg width="45px" height="45px" viewBox="0 0 45 45">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="main">
                <g id="Group-6-Copy">
                    <g id="Group-23">
                        <circle id="Oval-3" fill={backgroundColor} cx="22.5" cy="22.5" r="22.5"></circle>
                        <path d="M29.6470754,23.367906 L30.25,22.7759096 L29.5129548,22.0388644 L20.4740904,13 L19,14.4740904 L27.0972651,22.7697053 L19,30.8669704 L20.4737779,32.3592556 L28.6432382,24.3717432 L29.6470754,23.367906 Z" id="Combined-Shape" fill={fill} transform="translate(24.625000, 22.679628) rotate(-360.000000) translate(-24.625000, -22.679628) "></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  )
}

module.exports = IconRightArrow;
