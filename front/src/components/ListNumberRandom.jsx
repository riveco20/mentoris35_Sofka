import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandom } from '../actions';

const ListNumeroRandom = (props) => {// component stateless
    const [state, setState] = useState();
    const onSubmit = (e) => {
      e.preventDefault();
      props.dispatch(fetchRandom(state));
    };
    return <div>
      <form onSubmit={onSubmit}>
      <label htmlFor="numberInitialRange">Ingrese el número mínimo:</label>
      <br />
      <input id="numberInitial" type="number" min="0" max="100"
        onChange={(e) => setState({...state,numberInitialRange: e.target.value})}>
      </input>
      <br/>
      <label htmlFor="numberFinalRange">Ingrese el número máximo:</label>
      <br/>
      <input id="numberFinal" type="number" min="0" max="100"
        onChange={(e) => setState({...state,numberFinal: e.target.value})}>
      </input>
      <br />
      <button type="submit" disabled={props.loading}>
        Enviar
      </button>
    </form>
    </div>
  }
  const stateMapToPros = state => {
    return {
      loading: state.view.loading
    }
  }
  
  export default connect(stateMapToPros)(ListNumeroRandom)