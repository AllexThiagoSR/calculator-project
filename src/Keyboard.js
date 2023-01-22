import React from "react";
import Key from "./Key";

const keys = ['clear', '←', '÷', 7, 8, 9, '*', 4, 5, 6,'-', 1, 2, 3, '/', 0, '.', '='];

class Keyboard extends React.Component{
  render() {
    return (
      <section className="keyboard">
        { keys.map(Key) }
      </section>
    );
  }
}

export default Keyboard;
