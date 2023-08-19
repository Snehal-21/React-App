import { useParams } from "react-router-dom";

const SingleProduct=()=>{
    const {id}=useParams();
    return(
        <>
        <h1>Product Id : {id}</h1>
        </>
    )
}
export default SingleProduct;