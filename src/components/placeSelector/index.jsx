// eslint-disable-next-line react/prop-types
export const PlaceSelector = ({selectedPlace,setSelectedPlace}) => {
    return (
        <>        
            <div className="where" id="Where1">
                <img id="where1Img" src="img/EquipmentHome.svg" title="Дома" alt="Дома" onClick={() => setSelectedPlace("home")} />
                <div className="where-block" id="where_home" style={{ background: selectedPlace === "home" ? "red" : "transparent" }}></div>
            </div>
            <div className="where" id="Where2">
                <img id="where2Img" src="img/EquipmentOutside.svg" title="На улице" alt="На улице" onClick={() => setSelectedPlace("outdoor")} />
                <div className="where-block" id="where_home2" style={{ background: selectedPlace === "outdoor" ? "red" : "transparent" }}></div>
            </div>
            <div className="where" id="Where3">
                <img id="where3Img" src="img/EquipmentGym.svg" title="В зале" alt="В зале" onClick={() => setSelectedPlace("gym")} />
                <div className="where-block" id="where_home3" style={{ background: selectedPlace === "gym" ? "red" : "transparent" }}></div>
            </div>
        </>
    )
}