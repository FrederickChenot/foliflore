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
    // Nous ne faisons plus d'alerte ici
  };

  return (
    <a
      className={classnames('emailLink', className)}
      href={`mailto:${email}`}
      onClick={copyEmailAddress}
      {...rest}
    >
      Contact par Mail
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

export default EmailLink;
