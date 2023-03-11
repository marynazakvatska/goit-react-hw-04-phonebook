import css from './Form.module.css'
import {useState} from "react";
import PropTypes from 'prop-types';

/* 
export default class Form extends Component {
    state = {
        name: '',
   number: ''
    }


      handleNameChange = e => {
    const { name, value } = e.currentTarget;
    this.setState(
       { [name]: value })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state) //передает prop onSubmit Form значение state, передает значение state наверх в App
        
        this.reset()
    }


    reset = () => {
    this.setState({name: '', number: ''})
}

    render() {
        return (
             
           <form className={css.form} onSubmit={this.handleSubmit}>  
             <label className={css.label}>Name 
               <input className={css.input}
                 value={this.state.name}
        onChange={this.handleNameChange}
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
                   value={this.state.number}
        onChange={this.handleNameChange}
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
}


Form.propTypes = {
  
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  value:  PropTypes.string,

} */




export default function Form ({onSubmit}) {
 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState({
    name: '',
   number: ''
  })


    const handleNameChange = e => {
    const { name, value } = e.currentTarget;
  /*   this.setState(
       { [name]: value }) */
    /*   console.log(name) */
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
       /*  this.props.onSubmit(this.state) */ //передает prop onSubmit Form значение state, передает значение state наверх в App
     /*   this.props.onSubmit(state) */
     /*  console.log( name, number) */
    
    onSubmit({name, number})
        reset()
    }


   const reset = () => {
     /*  this.setState({name: '', number: ''}) */
     setName('');
     setNumber('')
     
}

   
        return (
             
          /*    <form className={css.form} onSubmit={handleSubmit}>   */
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
  
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  value:  PropTypes.string,

}