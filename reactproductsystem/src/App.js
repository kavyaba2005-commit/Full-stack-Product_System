import axios from "axios";
import { useState } from "react";

function App() {
  const [productname, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");

  function handleAddProduct(){
    const obj={productname,description,price};
    axios
      .post('http://127.0.0.1:8000/api/admin/addproduct/',obj,{
      headers:{
        "Content-Type":"application/json"
      },
      })
      .then((res)=>{
        setMsg(res.data.message);
        clearAll();

   } )
      }
  function clearAll(){
    setProductName("");
    setDescription("");
    setPrice("");
  }

  return (
    
    <div className="container">
      <h2 className="text-primary text-center">Add product</h2>
      <div className="card px-3 py-4">
        <div>
          <label className="form-label">enter product name</label>
          <input type="text" className="form-control" onChange={(e)=>setProductName(e.target.value)} value={productname}/>
        </div>
          <div>
          <label className="form-label">enter description</label>
          <input type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)} value={description}/>
        </div>
          <div>
          <label className="form-label">enter price</label>
          <input type="text" className="form-control" onChange={(e)=>setPrice(e.target.value)} value={price}/>
        </div>
        <div className="text-end mt-3">
          <input type="button" value="Add Product" className="btn btn-primary" onClick={handleAddProduct}/>
        </div>
        <p className="text-success">{msg}</p>
      </div>
    </div>
    
  );
}

export default App;