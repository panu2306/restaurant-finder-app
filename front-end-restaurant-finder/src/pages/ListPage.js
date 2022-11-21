import Restaurant from "./Restaurant"
import Row from 'react-bootstrap/Row'

const ListPage = ({ searchResults }) => {

    const results = searchResults.map(restaurant => <Restaurant key={restaurant.rest_id} restaurant={restaurant} />)
    //console.log(results);

    const content = results?.length ? results : <div><p>No Matching Restaurants</p></div>
    return (
        <div className='row-wrapper'>
          <Row>
            {content}
          </Row>
        </div>
      ) 
}
export default ListPage