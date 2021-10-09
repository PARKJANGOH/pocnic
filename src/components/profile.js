import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Profile = () =>{

const [fileImage, setFileImage] = useState(""); 
const saveFileImage = (e) => { setFileImage(URL.createObjectURL(e.target.files[0])); }
const deleteFileImage = () => { URL.revokeObjectURL(fileImage); setFileImage(""); }
    return (
        <div>
        <table> <tbody> <tr> <th>이미지</th> <td> 
        <div> 
        {fileImage && ( <img width="200px" height ="200px"alt="sample" src={fileImage} style={{ margin: "auto" }} /> )} 
        <div style={{ alignItems: "center", justifyContent: "center", }} > 
        <input name="imgUpload" type="file" accept="image/*" onChange={saveFileImage} /> 
        <button style={{ backgroundColor: "gray", color: "white", width: "55px", height: "40px", cursor: "pointer", }} onClick={() => deleteFileImage()} > 삭제 </button>
         </div> </div> </td> </tr> </tbody> </table>

        

    
        </div>
    );
};

export default Profile;