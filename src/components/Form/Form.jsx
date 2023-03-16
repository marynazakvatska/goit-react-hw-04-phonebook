import css from './Form.module.css'
import {useState} from "react";
import PropTypes from 'prop-types';



export default function Form ({onSubmit}) {
 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


    const handleNameChange = e => {
    const { name, value } = e.currentTarget;
 
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'number':
          setNumber(value);
          break;
        default: return;
      }
      
    }
    
   const handleSubmit = e => {
        e.preventDefault()
    
    onSubmit({name, number})
        reset()
    }


   const reset = () => {
    
     setName('');
     setNumber('')
     
}

   
        return (
             
        
          <form className={css.form} onSubmit={handleSubmit}>  
             <label className={css.label}>Name 
               <input className={css.input}
                 value={name}
        onChange={handleNameChange}
           type="text"
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                      
                style={{
                marginLeft: 20,
             width: "300px",
           height: "40px"}}
               />
                </label>
            
             
 <label className={css.label}> Number 
               <input className={css.input}
                   value={number}
        onChange={handleNameChange}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                
                style={{
                marginLeft: 20,
             width: 300,
           height: 40}}
/>
 </label>
  <button className={css.btn} type="submit">Add contact</button>
           </form>  
           
        )
    
}


Form.propTypes = {
  
  onSubmit: PropTypes.func,

}