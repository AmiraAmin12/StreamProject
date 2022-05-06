import React from 'react';
import{Field, formValues, reduxForm} from 'redux-form'


class StreamCreate extends React.Component {
  state = {  } 
  //helper function for errors
  renderError({error,touched}){
    if(touched && error){
      return(
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      )
    }
  }

  
//helper function for input
  renderInput=({input,label,meta})=>{
    console.log(meta);

    return (
    //<input  onChange={formProps.input.onChange}
     // value={formProps.input.value}/>
     <div className='field'>
       <label> {label} </label>
       <input {...input}  autoComplete="off"/>
       <div>{this.renderError(meta)}</div>
     </div>
     )
  }
//submit
  onSubmit(formValues){
console.log(formValues);
  }
  render() { 
    return (<form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
      <Field name='title' component={this.renderInput} label="Enter Title"/>
      <Field name='description' component={this.renderInput} label="Enter description"/>
      <button className='ui button'>Submit</button>

    </form>);
  }
}
//the connection between Field component and the validation function is  name property in Field 
const validate =(formValues)=>{
  const errors={}
  if(!formValues.title){
    errors.title ='You must enter a title'
  }
  if(!formValues.description){
    errors.description ='You must enter a description'

  }
  return errors
}
 //reduxForm is similar to connect
export default reduxForm({
  form:'streamCreate',
validate})
  (StreamCreate);
