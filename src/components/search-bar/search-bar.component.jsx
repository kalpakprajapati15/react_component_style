import './search-bar.style.css';

export const SearchBox = (props) => {
    return (
        <input className='search-box' type='search' onChange={(event) => props.changeHandler(event)}></input>
    )
}