
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
                        <path d="M25.6470754,23.367906 L26.25,22.7759096 L25.5129548,22.0388644 L16.4740904,13 L15,14.4740904 L23.0972651,22.7697053 L15,30.8669704 L16.4737779,32.3592556 L24.6432382,24.3717432 L25.6470754,23.367906 Z" id="Combined-Shape" fill={fill} transform="translate(20.625000, 22.679628) rotate(-180.000000) translate(-20.625000, -22.679628) "></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  )
}

module.exports = IconRightArrow;
