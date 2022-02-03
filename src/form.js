import { render } from '@testing-library/react';
import './App.css';
import Form from './form';
class Form extends Component{
  constructor(props){
     
     state = {
          name: '',
      }
      handleSumit = (e) => {
          e.preventdefaut()
          let { name } = this.state
          name = name
          console.log('funcionou', name)
      }

  }
}
handleInputChange = (e) =>{
    this.setState({
        name: e.target.value
    })
}
render() {
    const { name }= this.state
    return (
        <section>
            <form onSubmit={this.handleSumit}>
                <label>
                    nome:
                    <input onChange={this.handleInputChange} type='text' placeholder='Nome'/>
                </label>
                <button type='submit'>Enviar</button>
            </form>
            <h3>{ name }</h3>
    </section>
    )
}


export default Form;
