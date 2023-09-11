import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './introduction.scss';

function Introduction({ className, ...rest }) {
  return (
    <div
      className={classnames('introduction', className)}
      {...rest}
    >
      <div>
        <Accordion className="custom-accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="accordion-summary"
          >
            <Typography><strong>Association FOLIFLORE **SITE EN CONSTRUCTION**</strong></Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <Typography>
              Créer et entretenir un arboretum et un jardin forêt.<br />
              Promouvoir la biodiversité végétale.<br />
              Sensibiliser à l'environnement.<br />
              Organiser des activités éducatives.<br />
              Créer un musée végétal.<br />
              Promouvoir des pratiques respectueuses.<br />
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>
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
