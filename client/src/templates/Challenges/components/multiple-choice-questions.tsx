import React from 'react';
import { useTranslation } from 'react-i18next';

import { Quiz, Spacer } from '@freecodecamp/ui';
import { Question } from '../../../redux/prop-types';
import ChallengeHeading from './challenge-heading';

type MultipleChoiceQuestionsProps = {
  questions: Question[];
  isPassed: boolean;
};

function MultipleChoiceQuestions({
  questions,
  isPassed
}: MultipleChoiceQuestionsProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <ChallengeHeading
        heading={
          questions.length > 1 ? t('learn.questions') : t('learn.question')
        }
      />
      <Quiz questions={questions} disabled={isPassed} />
      <Spacer size='m' />
    </>
  );
}

MultipleChoiceQuestions.displayName = 'MultipleChoiceQuestions';

export default MultipleChoiceQuestions;
