import "./style.css";



function Input (){
    return(
        <div className="input_header_container">
        <textarea className="input_text" type="text" required></textarea>
        <div className="button-container">
            <button className="add_button button">Add</button>
            <button className="cancel_button button">Cancel</button>
        </div>

    </div>
    )
}
export default Input;