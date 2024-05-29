import { useState } from "react"
import { PageLayout } from "../../components/pageLayout"
import { useNavigate } from "react-router-dom"
import { PlaceSelector } from "../../components/placeSelector"

export const MainPage = () => {
    const [img,setImg] = useState("img/Without.svg")
    const [selectedPlace,setSelectedPlace] = useState("gym")
    
    const navigate = useNavigate()
    const changeImage = (src) => {
        setImg(src)
    }
    const changeToDefaultImage = () =>{
        setImg("img/Without.svg")
    }
    return (
        <PageLayout>
            <div id="temp">
                <img id="tempImage" src={img}/>
                <div id ='frame'></div>
                <div id="blockShoulder" onMouseOver={()=>changeImage("img/shoulders_1.svg")} onMouseOut={changeToDefaultImage} onClick={() => navigate(`/sholderArticle/${selectedPlace}`)}></div>
                <div id="blockShoulder2" onMouseOver={()=>changeImage("img/shoulders_1.svg")} onMouseOut={changeToDefaultImage}></div>
                <div id="blockСhest"></div>
                <div id="blockBiceps"></div>
                <div id="blockCalves"></div>
                <div id="blockCalves2"></div>
                <div id="blockForearms"></div>
                <div id="blockForearms2"></div>
                <div id="blockGlutes"></div>
                <div id="blockHamstrings"></div>
                <div id="blockLats"></div>
                <div id="blockLowerback"></div>
                <div id="blockObliques"></div>
                <div id="blockQuads"></div>
                <div id="blockTraps"></div>
                <div id="blockTraps2"></div>
                <div id="blockTriceps"></div>
                <div id="TrapsMiddleTraps"></div>
                <div id="abdominals"></div>   
            </div>
            <PlaceSelector selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}/>            
            
        </PageLayout>
    )
}