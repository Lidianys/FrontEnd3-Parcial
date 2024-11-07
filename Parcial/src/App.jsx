import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { ErrorMessage } from "./components/ErrorMessage";
import { Formulario } from "./components/Formulario";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.startsWith(" ") 
    ) {
      setError("No puede colocar espacio al inicio del nombre");
      setSubmittedData(null); 
    }
    else if (formData.name.trim().length < 3) {
      setError("El nombre debe tener al menos 3 caracteres");
      setSubmittedData(null); 
    } else if (formData.email.length < 6) {
      setError("El email debe tener al menos 6 caracteres");
      setSubmittedData(null);
    } else {
      setError(null); 
      setSubmittedData(formData);
      console.log(formData);
    }
  };

  return (
    <>
      <div className="form-container">
        <h1>Registro Alumno</h1>
        <Formulario
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {error && <ErrorMessage message={error} />}
        {submittedData && <Card data={submittedData} />}
      </div>
    </>
  );
}

export default App;
