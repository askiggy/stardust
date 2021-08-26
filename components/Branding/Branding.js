import React from 'react';
import PropTypes from 'prop-types';

function Branding({ className, href, src }) {
  return (
    <div className={`logo ${className}`}>
      { href ? (
        <a href={href}>
          <img
            src={src || 'https://askiggy.com/logo/iggy-logo.svg'}
            alt='Iggy'
          />
        </a>
      ) : (
        <img
          src={src || 'https://askiggy.com/logo/iggy-logo.svg'}
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
