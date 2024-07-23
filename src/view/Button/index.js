import React, { useState } from 'react';
import { Button } from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import axios from 'axios';
import AxiosApi from '../../apiConfig/axiousApi';
import './style.css';



// const FileUpload = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       alert('Please select a file first.');
//       return;
//     }
//     const formData = new FormData();
//     formData.append('imgFile',file)
//     console.log('Zero',formData)
//     console.log('Firse')
//     try {
//       console.log('Second')
//       const response = await AxiosApi.post('http://localhost:3001/image',new FormData(file), {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('File uploaded successfully:', response.data);
//       alert('File uploaded successfully!');
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       //alert('Error uploading file.');
//     }
    
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <input
//         accept="image/*"
//         style={{ display: 'none' }}
//         id="upload-file"
//         type="file"
//         onChange={handleFileChange}
//       />
//       <label htmlFor="upload-file">
//         <Button variant="contained" color="primary" component="span" startIcon={<CloudUploadIcon />}>
//           Upload Image
//         </Button>
//       </label>
//         <div style={{ marginTop: '10px' }}>
//           <p>Selected file: {(file?.name)?file.name:"Please Select a file"}</p>
//           <Button variant="contained" color="secondary" onClick={()=>{handleUpload()}}>
//             Submit
//           </Button>
//         </div>
//     </div>
// )
// };


// export default FileUpload;

function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction,setPrediction]=useState('')

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data.predicted_class)
    } catch (error) {
      console.error('Error uploading the file', error);
    }
  };

  return (
    <div className="App">
      <h1>Image Classification using CNN model</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      { prediction.length>0  && <h1>Defect :{prediction}</h1>}
    </div>
  );
}


export default UploadImage;