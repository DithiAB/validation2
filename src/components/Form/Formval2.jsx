import {useState} from 'react'
import './Form.css'

const Form1 = () => {
    const[errors, setErrors]=useState({})
    const[user, setUser]= useState({
        fname:"",
        email:"",
        gender:"",
        course:[],
        date:"",
        country:"",
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({fname:"", email:"",gender:"",course:"", date:"",country:""})

        
    }
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setUser({...user,[name]:value})
        const validationErrors={}
        if(!user.fname.trim()){
            validationErrors.fname="firstname is required"
          }setErrors(validationErrors)
          if(!user.email.trim()){
            validationErrors.email="Valid Email is required"
          }else if(!/\S+@\S+\.\S+/.test(user.email)){
            validationErrors.email="email is not valid"
          } setErrors(validationErrors) 
          if(!user.gender.trim()){
            validationErrors.gender="Gender required"
          } setErrors(validationErrors)
          if(e.target.name==="course"){
            let copy={...user}
            if(e.target.checked){
              copy.course.push(e.target.value)
            }else{
              copy.course=copy.course=copy.course.filter(el=>el!==e.target.value)
            }
            setUser(copy)
          }else{
            setUser(()=>({
                ...user,
                [e.target.name]:e.target.value
            }))
           
          }
          if(user.course.length < 1){
            validationErrors.course="Any one course required"
          } setErrors(validationErrors) 
          if(!user.date.trim()){
            validationErrors.date="select Date of birth"
          }  setErrors(validationErrors)
          if(user.country.trim()){
            validationErrors.country="Select Country"
          } setErrors(validationErrors)
         
    }
  return (
    <>
<form onSubmit={handleSubmit}>
    <div className='main'>
        <h3><u>Registration Form</u></h3>
        <div>
            <input type='text' name="fname" value={user.fname} placeholder='Enter your first name' autoComplete='off' onChange={handleChange} /><br/>
            {errors.fname && <span  className='error'>{errors.fname}</span>}
        </div>
        <div>
            <input type='email' name="email" value={user.email} placeholder='Enter your Email ID' autoComplete='off' onChange={handleChange} /><br/>
            {errors.email && <span  className='error'>{errors.email}</span>}
        </div>
        <label htmlFor='gender'>Gender</label>
        <div className='radio'>
            
        <label htmlFor='gender'>Male</label>
            <input type="radio" name="gender" value="male" onChange={handleChange} checked={user.gender==="male"}/>
            <label htmlFor='gender'>Female</label>
            <input type="radio" name="gender" value="female" onChange={handleChange} checked={user.gender==="female"}/><br/>
            
        </div>
        {errors.gender && <span className='error' >{errors.gender}</span>}<br/>
        
        <label htmlFor='course'>Course Details</label>
        <div className='check'>
        <label htmlFor='Javascript'>Javascript</label>  
        <input type="checkbox" name="course" value="javascript" onChange={handleChange} checked={user.course.indexOf("javascript")!==-1}/>
        <label htmlFor='HTML'>HTML</label>  
        <input type="checkbox" name="course" value="HTML" onChange={handleChange} checked={user.course.indexOf("HTML")!==-1}/>
        <label htmlFor='CSS'>CSS</label>  
        <input type="checkbox" name="course" value="CSS" onChange={handleChange} checked={user.course.indexOf("CSS")!==-1}/>
        <label htmlFor='PHP'>PHP</label>  
        <input type="checkbox" name="course" value="PHP" onChange={handleChange} checked={user.course.indexOf("PHP")!==-1}/><br/>
        
        </div>
        {errors.course && <span className='error' >{errors.course}</span>}<br/>
       
        <div>
    <label htmlFor="date">Date of Birth</label>
    <input type="date" name="date"  value={user.date} onChange={handleChange} /><br/>
    {errors.date && <span className='error' >{errors.date}</span>}
    </div>
    
        <div className='select'>
        <label htmlFor='country'>Select Country</label><br/>   
    <select value={user.country}onChange={handleChange} name="country" >
        <option value="" >select</option>
        <option value="India"  >India</option>
        <option value="USA"  >USA</option>
        <option value="UK" >UK</option>
    </select><br/>
    {errors.country && <span className='error' >{errors.country}</span>}
</div>

        <button type='submit'>Submit</button>
       
    </div>
</form>
    </>
  )
}

export default Form1