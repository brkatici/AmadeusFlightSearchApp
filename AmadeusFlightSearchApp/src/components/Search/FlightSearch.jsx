import React, { useState, useEffect, useRef } from 'react';

const FlightSearch = () => {
  const [isOneWay, setIsOneWay] = useState(false);
  const [returnDate, setReturnDate] = useState('');
  const loadingOverlayRef = useRef(null);


  const handleRadioChange = (value) => {
    setIsOneWay(value === 1);
    if (value === 1) {
      setReturnDate('');
    }
  };


  const showLoadingIcon = () => {
    if (loadingOverlayRef.current) {
      loadingOverlayRef.current.hidden = '';
    }
  };

  const hideLoadingIcon = () => {
    if (loadingOverlayRef.current) {
      loadingOverlayRef.current.hidden = 'hidden';
    }
  };


  const handleSearch = async (e) => {
    
  debugger
    e.preventDefault();
    
    var startDate = $("#date-input1").val();
    var endDate = $('#date-input2').val();
    var fromWhere = $("#simple-select1").val();
    var toWhere = $("#simple-select2").val();




    if (fromWhere == -1 || toWhere == -1) {
      swal({
        title: "Kalkış - Varış Lokasyonu",
        text: "Kalkış - Varış Lokasyonu seçimi hatalı veya eksik",
        icon: "warning",
        dangerMode: true,
      })
    } else if (fromWhere === toWhere) {
      swal({
        title: "Kalkış - Varış Lokasyonu",
        text: "Kalkış - Varış Lokasyonu seçiminden biri farklı olmalıdır",
        icon: "warning",
        dangerMode: true,
      })

    }
    else {
      showLoadingIcon();
      setTimeout(() => {
        $.ajax({
          url: "http://localhost:3001/flights", // Verileri çekeceğiniz URL
          method: "GET",
  
          success: function (data) {
            
            var dataTable = $('#FlightTable').DataTable({
              "bDestroy": true

            });
            var dataTable2 = $('#FlightTable2').DataTable({
              "bDestroy": true
            });
            dataTable.clear().draw();
            dataTable2.clear().draw();
            const flightsData = data[0];
  
            var filteredData = flightsData.filter(function (flight) {
              return flight.Nereden === fromWhere && flight.Nereye === toWhere;
            });
            if (filteredData.length == 0) {
              hideLoadingIcon();
              swal({
                title: "Hiçbir Uçuş Bulunamadı",
                text: "Aradığınız kriterlere uygun bir uçuş bulunamadı",
                icon: "warning",
                dangerMode: true,
              })
            }
  
            hideLoadingIcon();
            // Elde edilen verileri kullanabilirsiniz
            for (var i = 0; i < filteredData.length; i++) {
              if (document.getElementById('donusInput').style.display == 'none') {
                flightTable2Div.hidden = 'hidden';
                flightTableDiv.hidden = "";
                dataTable.row.add([
                  filteredData[i].UcusKodu,
                  filteredData[i].HavaYolu,
                  filteredData[i].Nereden,
                  filteredData[i].KalkisSaati,
                  filteredData[i].InisSaati,
                  filteredData[i].Nereye,
                  filteredData[i].UcusSuresi,
                  filteredData[i].BiletFiyati + " ₺",
                  '<button class="btn btn-warning ml-2" style="width:120px;">Bilet Al</button>'
  
  
  
                ]).draw(false);
              }
              else {
                flightTable2Div.hidden = '';
                flightTableDiv.hidden = '';
                dataTable.row.add([
                  filteredData[i].UcusKodu,
                  filteredData[i].HavaYolu,
                  filteredData[i].Nereden,
                  filteredData[i].KalkisSaati,
                  filteredData[i].InisSaati,
                  filteredData[i].Nereye,
                  filteredData[i].UcusSuresi,
                  filteredData[i].BiletFiyati + " ₺",
                  '<button class="btn btn-warning ml-2" style="width:120px;">Bilet Al</button>'
  
                ]).draw(false);
  
                dataTable2.row.add([
                  generateRandomFlightNumber(),
                  filteredData[i].HavaYolu,
                  filteredData[i].Nereye,
                  filteredData[i].KalkisSaati,
                  filteredData[i].InisSaati,
                  filteredData[i].Nereden,
                  filteredData[i].UcusSuresi,
                  filteredData[i].BiletFiyati + " ₺",
                  '<button class="btn btn-warning ml-2" style="width:120px;">Bilet Al</button>'
  
                ]).draw(false);
  
              }
  
  
            }
          },
          error: function (xhr, textStatus, errorThrown) {
            console.error("Hata:", textStatus, errorThrown);
          }
        });
      }, 2000);
     
    }

    //     e.preventDefault();

    //     const apiUrl = `http://localhost:3001/flights`;
    //     var fromWhere = $("#simple-select1").val();
    //     var toWhere = $("#simple-select2").val();
    //     var startDate = $("#date-input1").val();
    //     var endDate = $('#date-input2').val();

    //     if (fromWhere == -1 || toWhere == -1) {
    //       swal({
    //           title: "Kalkış - Varış Lokasyonu",
    //           text: "Kalkış - Varış Lokasyonu seçimi hatalı veya eksik",
    //           icon: "warning",
    //           dangerMode: true,
    //       })
    //   } else if(fromWhere===toWhere){
    //       swal({
    //           title: "Kalkış - Varış Lokasyonu",
    //           text: "Kalkış - Varış Lokasyonu seçiminden biri farklı olmalıdır",
    //           icon: "warning",
    //           dangerMode: true,
    //       })
    //     }
    //       else{

    //         fetch(apiUrl)
    //       .then(response => {
    //         if (!response.ok) {
    //           throw new Error(`API isteği başarısız, status: ${response.status}`);
    //         }
    //         return response.json();
    //       })
    //       .then(data => {
    //         // Verilerin içindeki iç diziye eriş
    //         const flightsData = data[0];

    //         // İstenen şartlara uyan uçuşları filtrele
    //         const filteredFlights = flightsData.filter(flight => {
    //           return flight.Nereden === fromWhere && flight.Nereye === toWhere;
    //         });

    //         // Filtrelenmiş uçuşları konsola yazdır

    //         const flightTable2Div = document.getElementById('flightTable2Div');
    // const flightTableDiv = document.getElementById('flightTableDiv');
    // var dataTable = $('#FlightTable').DataTable({

    // });
    // var dataTable2 = $('#FlightTable2').DataTable({});
    // dataTable.clear().draw();
    // dataTable2.clear().draw();  
    //         console.log(filteredFlights);
    //       })
    //       .catch(error => console.error('API isteği başarısız:', error));
    //       }
  };
  function generateRandomFlightNumber() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let flightCode = '';

    for (let i = 0; i < 2; i++) {
        const randomLetterIndex = Math.floor(Math.random() * letters.length);
        flightCode += letters[randomLetterIndex];
    }

    const randomDigits = Math.floor(Math.random() * 1000);
    const paddedDigits = randomDigits.toString().padStart(3, '0');

    flightCode += paddedDigits;

    return flightCode;
}

  useEffect(() => {
    $('.select2').select2(
      {
        theme: 'bootstrap4',
      });
    // Run the date picker script when the component mounts
    $('.drgpicker').daterangepicker({
      singleDatePicker: true,
      timePicker: false,
      showDropdowns: true,
      locale: {
        format: 'DD-MM-YYYY'
      },
      startDate: returnDate || moment()
    });
  }, [returnDate]);
  return (
    <div>
      <div id="loadingOverlay" ref={loadingOverlayRef} hidden align="center">
        <div className="overlay-content">
          <div className="spinner-border mr-3 text-primary" role="status" id="loadingIcon">
          </div>
          <span id="loadingText">Lütfen Bekleyin..</span>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row align-items-center mb-2">
            <div className="col" align="center">
              <h2 className="h5 page-title">Hoşgeldiniz! Haydi sizin için en uygun uçuşu bulalım.</h2>
              <p>
                App Test Notes:

              </p>
              <ul style={{ listStyle: 'none' }}>
                <li>LHR - AMS & IST-ADB shows result with any date (single way or roundtrip)</li>
                <li>Other selections will show sweet alert messages.</li>
                <li>SelectBox value errors handled (if matches or no value)</li>
              </ul>
            </div>
          </div>

          <div className="mb-2 align-items-center">
            <div className="card shadow mb-4 bg-transparent">
              <div className="card-body" align="center">
                <form onSubmit={handleSearch} id="FlightSearchForm">
                  <div className="row d-flex justify-content-center  align-items-center mb-2">
                    <div className="custom-control custom-radio mr-3">
                      <input
                        type="radio"
                        id="customRadio1"
                        name="customRadio"
                        onChange={() => handleRadioChange(1)}
                        className="custom-control-input"
                      />
                      <label className="custom-control-label" htmlFor="customRadio1">
                        Tek Yön
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio2"
                        name="customRadio"
                        onChange={() => handleRadioChange(0)}
                        checked={!isOneWay}
                        className="custom-control-input"
                      />
                      <label className="custom-control-label" htmlFor="customRadio2">
                        Gidiş Dönüş
                      </label>
                    </div>
                  </div>

                  <div className="row col-12 d-flex justify-content-center  align-items-center rounded-pill" style={{ background: 'rgba(0, 0, 0, 0.1)' }}>
                    <div className="form-group col-2 m-3">
                      <label htmlFor="simple-select1">Nereden</label>
                      <select className="form-control select2" id="simple-select1" defaultValue="-1">
                        <option value="-1">Seçiniz</option>
                        <option value="IST">IST Istanbul</option>
                        <option value="ADB">ADB Izmir</option>
                        <option value="LHR">LHR London</option>
                        <option value="AMS">AMS Amsterdam(Schipol)</option>
                      </select>
                    </div>

                    <div className="form-group col-2 m-2">
                      <label htmlFor="simple-select2">Nereye</label>
                      <select className="form-control select2" id="simple-select2" defaultValue="-1">
                        <option value="-1">Seçiniz</option>
                        <option value="ADB">ADB Izmir</option>
                        <option value="IST">IST Istanbul</option>
                        <option value="LHR">LHR London</option>
                        <option value="AMS">AMS Amsterdam(Schipol)</option>
                      </select>
                    </div>


                    <div className="form-group col-2 m-2">
                      <label htmlFor="date-input1">Gidiş Tarihi</label>
                      <div className="input-group">
                        <input type="text" className="form-control drgpicker" id="date-input1" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                          <div className="input-group-text" id="button-addon-date1"><span className="fe fe-calendar fe-16"></span></div>
                        </div>
                      </div>
                    </div>


                    <div className="form-group col-2 m-2" id="donusInput" style={{ display: isOneWay ? 'none' : 'block' }}>
                      <label htmlFor="date-input1">Dönüş Tarihi</label>
                      <div className="input-group">
                        <input type="text" className="form-control drgpicker" id="date-input2" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                          <div className="input-group-text" id="button-addon-date2"><span className="fe fe-calendar fe-16"></span></div>
                        </div>
                      </div>
                    </div>

                    <button type="submit" id="sbmtbtn" className="btn btn-danger rounded-pill btn-lg ml-5 ">Uçuş Ara <i className="bi bi-airplane gly-rotate-45" style={{ fontSize: '25px' }}></i></button>
                  </div>

                  {/* Rest of your form */}
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>




  );
};

export default FlightSearch;
