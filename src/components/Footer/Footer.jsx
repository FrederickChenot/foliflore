import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './footer.scss';

function Footer({ className, ...rest }) {
  return (
    <div
      className={classnames('footer', className)}
      {...rest}
    >
      <a
        className="footer-link"
        href="mailto:6thfc@proton.me"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact Admin
      </a>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};
Footer.defaultProps = {
  className: '',
};
export default React.memo(Footer);
