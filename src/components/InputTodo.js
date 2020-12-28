import React, { useState } from "react";

const InputTodo = props => {
  const [title, setTitle] = useState("");

  const onChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodoprops(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
    </form>
  );
};

// class InputTodo extends Component {
//   state = {
//     title: ""
//   };
//   onChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.addTodoProps(this.state.title);
//     this.setState({
//       title: ""
//     });
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="form-container">
//         <input
//           type="text"
//           className="input-text"
//           placeholder="Add todo..."
//           value={this.state.title}
//           name="title"
//           onChange={this.onChange}
//         />
//         <input type="submit" className="input-submit" value="Submit" />
//       </form>
//     );
//   }
// }
export default InputTodo;
