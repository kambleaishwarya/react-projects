import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <>
    <h1>Aishwarya Kamble</h1>
    <h4>List Of My Favourite Cars</h4>
     <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Mercedes benz">Mercedes benz</option>
        <option value="Volvo">Volvo</option>
        <option value="Alcazar">Alcazar</option>
        <option value="XUV7">XUV7</option>

        
      </select>
    </form>
    </>
   
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
export default MyForm;

/*
Click F12 and navigate to the "Console view"
to see the result when you submit the form.
*/
              