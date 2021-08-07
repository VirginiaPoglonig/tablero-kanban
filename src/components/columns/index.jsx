import Column from "../colum"
import "./style.css";



function Columns(props) {
    return (
        <div className="columns_container">
            <Column columnName="To Do" numberOfCards='1' status="undone"></Column>
            <Column columnName="In progress" numberOfCards='1' status="undone"></Column>
            <Column columnName= "Done" numberOfCards='1' status="done" clearall={true}></Column>
        </div>
    )
}
export  default Columns;