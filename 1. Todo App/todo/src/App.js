import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  addItem(todoValue){
    if(todoValue !== "")
    {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list: list,
        newItem: ""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

    this.setState({
      list: updatedList
    });
  }

  updateInput(item){
    this.setState({
      newItem: item
    });
  }



  render() {
    return (
      <div>
        <img src={logo} width={100} height={100} className="logo" alt="Logo" />

        <h1 className="app-title">To-Do App:</h1>

        <div className="container">
          <p>Add Items to Todo: </p>
          <br/>

          <div>
          <input type="text" className="input-text" placeholder="Wite a Todo" required 
          value={this.state.newItem} onChange={e => this.updateInput(e.target.value)}/>
          <button className="add-btn" onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}>Add ToDo</button>
          </div>

          <br/>

          <div className="list">
            <ul>
              {this.state.list.map(item =>{
                return(
                  <li key={item.id}>
                    <input type="checkbox" name="isDone" /*checked={item.isDone}*/ onChange={() => {}} />
                    {item.value}
                    <button className="btn" onClick={() => this.deleteItem(item.id)}>Delete</button>
                  </li>
                );
              })}
              <li>
                <input type="checkbox" name="" id="" />
                Inital To-Do
                <button className="btn" >Delete</button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
