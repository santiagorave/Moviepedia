import CardComponent from "./CardComponent"

function Like (props){
    return (
        <>
        
     
         <CardComponent key={props.movieData.id} movieData={props.movieData}/>
    
      
    
    </>
    )
}

export default Like