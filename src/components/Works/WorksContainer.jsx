import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

const Works = lazy(() => import("./Works"));
const SingleProject = lazy(() => import("../SingleProject/SingleProject"));
const WorksContainer = () => {
  let match = useRouteMatch();
  return (
    <Suspense
      fallback={
        <>
          <Navbar></Navbar>
          <h1 style={{ textAlign: "center", marginTop: "200px" }}>
            Loading... Please hold on.
          </h1>
        </>
      }
    >
      <Switch>
        <Route path={`${match.path}/:projId`}>
          <SingleProject></SingleProject>
        </Route>
        <Route path={match.path} component={() => <Works />}></Route>
      </Switch>
    </Suspense>
  );
};
export default WorksContainer;
