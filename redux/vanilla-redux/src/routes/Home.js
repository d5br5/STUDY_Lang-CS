import React, {useState} from "react";
import {connect} from "react-redux";
import {actionCreators} from "../store";
import ToDo from "../Components/ToDo";

const Home = ({toDos, addToDo}) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button type="submit">Add</button>
      </form>
      <ul>
        {
          toDos.map(a => <ToDo {...a} key={a.id}/>)
        }
      </ul>
    </>
  )
}

function mapStateToProps(state) {
  return {toDos: state}
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);