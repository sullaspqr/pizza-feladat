import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [isFetchPending, setFetchPending] = useState(false);

  useEffect(() => {
      setFetchPending(true);
      fetch("https://pizza.kando-dev.eu/Pizza",)
      .then((res) => res.json())
      .then((pizzak) => setPizzas(pizzak))
      .catch(console.log)
      .finally(() => {
          setFetchPending(false);
      });
  }, []);

  return(
      <div className="p-5 m-auto text-center content bg-ivory">
          {isFetchPending ? (
              <div className="spinner-border"></div>) :
              (<div>
                  <h2>Pizzák</h2>
                  {pizzas.map((pizza) => (
                      <div className="card col-sm-3 d-inline-block m-1 p-2" key={pizza.id}>
                          <h6 className="text-muted">Pizza neve: {pizza.name}</h6>
                          <h5 className="text-dark">Gluténmentes-e: {pizza.isGlutenFree === 1 ? 'Igen': 'Nem'}</h5>
                          <div className="card-body">
                              <img
                              className="img-fluid"
                              style={{ maxHeight: 200 }}
                              src={pizza.kepURL ? pizza.kepURL : "https://via.placeholder.com/400x800"}
                              alt="pizza-helyettesito"/>
                       </div>
                      </div>  
                  ))}
              </div>
          )}
      </div>
  )
  ;
}

export default App;
