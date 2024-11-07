/* eslint-disable react/prop-types */
import "./ErrorMessage.css";
export const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message" style={{ color: "red" }}>
      {message}
    </div>
  );
};
