import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './emailLink.scss';

function EmailLink({ className, email, ...rest }) {
  const copyEmailAddress = () => {
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert(`Adresse e-mail copiée : ${email}`);
  };

  return (
    <a
      className={classnames('emailLink', className)}
      href={`mailto:${email}`}
      onClick={copyEmailAddress}
      {...rest}
    >
      {email}
    </a>
  );
}

EmailLink.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string.isRequired,
};

EmailLink.defaultProps = {
  className: '',
};

export default React.memo(EmailLink);
