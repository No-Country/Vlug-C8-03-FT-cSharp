import React from "react";

const Flights = () => {
  const validateCheck = (e) => {
    const id = e.target.id;
    const roundTripInput = document.getElementById("round_trip");
    const goingInput = document.getElementById("going");
    const returnTripInput = document.getElementById("return_date");
    returnTripInput.setAttribute('class', 'block')

    if (id === "going") {
      roundTripInput.checked = false;
      returnTripInput.setAttribute('class', 'hidden')
    } else if (id === "round_trip") {
      goingInput.checked = false;
      if(returnTripInput.classList.value !== 'block'){
        returnTripInput.setAttribute('class', 'block')
      }
    }
  };

  return (
    <div className="flex flex-col w-full h-[50%] mt-3 p-5 border-2 border-black">
      <p className="mb-3 font-bold">Reserva tu vuelo</p>
      <form>
        <div className="flex w-full mb-5">
          <div className="mr-5">
            <input
              type="checkbox"
              name="round_trip"
              id="round_trip"
              onChange={(e) => validateCheck(e)}
              className="mr-2"
            />
            <label htmlFor="round_trip">Ida y vuelta</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="going"
              id="going"
              onChange={(e) => validateCheck(e)}
              className="mr-2"
            />
            <label htmlFor="going">Solo de ida</label>
          </div>
        </div>
        <div className="flex">
          <div className="mr-24">
            <p className="font-semibold">Viaje</p>
            <select name="from" id="from" className="mr-5" defaultValue="from">
              <option disabled value="from">Desde</option>
              <option value="santiago">Santiago del Estero</option>
              <option value="santiago">Cordoba</option>
              <option value="santiago">Mendoza</option>
              <option value="santiago">Buenos Aires</option>
              <option value="santiago">Tucuman</option>
            </select>
            <select name="to" id="to" defaultValue="to">
              <option disabled value="to">Hacia</option>
              <option value="santiago">Santiago del Estero</option>
              <option value="santiago">Cordoba</option>
              <option value="santiago">Mendoza</option>
              <option value="santiago">Buenos Aires</option>
              <option value="santiago">Tucuman</option>
            </select>
          </div>
          <div className="mr-24">
            <p className="font-semibold">Estadia</p>
            <select name="departure_date" id="departure_date" className="mr-5" defaultValue="departure_date">
              <option disabled value="departure_date">Salida</option>
              <option value="fecha1">Fecha1</option>
              <option value="fecha2">Fecha2</option>
              <option value="fecha3">Fecha3</option>
              <option value="fecha4">Fecha4</option>
              <option value="fecha5">Fecha5</option>
            </select>
            <select name="return_date" id="return_date" defaultValue="return_date">
              <option disabled value="return_date">Regreso</option>
              <option value="fecha1">Fecha1</option>
              <option value="fecha2">Fecha2</option>
              <option value="fecha3">Fecha3</option>
              <option value="fecha4">Fecha4</option>
              <option value="fecha5">Fecha5</option>
            </select>
          </div>
          <div>
            <p className="font-semibold">Pasajeros</p>
            <select name="passengers_amount" id="passengers_amount" defaultValue="passengers_amount">
              <option disabled value="passengers_amount">Cantidad de pasajeros</option>
              <option value="1">1 Pasajero</option>
              <option value="2">2 Pasajero/s</option>
              <option value="3">3 Pasajero/s</option>
              <option value="4">4 Pasajero/s</option>
              <option value="5">5 Pasajero/s</option>
            </select>
          </div>
        </div>
        <button type="submit" className="w-[110px] h-[40px] mt-5 bg-[#333] text-white rounded-sm">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Flights;
