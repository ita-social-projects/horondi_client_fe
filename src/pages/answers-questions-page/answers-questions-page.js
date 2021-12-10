import React, { useState } from 'react';
import parse from 'html-react-parser';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import Accordions from '../../components/accordion/accordion';
import { useStyles } from './answers-questions-page.style';
import { getAllQuestionsAnswers } from './operations/answers-questions.queries';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

const AnswersQuestionsPage = () => {
  const { t } = useTranslation();
  const styles = useStyles();

  const [expanded, setExpanded] = useState(false);

  const { loading, error, data } = useQuery(getAllQuestionsAnswers, {});
  const page = loading ? [] : data.getAllQuestionsAnswers.items;

  if (loading || error) return errorOrLoadingHandler(error, loading);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.root}>
      <h1>{t('common.titleQuestionsAnswers')}</h1>
      {page.map((accordion) => {
        const { _id } = accordion;
        const question = accordion.question && (
          <h1>{t(`${accordion.translationsKey}.question`)}</h1>
        );
        const answer = accordion?.answer && parse(t(`${accordion.translationsKey}.answer`));
        return (
          <Accordions
            key={_id}
            id={_id}
            title={question}
            text={answer}
            expanded={expanded}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
};

export default AnswersQuestionsPage;
