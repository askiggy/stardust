import React from 'react';
import PropTypes from 'prop-types';

function Branding({ className, href, src }) {
  const logo = '/logo/iggy-logo.svg';
  return (
    <div className={`logo ${className}`}>
      { href ? (
        <a href={href}>
          <img
            src={src || logo}
            alt='Iggy'
          />
        </a>
      ) : (
        <img
          src={src || logo}
          alt='Iggy'
        />
      )}
    </div>
  );
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

export default Branding;
