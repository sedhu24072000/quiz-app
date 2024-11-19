import { useEffect } from "react";

function Dummy(){

    useEffect(() =>{
        async function getfetch(){
            try{
                const response = await fetch('http://localhost:8000/questions');
            const data = await response.json(); // Assuming the response is in JSON format
            console.log(data.data.questions);
            }catch(err){
                console.log(err)
            }
        }

        getfetch()
    },[])
    return(
        <div>Hello</div>
    )
}

export default Dummy;