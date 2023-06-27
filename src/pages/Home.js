import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <>
            {props.potterArray.map((potterDetails, index) => {
                
                return (
                    <div>
                        <Link key={index} to={`/potter/${potterDetails.id}`}>{potterDetails.name}</Link>
                    </div>
                )
            })}
        </>
    )
}

export default Home;