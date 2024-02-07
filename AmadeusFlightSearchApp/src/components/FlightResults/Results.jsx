import React, { useEffect } from 'react';




export const Results = () => {
    return (
        <div>

            <div className="col-md-12" id="flightTableDiv" hidden>
                <div className="card bg-transparent">
                    <div className="card-header" align="center" style={{ fontSize: '34px' }}> Gidiş Uçuşları </div>
                    <div className="card-body">
                        <table className="table datatables" id="FlightTable">
                            <thead>
                                <tr>
                                    <th>Uçuş Kodu</th>
                                    <th>Uçuş Firması</th>
                                    <th>Nereden</th>
                                    <th>Kalkış Saati</th>
                                    <th>İniş Saati</th>
                                    <th>Nereye</th>
                                    <th>Uçuş Süresi</th>
                                    <th>Bilet Fiyatı</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div className="col-md-12 mt-3" id="flightTable2Div" hidden>
                <div className="card bg-transparent">
                    <div className="card-header" align="center" style={{ fontSize: '34px' }}> Dönüş Uçuşları </div>
                    <div className="card-body">
                        <table className="table datatables" id="FlightTable2">
                            <thead>
                                <tr>
                                    <th>Uçuş Kodu</th>
                                    <th>Uçuş Tarihi</th>
                                    <th>Nereden</th>
                                    <th>Kalkış Saati</th>
                                    <th>İniş Saati</th>
                                    <th>Nereye</th>
                                    <th>Uçuş Süresi</th>
                                    <th>Bilet Fiyatı</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Add rows dynamically based on your data */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}
