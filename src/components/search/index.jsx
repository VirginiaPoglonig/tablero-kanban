import "../search/style.css";



function Search() {
    return (
        <div className="input_container">
            <div className="container_version-date">
                <p>Version 1.0</p>
                <p>Updated on 12 Apr</p>
            </div>
            <input className="input" placeholder="🔎Filter cards"></input>
        </div>
    )
}
export default Search;