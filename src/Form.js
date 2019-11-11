import React from 'react';

class Form extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         title: '',
         globalTitle: '',
      }
   }

     // After the component has been rendered, display “Rendered Form” in the console
   
   componentDidMount() {
    console.log('Rendered Form');
 }
    
   onTitleChange = e => this.setState({title: e.target.value});
  

   // During the form validation, update the component "globalTitle" state with the following value: "My form - "
   // I assume it means onClick?
  onGlobalTitleChange = () => this.setState({globalTitle: 'My form - '+this.state.title,});
   
   // Once the component is updated or chenges, display “Title changed” in the console
   componentDidUpdate(prevProps) {
      if (this.state.globalTitle !== prevProps.globalTitle) {
         console.log('Title changed');
      }
   }
    
   render() {
      return (
         <div>
            
           
            
            <label htmlFor='title'>
               <input 
                  id='title'
                  type='text'
                  value={this.state.title}
                  onChange={this.onTitleChange}
                  >
               </input>
               <br/>
               <button 
                  type="submit"
                  onClick={this.onGlobalTitleChange}
                  >Validation
               </button>
            </label>
         </div>
      )
   }
}

export default Form;