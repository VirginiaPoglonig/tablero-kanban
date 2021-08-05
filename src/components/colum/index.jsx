import "./style.css"
import Card from "../card"



function Column() {
    return (
        <div className="column_container">
            <div className="column_header">
                <p className="header_number">1</p>
                <p className="column_title">To do</p>
                <button className="add_button_column">+</button>
            </div>
            <div className="input_header_container">
                <input className="input_text" type="text" required/>
                <div className="button-container">
                    <button className="add_button button">Add</button>
                    <button className="cancel_button button">Cancel</button>
                </div>

            </div>
            <Card title="Creación del CI/CD para el frontal" status="done" id="23" date="20/05/20"></Card>
            <Card title="Creación del CI/CD para el frontal 123451234123" status="done" id="23" date="20/05/20"></Card>
            <Card title="hola :)" status="done" id="23" date="20/05/20"></Card>
            <Card title="TEST TEST TEST TEST TEST" status="done" id="23" date="20/05/20"></Card>
            <Card title="TEST TEST TEST TEST TEST" status="done" id="23" date="20/05/20"></Card>
            <Card title="TEST TEST TEST TEST TEST" status="done" id="23" date="20/05/20"></Card>
            <Card title="TEST TEST TEST TEST TEST" status="done" id="23" date="20/05/20"></Card>




            
        </div>

    )
}
export default Column