import React from 'react';
import runs from './bieg.json'
import { SSL_OP_SINGLE_DH_USE } from 'constants';



export const RunList = () => {


    return (
        <div>
            Lista Biegów
            
            <div>
                {runs.biegi.map(run => 
                <div key={run.id} style={{display: "flex", justifyContent: "space-between", border: "3px outset black", backgroundColor: "494747" }}>
                <p>{run.name}</p>
                <p>Dystans: {run.length}</p>
                
                </div>
                )}
            </div>
        </div>
    )
}