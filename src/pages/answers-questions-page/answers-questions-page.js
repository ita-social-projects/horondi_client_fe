import React, { useState } from 'react';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import parse from 'html-react-parser';

import { useTranslation } from 'react-i18next';
import { useStyles } from './answers-questions-page.style';

const AnswersQuestionsPage = () => {
  const { t } = useTranslation();
  const styles = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const data = [
    {
      id: 'panel1',
      heading: t('answersQuestions.question_1'),
      details: parse(t('answersQuestions.answers.answer_1'))
    },
    {
      id: 'panel2',
      heading: t('answersQuestions.question_2'),
      details: parse(t('answersQuestions.answers.answer_2'))
    },
    {
      id: 'panel3',
      heading: t('answersQuestions.question_3'),
      details: parse(t('answersQuestions.answers.answer_3'))
    },
    {
      id: 'panel4',
      heading: t('answersQuestions.question_4'),
      details: '4'
    },
    {
      id: 'panel5',
      heading: t('answersQuestions.question_5'),
      details: '5'
    },
    {
      id: 'panel6',
      heading: t('answersQuestions.question_6'),
      details: '6'
    },
    {
      id: 'panel7',
      heading: t('answersQuestions.question_7'),
      details: '7'
    }
  ];

  return (
    <div className={styles.root}>
      <h1>{t('answersQuestions.title')}</h1>
      {/* <hr /> */}
      {data.map((accordion) => {
        const { id, heading, details } = accordion;
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
              <Typography className={styles.heading}>{heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.details}>{details}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default AnswersQuestionsPage;
