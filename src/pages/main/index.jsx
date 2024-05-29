import { useState, useEffect, useRef } from "react";
import { PageLayout } from "../../components/pageLayout";
import { PlaceSelector } from "../../components/placeSelector";
import * as sholderArticle from "../Articles/sholderArticle/index.jsx";
import * as chestArticle from "../Articles/chestArticle/index.jsx";

export const MainPage = () => {
    const [selectedPersImg, setSelectedPersImg] = useState("img/Without.svg");
    const [img, setImg] = useState(selectedPersImg);
    const [selectedPlace, setSelectedPlace] = useState("gym");
    const [showArticle, setShowArticle] = useState(null);
    const articleRef = useRef(null);

    const changeImage = (src) => {
        setImg(src);
    };

    const changeToDefaultImage = () => {
        setImg(selectedPersImg);
    };

    const handleBlockClick = (e, src, article) => {
        setSelectedPersImg(src);
        setImg(src);
        setShowArticle(article);
        e.stopPropagation();
    };

    const handleFrameClick = () => {
        setShowArticle(null);
        setSelectedPersImg("img/Without.svg");
        setImg("img/Without.svg");
    };

    useEffect(() => {        
        setShowArticle(`${selectedPersImg}_${selectedPlace}`);
    }, [selectedPlace]);

    useEffect(() => {
        if (showArticle) {
            articleRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [showArticle]);

    const renderArticle = () => {
        switch (showArticle) {
            case "img/shoulders_1.svg_home":
                return <sholderArticle.SholderHomeArticlePage />;      
            case "img/shoulders_1.svg_outdoor":
                return <sholderArticle.SholderOutdoorArticlePage />;    
            case "img/shoulders_1.svg_gym":
                return <sholderArticle.SholderGymArticlePage />;
            
            case "img/chest.svg_home":
                return <chestArticle.ChestHomeArticlePage />;
            case "img/chest.svg_outdoor":
                return <chestArticle.ChestOutdoorArticlePage />;
            case "img/chest.svg_gym":
                return <chestArticle.ChestGymArticlePage />;
            default:
                return null;
        }
    };

    return (
        <PageLayout>
            <div className="backgroundDiv">
                <div id="temp">
                    <div id="frame" >
                        <img id="tempImage" src={img} alt="Temp" onClick={() => handleFrameClick()} />
                        <div id="whereFrame">
                            <PlaceSelector selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
                        </div>
                        <div
                            className="block"
                            id="blockShoulder"
                            onMouseOver={() => changeImage("img/shoulders_1.svg")}
                            onMouseOut={changeToDefaultImage}
                            onClick={(e) => handleBlockClick(e,"img/shoulders_1.svg", `img/shoulders_1.svg_${selectedPlace}`)}
                        ></div>
                        <div
                            className="block"
                            id="blockShoulder2"
                            onMouseOver={() => changeImage("img/shoulders_1.svg")}
                            onMouseOut={changeToDefaultImage}
                            onClick={(e) => handleBlockClick(e,"img/shoulders_1.svg", `img/shoulders_1.svg_${selectedPlace}`)}
                        ></div>
                        <div
                            className="block"
                            id="blockСhest"
                            onMouseOver={() => changeImage("img/chest.svg")}
                            onMouseOut={changeToDefaultImage}
                            onClick={(e) => handleBlockClick(e,"img/chest.svg", `img/chest.svg_${selectedPlace}`)}
                        ></div>
                    </div>
                </div>

                <div ref={articleRef}>
                    {renderArticle()}
                </div>
            </div>
        </PageLayout>
    );
};
