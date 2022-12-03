import { useState, useEffect, Suspense, lazy } from "react";
import { data } from "browserslist";
import TabGroup from "./Tabs";
import { ReserveBox } from "./styled";
import Loader from "../Loader";

const Reserva = lazy(() => import('../Reserva'))
const AdministrarVuelo = lazy(() => import('../AdministrarVuelo'))
const EstadoVuelo = lazy(() => import('../EstadoVuelo'))

const tabs = ['Reserva', 'Administrar vuelo', 'Estado de vuelo'];

const Flights = () => {
  const [active, setActive] = useState(tabs[0]);

  return (<>
    <ReserveBox>
      <TabGroup tabs={tabs} active={active} setActive={setActive}>
        {active === 'Reserva' &&
          <Suspense fallback={<Loader />}>
            <Reserva />
          </Suspense>
        }
        {active === 'Administrar vuelo' &&
          <Suspense fallback={<Loader />}>
            <AdministrarVuelo />
          </Suspense>
        }
        {active === 'Estado de vuelo' &&
          <Suspense fallback={<Loader />}>
            <EstadoVuelo />
          </Suspense>
        }
      </TabGroup>
    </ReserveBox>
  </>
  );
};

export default Flights;
