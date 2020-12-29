import React, { useState } from "react";

const InputTodo = props => {
  const [inputText, setInputText] = useState({
    title: "",
  });

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.value]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodoProps(inputText.title);
    setInputText({
      title: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <input
        type="submit"
        className="input-submit"
        value="Submit"
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
