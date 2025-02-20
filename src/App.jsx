import {useFormStatus} from 'react-dom';

function App(){
 const handleSubmit=async()=>{
   await new Promise(res => setTimeout(res,5000))                     // Promises Make Asynchronous Code Manageable
   console.log("submit");                                             // Promises Solve Callback Hell
                                                                      // await code ko 5 sec rok ke rakhata h
 }
 function CustomerForm(){
   const {pending}=useFormStatus();
   return(
     <>
     <input type="text" placeholder="enter your name"/>
      <br/>
      <br/>
      <input type="password" placeholder="enter password"/>
      <br/>
      <br/>
      <button disabled={pending}>{pending?"submitting...":"submit"}</button>
     
     
     
     </>
   )
 }



  return(
    <>
    <h1> useFormState in react 19</h1>
    <form action={handleSubmit} method="post">
    <CustomerForm/>
    </form>
    </>
  )
}
export default App;
