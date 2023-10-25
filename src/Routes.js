import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import tabs from "./tabs.json";
import { Suspense, lazy } from "react";
import Loader from "./Loader";

tabs.sort((a, b) => a.order - b.order);

const DummyList = lazy(() => import(`./${tabs[0].path}`));
const DummyTable = lazy(() => import(`./${tabs[1].path}`));
const DummyChart = lazy(() => import(`./${tabs[2].path}`));

const CustomRoutes = () => {
let componentArr = [<DummyList />, <DummyTable />, <DummyChart />];

  return (
    <Switch>
      {tabs.map((tab) => (
        <Route key={tab.id} path={`/${tab.id}`}>
          <Suspense fallback={<Loader />}>{componentArr[tab.order]}</Suspense>
        </Route>
      ))}
      <Route exact path="/">
        <Redirect to="/dummyList"/>
      </Route>
    </Switch>
  );
};

export default CustomRoutes;
