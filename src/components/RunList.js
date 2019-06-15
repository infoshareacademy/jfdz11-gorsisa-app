
import React from 'react';
import runs from './bieg.json'



export const RunList = () => {


    return (
        <div>
            Lista Biegów
            <div>
                {runs.biegi.map(run => 
                <div key={run.id} style={{display: "flex", justifyContent: "space-between"}}>
                <p>{run.name}</p>
                <p>Ilość miejsc: {run.capacity}</p>
                
                </div>
                )}
            </div>
        </div>
    )
}