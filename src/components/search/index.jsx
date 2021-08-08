import "../search/style.css";



function Search() {
    return (
        <div className="input_container">
            <div className="container_version-date">
                <p><b>Version 1.0</b></p>
                <p>Updated on 12 Apr</p>
            </div>
            <input className="input" placeholder="&#x1F50E;&#xFE0E;  Filter cards"></input>
        </div>
    )
}
export default Search;