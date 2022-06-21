import "./styles.css";
import { Component } from "react";
import CardTrad from "./Component/Card/card.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      traductions: [],
      id: 1
    };
  }
  get = (id) => {
    fetch(`https://trad-api.herokuapp.com/api/trads/${id}`)
      .then((response) => response.json())
      .then((trad) =>
        this.setState(() => {
          return { traductions: trad };
        })
      );
  };

  componentDidMount() {
    fetch("https://trad-api.herokuapp.com/api/traduction/cat")
      .then((response) => response.json())
      .then((cat) =>
        this.setState(() => {
          return { categories: cat };
        })
      ).then(this.get(this.state.id))
  }


  render() {
    return (
      <div className="App">
        <nav>
          {this.state.categories.map((categorie) => {
            return (
              <div
                key={categorie.id}
                onClick={() => {
                  const id = categorie.id;
                   this.get(id) 
               
                  
                 
                }}
              >
                <a href="#{categorie.cat}">{categorie.cat}</a>
              </div>
            );
          })}
          <i class="arrow right"></i>
        </nav>

        <CardTrad trads={this.state.traductions} />
      </div>
    );
  }
}
export default App;
