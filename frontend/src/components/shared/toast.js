// frontend/src/components/Toast.js

import React from 'react';

const Toast = ({ message, onClose }) => {
  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-success">
        <div>
          <span>{message}</span>
          <button onClick={onClose} className="btn btn-sm btn-ghost ml-2">✕</button>
        </div>
      </div>
    </div>
  );
};

export default Toast;