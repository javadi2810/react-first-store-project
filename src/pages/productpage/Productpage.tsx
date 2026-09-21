import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";


function Productpage() {
     const params= useParams().id;


     console.log(params)
  return (
    <Container>
        <div>
            {params}
        </div>

    </Container>
  )
}

export default Productpage