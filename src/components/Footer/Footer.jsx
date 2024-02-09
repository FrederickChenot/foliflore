import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './footer.scss';
import EmailLink from '../EmailLink/EmailLink';

function Footer({ className, ...rest }) {
  const myEmail = '6thfc@proton.me';
  return (
    <div
      className={classnames('footer', className)}
      {...rest}
    >
      <EmailLink email={myEmail} />
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
