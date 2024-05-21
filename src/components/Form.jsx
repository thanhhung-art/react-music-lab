/* eslint-disable react/prop-types */

function Form(props) {
  return (
    <form className="main__form">
      <textarea placeholder={props.placeholderComment}></textarea>
      <input
        type="text"
        placeholder={props.placeholderInput1}
        className="input1"
      />
      <input
        type="text"
        placeholder={props.placeholderInput2}
        className="input2"
      />
      <input
        type="text"
        placeholder={props.placeholderInput3}
        className="input3"
      />
      <button>{props.button}</button>
    </form>
  );
}

export default Form;
