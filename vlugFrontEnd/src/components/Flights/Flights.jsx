import React from "react";

const Flights = () => {
  const validateCheck = (e) => {
    const id = e.target.id;
    const idaVuelta = document.getElementById("ida_vuelta");
    const ida = document.getElementById("ida");

    if (id === "ida") {
      idaVuelta.checked = false;
    } else if (id === "ida_vuelta") {
      ida.checked = false;
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
              name="ida_vuelta"
              id="ida_vuelta"
              onChange={(e) => validateCheck(e)}
              className="mr-2"
            />
            <label htmlFor="ida_vuelta">Ida y vuelta</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="ida"
              id="ida"
              onChange={(e) => validateCheck(e)}
              className="mr-2"
            />
            <label htmlFor="ida">Ida</label>
          </div>
        </div>
        <div className="flex">
          <div className="mr-24">
            <p className="font-semibold">Viaje</p>
            <select name="desde" id="desde" className="mr-5">
              <option disabled selected>Desde</option>
              <option value="santiago">Santiago del Estero</option>
              <option value="santiago">Cordoba</option>
              <option value="santiago">Mendoza</option>
              <option value="santiago">Buenos Aires</option>
              <option value="santiago">Tucuman</option>
            </select>
            <select name="hacia" id="hacia">
              <option disabled selected>Hacia</option>
              <option value="santiago">Santiago del Estero</option>
              <option value="santiago">Cordoba</option>
              <option value="santiago">Mendoza</option>
              <option value="santiago">Buenos Aires</option>
              <option value="santiago">Tucuman</option>
            </select>
          </div>
          <div className="mr-24">
            <p className="font-semibold">Estadia</p>
            <select name="salida" id="salida" className="mr-5">
              <option disabled selected>Salida</option>
              <option value="fecha1">Fecha1</option>
              <option value="fecha2">Fecha2</option>
              <option value="fecha3">Fecha3</option>
              <option value="fecha4">Fecha4</option>
              <option value="fecha5">Fecha5</option>
            </select>
            <select name="regreso" id="regreso">
              <option disabled selected>Regreso</option>
              <option value="fecha1">Fecha1</option>
              <option value="fecha2">Fecha2</option>
              <option value="fecha3">Fecha3</option>
              <option value="fecha4">Fecha4</option>
              <option value="fecha5">Fecha5</option>
            </select>
          </div>
          <div>
            <p className="font-semibold">Integrantes</p>
            <select name="cantidad_pasajeros" id="cantidad_pasajeros" >
              <option disabled selected>Pasajeros</option>
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
