import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const SearchBar = ({ restaurants, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()
    //console.log(restaurants);

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(restaurants)

        const resultsArray = restaurants.filter(restaurant => restaurant.name.includes(e.target.value) || restaurant.zipCode.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                    placeholder='enter zip code or restaurant name'
                />
                <button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </header>
    )
}
export default SearchBar