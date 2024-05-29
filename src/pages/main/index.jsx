import { useState } from "react"
import { PageLayout } from "../../components/pageLayout"
import { useNavigate } from "react-router-dom"
import { PlaceSelector } from "../../components/placeSelector"
import { SholderArticlePage } from "../sholderArticle"

export const MainPage = () => {
    const [selectedPersImg,setSelectedPersImg] = useState("img/Without.svg")
    const [img,setImg] = useState(selectedPersImg)
    const [selectedPlace,setSelectedPlace] = useState("gym")
    const [showArticle, setShowArticle] = useState(null)
    
    const navigate = useNavigate()
    const changeImage = (src) => {
        setImg(src)
    }
    const changeToDefaultImage = () =>{
        setImg(selectedPersImg)
    }
    const handleBlockClick = (src, article) => {
        setSelectedPersImg(src)
        setImg(src)
        setShowArticle(article)
    }

    const renderArticle = () => {
        switch (showArticle) {
            case "shoulder":
                return <SholderArticlePage />
            case "chest":
                return <ChestArticlePage />
            // Add cases for other articles as needed
            default:
                return null
        }
    }
    return (
        <PageLayout>
            <div id="temp">
                <img id="tempImage" src={img}/>
                <div id ='frame'></div>
                <div id="blockShoulder" onMouseOver={() => changeImage("img/shoulders_1.svg")} onMouseOut={changeToDefaultImage} onClick={() => handleBlockClick("img/shoulders_1.svg", "shoulder")}></div>
                <div id="blockShoulder2" onMouseOver={() => changeImage("img/shoulders_1.svg")} onMouseOut={changeToDefaultImage }onClick={() => setSelectedPersImg("img/shoulders_1.svg", "shoulder")}></div>
                <div id="blockСhest" onMouseOver={() => changeImage("img/chest.svg")} onMouseOut={changeToDefaultImage} onClick={() => handleBlockClick("img/chest.svg", "chest")}></div>
                
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
            {renderArticle()}
        </PageLayout>
    )
}