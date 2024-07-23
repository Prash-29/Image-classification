import React, { useEffect,useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import Button from '@mui/material/Button';
import '@tensorflow/tfjs-backend-cpu'; // Use a specific backend like CPU

function Model() {
    const [convert,setConvert] = useState(false)

    async function convertModel() {
        const model = await tf.loadLayersModel('model.h5')
        model.save('tfjs_model')
        try {
            setConvert(true)
            
        } catch (error) {
            alert('Error in coversion')   
        }
      }

  return (
    <div className="App">
      <h1>Model Converstion</h1>
      <Button variant="contained" onClick={()=>{convertModel()}}>Convert model keras to Tf.js</Button>
      {convert && <h1>Successfull Converted</h1>}
    </div>
  );
}

export default Model;