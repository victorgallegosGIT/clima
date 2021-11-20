import React,{useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
const Formulario = ({busqueda,guardarBusqueda,guardarConsultar}) => {

    
    const [error,guardarError] = useState(false);

    const{ciudad,pais} = busqueda;


    const handleChange = e => {

        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

      
        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarConsultar(true);
        

    }
    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error? <Error mensaje="Campos obligatorios" />: null }
            <div className="input-field cold s12">
                <input 
                    type="text" 
                    name="ciudad"
                    value={ciudad}
                    id="ciudad"
                    onChange={handleChange}
                />
              <label htmlFor="ciudad"><h6>Ciudad:</h6></label>
            </div>
            <div className="input-field cold s20">
                <select 
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">↓ Introduce pais ↓</option>    
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>                
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="PE">Perú</option>
                    <option value="US">Estados Unidos</option>
                    <option value="PAN">Panamá</option>
                    <option value="BRA">Brasíl</option>
                    <option value="ECU">Ecuador</option>
                    <option value="US">Estados Unidos</option>
                    <option value="BOL">Bolivia</option>
                    <option value="GUA">Guatemala</option>
                    <option value="HON">Honduras</option>
                    <option value="CUB">Cuba</option>
                    <option value="JAM">Jamaica</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="CHI">China</option>


                </select>
                <label htmlFor="pais"><h6>Pais:</h6> </label>
            </div>
            <div className="row col-md-6 mt-3 mb-3"> 
                    <button  
                        type="submit"
                        className="btn btn-success"
                        >Obtener clima</button>
            </div>

        </form>
     );
}
Formulario.propTypes ={
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired
} 
export default Formulario;