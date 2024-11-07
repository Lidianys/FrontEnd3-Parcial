/* eslint-disable react/prop-types */
import "./Card.css";  
export const Card = ({ data }) => {
  return (
    <div className="card">
      <h2>Los datos ingresados del alumno son:</h2>
      <p>
        <strong>Nombre:</strong> {data.name}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
    </div>
  );
};
