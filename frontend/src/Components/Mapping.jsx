import React from 'react'

export const Mapping = ({array}) => {
  return (
   <>
    <div>Mapping</div>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
        {array && array.map((item,i)=>(
            <div style={{width:'20%',height:'400px',border:'1px solid grey',marginBottom:'10px',marginRight:'1px',textAlign:'center'}}>
                <img style={{height:'300px',width:'100%',marginBottom:'20px'}} src={item.image} />
                <h1>{item.name}</h1>
                <h3>{item.price}</h3>
            </div>
        ))}
        
    </div>
   </>
  )
}

export default Mapping;
