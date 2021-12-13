import React from 'react';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './accordions.style';

const Accordions = ({ id, title, text, expanded, handleChange }) => {
  const styles = useStyles();

  return (
    <Accordion
      className={styles.accordion}
      key={id}
      expanded={expanded === id}
      onChange={handleChange(id)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreOutlined />}
        aria-controls='panel1bh-content'
        id='panel1bh-header'
      >
        <Typography component='span' className={styles.heading}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component='span' className={styles.details}>
          {text}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Accordions;
