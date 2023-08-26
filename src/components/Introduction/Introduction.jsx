import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './introduction.scss';

function Introduction({ className, ...rest }) {
  console.log('hello');
  return (
    <div
      className={classnames('introduction', className)}
      {...rest}
    >
      <li>
        Association FOLIFLORE
      </li>
      <li>
        Créer et entretenir un arboretum et un jardin forêt
      </li>
      <li>
        promouvoir la biodiversité végétale
      </li>
      <li>sensibiliser à l'environnement</li>
      <li>organiser des activités éducatives</li>
      <li>créer un musée végétal</li>
      <li>promouvoir des pratiques respectueuses</li>

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
