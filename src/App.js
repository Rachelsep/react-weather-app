import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <p>
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/rachelsepulveda1/"
              target="blank"
              rel="noreferrer"
              className="author"
            >
              Rachel Sepulveda.
            </a>{" "}
            <a
              href="https://github.com/Rachelsep"
              target="_blank"
              rel="noreferrer"
              className="author"
            >
              Open source code.
            </a>{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
