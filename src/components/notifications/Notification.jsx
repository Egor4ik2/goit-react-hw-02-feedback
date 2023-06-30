
import React from 'react';
import './Notification.module.css';
import PropTypes from 'prop-types';



const Notification = ({ message }) => {
  return <p>{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}