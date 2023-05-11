import CardComponent from "./CardComponent"

function Like (props){
    return (
        <>
        
     
         <CardComponent profile={true} key={props.movieData.id} movieData={props.movieData}/>
    
      
    
    </>
    )
}

export default Like