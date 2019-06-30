import React from 'react';
import runs from './bieg.json'
import { SSL_OP_SINGLE_DH_USE } from 'constants';



export const RunList = () => {


    return (
        <div>
            Lista Biegów
            
            <div>
                {runs.biegi.map(run => 
                <div 
                onClick={() => {console.log('hi')}}
                

                 key={run.id} style={{
                    display: "flex", 
                    justifyContent: "space-around", 
                    font: '20px Arial',
                    weight: '300',
                    margin: '12',
                    border: '1px solid #ededed',
                    boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
                    


                    }}>
                <p>{run.name}</p>
                &nbsp;&nbsp;&nbsp;

                <p>Dystans: {run.length}</p>
                &nbsp;&nbsp;&nbsp;

                <p>Data: {run.startDate}</p>
                &nbsp;&nbsp;&nbsp;
                <p>Zapisz się</p>
                
                &nbsp;&nbsp;&nbsp;


                </div>
                )}
            
            </div>
            
        </div>
    )
}