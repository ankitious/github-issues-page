import React from 'react';
import PropTypes from 'prop-types';

import CommonSVGStyle from './CommonSVGStyle';

const CompletedSVG = ({ color, hoverColor }) => (
  <CommonSVGStyle color={color} hoverColor={hoverColor} selected width="12" height="16" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"
    />
  </CommonSVGStyle>
);

export default CompletedSVG;


CompletedSVG.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string.isRequired,
};
