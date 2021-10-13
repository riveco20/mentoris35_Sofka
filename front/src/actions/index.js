

export const fetchRandom = (state) => (dispatch) => {

    dispatch({ type: "view-loading" });

    return fetch(`http://localhost:8080/r`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({list: state}) // body data type must match "Content-Type" header
    }).then(response => response.json())
      .then(json => {
          dispatch({ type: "random-result", data: json });
          dispatch({ type: "view-loaded" });
        })
}


//TODO: agregar las demas acciones


export const fetchRandomListaNumber = (state) => (dispatch) => {

    dispatch({ type: "view-loading" });

    const numberOne = ({numberInitial:state.numberInitial});
    const numberTwo=({numberFinal:state.numberFinal})
    return fetch(`http://localhost:8080/r/numberRamdo`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({numberOne, numberTwo}) // body data type must match "Content-Type" header
    }).then(response => response.json())
      .then(json => {
          dispatch({ type: "random-numberrandom-result", data: json });
          dispatch({ type: "view-loaded" });
        })
}
