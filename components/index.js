import React from 'react';
import PropTypes from 'prop-types';

function Branding(_ref) {
  let {
    className,
    href,
    src
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "logo ".concat(className)
  }, href ? /*#__PURE__*/React.createElement("a", {
    href: href
  }, /*#__PURE__*/React.createElement("img", {
    src: src || 'https://askiggy.com/logo/iggy-logo.svg',
    alt: "Iggy"
  })) : /*#__PURE__*/React.createElement("img", {
    src: src || 'https://askiggy.com/logo/iggy-logo.svg',
    alt: "Iggy"
  }));
}

Branding.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string
};
Branding.defaultProps = {
  src: undefined,
  className: undefined,
  href: undefined
};

export { Branding };
