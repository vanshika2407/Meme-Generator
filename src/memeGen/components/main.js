import "./main.css"
//import memesData from"./memesData"
import React from 'react' 
import axios from "axios"
function MainBody(){
    
   
   //const[MemeImage,images]=React.useState("https://i.imgflip.com/30b1gx.jpg");
    const[allMeme,setAllMeme]=React.useState([])
   const[meme,setMeme]=React.useState(
    {
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"

    }
   )
//    React.useEffect(()=>{
//     axios.get( "https://api.imgflip.com/get_memes")
//     .then(response=>{
//         setAllMeme(response.data.data.memes)  //storing just the array part of the api
//     })
//     .catch(error=>console.log("Error occurred"))
//    },[])

//API CALLING USING AXIOS
async function fetchApi(){
    const response=await  axios.get( "https://api.imgflip.com/get_memes")
       setAllMeme(response.data.data.memes)  //storing just the array part of the api
}
 React.useEffect(()=>{
  fetchApi()
   },[])
   
    const memesData=allMeme


    function getting(){
        let i=Math.floor(Math.random()*100);    
        // const url=memesData.data.memes[i].url;
         const url=memesData[i].url;
        console.log(meme);
        setMeme(function(prevState)
        {
            return{
                ...prevState,
                randomImage:url
            }
            
         })
    }
    function handleText(event)
    {
        const{name,value}=event.target
        setMeme(prevMeme=>{
            return{
                ...prevMeme,
                [name]:value
            }
        })
    }

    return(
        /*<div className="containerMain">
            <div className="inputs">
        <input className="part first" type="text" placeholder="Enter First Part of the meme"></input>
         <input className="part second" type="text" placeholder="Enter Second Part of the meme"></input>
         <div className="button">
        <button className="generate">Get A New Image</button>
         </div>
        </div>
        </div>*/
        <main>
            <div className="inputs">
                <input className="partInputs" type="text" placeholder="Enter First Part of the meme" name="topText" onChange={handleText}></input>
                <input className="partInputs" type="text" placeholder="Enter Second Part of the meme" name="bottomText" onChange={handleText}></input>
                <button onClick={getting} className="generate">Get A New Meme Image</button>

                <div className="meme">
                <img src={meme.randomImage} className="image"></img>
                <h2 className="meme--text TopText">{meme.topText}</h2>
                <h2 className="meme--text BottomText">{meme.bottomText}</h2>
                </div>

                </div>
        </main>
    )
}

export default MainBody;