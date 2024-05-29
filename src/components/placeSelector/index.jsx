// eslint-disable-next-line react/prop-types
export const PlaceSelector = ({selectedPlace,setSelectedPlace}) => {
    return (
        <>        
            <div id="Where1">
                <img id="where1Img" src="img/EquipmentHome.svg" title="Дома" alt="Дома" onClick={() => setSelectedPlace("home")}/>
                <div id="where_home" style={{background: selectedPlace == "home"? "red": "transparent"}}></div>
                
            </div>

            <div id="Where2">
                <img id="where2Img" src="img/EquipmentOutside.svg" title="Дома" alt="Дома" onClick={() => setSelectedPlace("outdoor")}/>
                <div id="where_home2" style={{background: selectedPlace == "outdoor"? "red": "transparent"}}></div>
            </div>

            <div id="Where3">
                <img id="where3Img" src="img/EquipmentGym.svg" title="Дома" alt="Дома" onClick={() => setSelectedPlace("gym")}/>
                <div id="where_home3" style={{background: selectedPlace == "gym"? "red": "transparent"}}></div>
            </div>
        </>
    )
}