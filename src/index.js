import React, { Component } from "react";
import ReactDOM from "react-dom";

let data = [
  {
    name: "chicken"
  }
];

class AddRecipe extends React.Component {
  add() {
    this.props.addRecipe({ name: this.name.value });
    this.name.value = "";
  }
  render() {
    return (
      <div>
        <input ref={name => (this.name = name)} />
        <input type="button" onClick={this.add.bind(this)} value="Add" />
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [] };
    this.addRecipe = this.addRecipe.bind(this);
  }

  addRecipe(recipe) {
    this.setState({
      recipes: [...this.state.recipes, recipe]
    });
  }
  componentWillMount() {
    this.setState({
      recipes: data
    });
  }
  render() {
    return (
      <div className="App">
        <h2>Welcome to the Recipe Book</h2>
        Add Recipe
        <AddRecipe addRecipe={this.addRecipe} />
        <dl>
          {this.state.recipes.map(recipe => {
            return (
              <div key={recipe.name}>
                <dt>{recipe.name}</dt>
                <hr />
              </div>
            );
          })}
        </dl>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
