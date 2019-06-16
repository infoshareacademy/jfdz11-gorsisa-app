import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
// const Header = () => <h1> Create run! </h1>

class CreateRun extends React.Component {
   
    render() {
        return (            <div className="container">
            <h1 style={{textAlign: "center"}}> Create run! </h1>
            <h2> 
Create run form </h2>
            
            <div className="map" id="map"> 
            <LeafletMap
        center={[54.347629, 18.6452324]}
        zoom={9}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        
      >
          
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        
        <Marker position={[54.347629, 18.6452324 ]}>
          <Popup>
            Start
          </Popup>
        </Marker>
        <Marker position={[54.347629, 19.6452324 ]}>
          <Popup>
            Meta
          </Popup>
        </Marker>
        
      </LeafletMap>
            
            </div>
            <div className="input">
                <form>          
                    <div className="box">             
                    <h1>Dodaj bieg :</h1>             
                    <label>
                    <span>Nazwa</span>                
                    <input type="text" className="wpis"/>             
                    </label>              
                    <label>                
                    <span>Region :</span>
                    <input type="text" className="wpis" />             
                    </label>              
                    <label>                 
                    <span>Trasa :</span>                 
                    <input type="text" className="start"/>  
                    <input type="text" className="meta"/>            
                    </label>             
                    <label>                 
                    <span>Opis biegu :</span>                 
                    <textarea className="wiadomosc"  ></textarea>                 
                               
                    </label>                                  
                </div>     
                </form>
                </div>
            </div>
            
        )
    }
    
}

export default CreateRun;