import React from 'react'

// const Header = () => <h1> Create run! </h1>

class CreateRun extends React.Component {

    render() {
        return (
            <div>
            <h1 style={{textAlign: "center"}}> Create run! </h1>
            <h2> Create run form </h2>
            <p> ddd</p>
            </div>
            
        )
    }

    render() {
        return (
            <div className="container">
            <h1 style={{textAlign: "center"}}> Create run! </h1>
            <h2> Create run form </h2>
            <p> ddssssssd</p>
            <div className="map"> mapa</div>
                <div className="input">
                <form>          
                    <div className="box">             
                    <h1>Dodaj bieg :</h1>             
                    <label>
                    <span>Nazwa</span>                
                    <input type="text" className="wpis" name="nazwa" id="nazwa"/>             
                    </label>              
                    <label>                
                    <span>Region :</span>
                    <input type="text" className="wpis" name="email" id="email"/>             
                    </label>              
                    <label>                 
                    <span>Trasa :</span>                 
                    <input type="text" className="wpis" name="temat" id="temat"/>             
                    </label>             
                    <label>                 
                    <span>Opis biegu :</span>                 
                    <textarea className="wiadomosc" name="wiadomosc" id="tresc"></textarea>                 
                    <input type="button" class="button" value="Wyślj" />             
                    </label>                                  
                    </div>     
                </form>
                </div>
            </div>
            
        )
    }
    
}

export default CreateRun;
