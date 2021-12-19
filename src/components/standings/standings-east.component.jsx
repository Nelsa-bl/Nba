import React from 'react';
import { TabelPosition } from './tabel.component';
import Table from 'react-bootstrap/Table';

export const StandingsEast = (props) => {
    return (
        <div className="standings east">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th style={{width: "30px"}}><span className='conference'></span></th>
                    <th style={{width: "200px",textAlign: "left", paddingLeft: "15px"}}>Eastern Conference</th>
                    <th style={{width: "50px"}}>Pl</th>
                    <th style={{width: "50px"}}>W</th>
                    <th style={{width: "50px"}}>L</th>
                    <th style={{width: "50px"}}>%</th>
                    <th className='hideField' style={{width: "50px"}}>HOME</th>
                    <th className='hideField' style={{width: "50px"}}>%</th>
                    <th className='hideField' style={{width: "50px"}}>AWAY</th>
                    <th className='hideField' style={{width: "50px"}}>%</th>
                    <th style={{width: "50px"}}>L-10</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    props.standingsTabel.map(placment => (
                        <TabelPosition key={placment.id} placment={placment} />
                    ))        
                    }
                </tbody>
            </Table>  
        </div>
    )  
};