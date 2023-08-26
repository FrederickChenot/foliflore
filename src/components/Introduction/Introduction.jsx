import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './introduction.scss';

function Introduction({ className, ...rest }) {
  return (
    <div
      className={classnames('introduction', className)}
      {...rest}
    >
      <li>
        <strong>Association FOLIFLORE</strong>
      </li>
      <br />
      <li>
        Créer et entretenir un arboretum et un jardin forêt.
      </li>
      <li>
        Promouvoir la biodiversité végétale.
      </li>
      <li>Sensibiliser à l'environnement.</li>
      <li>Organiser des activités éducatives.</li>
      <li>Créer un musée végétal.</li>
      <li>Promouvoir des pratiques respectueuses.</li>

    </div>
  );
}

Introduction.propTypes = {
  className: PropTypes.string,
};
Introduction.defaultProps = {
  className: '',
};
export default React.memo(Introduction);
