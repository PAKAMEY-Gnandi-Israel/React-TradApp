import { Component } from "react";
import "./card.styles.css";

class CardTrad extends Component {
  render() {
    const { trads } = this.props;

    return (
      <div className="card-container">
        <div class="row">
          {trads.map((tr) => {
            return (
              <div class="column">
              <div class="card">
         <h5>  {tr.fr}</h5>
         <h5 class="none">  {tr.ewe}</h5>
              </div>
               
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default CardTrad;
