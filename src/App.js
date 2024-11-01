import { useState } from "react";
import "./App.css";
import Html from "./Html";

function App() {
  const [html, useHtml] = useState(<Html />);
  const [copiat, setCopiat] = useState(false);

  const handleClick = () => {
    var range = document.createRange();
    range.selectNode(document.getElementById("result"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");

    setCopiat(true);
  };
  return (
    <div className="App">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 py-3">
            <label htmlFor="nume" className="form-label w-100 text-start">
              Nume
            </label>
            <input type="text" id="nume" className="form-control" />

            <hr />
            <label htmlFor="prenume" className="form-label w-100 text-start">
              Prenume
            </label>
            <input type="text" id="prenume" className="form-control" />

            <hr />
            <label htmlFor="functie" className="form-label w-100 text-start">
              Functie
            </label>
            <input type="text" id="functie" className="form-control" />
            <h4 className="mt-4">Semnatura:</h4>

            <div id="result" className="my-3">
              {html}
            </div>

            <hr />

            <button id="copy" onClick={handleClick} className="btn btn-primary">
              Copiaza
            </button>
            {copiat && <p>Copiat</p>}
            <p className="mt-3">
              Dupa ce ati copiat mergeti in mail si dati ctr+v direct in zona de
              semnatura - nu este necesara inserarea de HTML (difera in functie
              de clientul de email folosit)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
