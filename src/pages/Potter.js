import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Potter = () => {     
    
    const [potterCharacter, setPotterCharacter] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async() => {
          const response = await fetch(`https://legacy--api.herokuapp.com/api/v1/characters/${id}`)
          const data = await response.json();
          setPotterCharacter(data);
        }
        fetchData();
      }, [id])
    
    return (
        <div>
            <img src={potterCharacter.image_url} width="100px" alt={potterCharacter.name} />
            <h1>{potterCharacter.name}</h1>
        </div>
    )
};

export default Potter;