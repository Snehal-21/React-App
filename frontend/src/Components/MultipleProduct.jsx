import { useNavigate } from "react-router-dom";

const MultipleProduct=()=>{
    const router=useNavigate();
    return(
        <>
        <h1>Multiple Product</h1>
        <button onClick={()=>router('/singleProduct/111')}>Single Page</button>
        </>
    )
}
export default MultipleProduct;