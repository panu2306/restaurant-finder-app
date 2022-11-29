import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Form from 'react-bootstrap/Form'

const SearchBar = ({ restaurants, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()
    //console.log(restaurants);

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(restaurants)

        const resultsArray = restaurants.filter(restaurant => restaurant.name.includes(e.target.value) || restaurant.zipCode.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    return (
        <>
            <div className="container d-flex justify-content-between align-items-center">
             </div>

            <Form className='d-flex justify-content-center align-items-center mt-3' onSubmit={handleSubmit}>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
                <Form.Control type="text"
                        onChange={handleSearchChange}
                        placeholder="Search Restaurants by zip code" />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </Form>
            
                <h2 className='px-4' style={{ textAlign: 'left', fontWeight: 400 }}>Restaurants Open now</h2>
        
        </>
    )
}
export default SearchBar