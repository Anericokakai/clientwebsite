
import './App.css';
import {useFormik} from 'formik'
import { useState } from 'react';
import About from './components/About';
function App() {
   const formik=useFormik({
    initialValues:{
      name:'',
      email:'',
      channel:'',
    }
    ,
    onSubmit:values=>{
      console.log(values)
    }

  })
 
  return (
    <div className="App h-screen bg-red-100 text-center flex items-center flex-col justify-center">
    <h1 className=' text-2xl'>home page </h1>
    <form action="" className=' flex flex-col bg-red-300 h-60 items-center justify-center gap-3 w-1/2 rounded-lg shadow-lg ' onSubmit={formik.handleSubmit}>
      <input name='name' type="text" className=' border w-52 rounded' placeholder='name' onChange={formik.handleChange} value={formik.values.name} />
      <input name='email' type="email" className='border w-52 rounded' placeholder='email' onChange={formik.handleChange} value={formik.values.email} />
      <input name='channel' type="text"  className='border w-52 rounded' placeholder='accont' onChange={formik.handleChange} value={formik.values.channel}/>
      <button type='submit'>submit</button>
    </form>
    <About></About>
    </div>
  );
}

export default App;
