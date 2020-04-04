function SearchResult(props) {
    return (
        <div key={props.number}>
            <hr />
            <p><strong>Name:</strong> {props.pokemon.name}</p>
            <p><strong>ID:</strong> {props.pokemon.id}</p>
            <p><strong>Type(s):</strong>
                <ul> 
                {
                  props.pokemon.typeList.map((type, index) => {
                      return (
                        <li key={index}>{type}</li>
                      )
                  })
                }
                </ul>
            </p>
        </div>
    );
}

export default SearchResult;