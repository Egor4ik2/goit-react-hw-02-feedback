
import React, { useState } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions';
import Section from './section/Section';
import './App.module.css';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedback = (feedback) => {
    setState((prevState) => ({
      ...prevState,
      [feedback]: prevState[feedback] + 1
    }));
  };

  return (
    <div>
      <Section title="Feedback">
        <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics {...state} />
      </Section>
    </div>
  );
};


