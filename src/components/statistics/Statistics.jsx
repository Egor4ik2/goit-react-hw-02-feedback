
import React from 'react';
import Notification from '../notifications/Notification';
import PropTypes from 'prop-types';
import './Statistics.module.css';


const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  return (
    <div>
      {countTotalFeedback() > 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>bad: {bad}</p>
          <p>total: {countTotalFeedback()}</p>
          <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
export default Statistics;
