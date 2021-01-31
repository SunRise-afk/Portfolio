import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

const Works = lazy(() => import("./Works"));
const SingleProject = lazy(() => import("../SingleProject/SingleProject"));
const WorksContainer = ({
  popUpVisibility,
  changePopUpVisibility,
  isTelegramModalVisible,
  setIsTelegramModalVisible,
}) => {
  let match = useRouteMatch();
  return (
    <Suspense
      fallback={
        <>
          <Navbar
            changePopUpVisibility={changePopUpVisibility}
            popUpVisibility={popUpVisibility}
          ></Navbar>
          <h1 style={{ textAlign: "center", marginTop: "200px" }}>
            Loading... Please hold on.
          </h1>
        </>
      }
    >
      <Switch>
        <Route path={`${match.path}/:projId`}>
          <SingleProject
            changePopUpVisibility={changePopUpVisibility}
            popUpVisibility={popUpVisibility}
            isTelegramModalVisible={isTelegramModalVisible}
            setIsTelegramModalVisible={setIsTelegramModalVisible}
          ></SingleProject>
        </Route>
        <Route
          path={match.path}
          component={() => (
            <Works
              changePopUpVisibility={changePopUpVisibility}
              popUpVisibility={popUpVisibility}
              isTelegramModalVisible={isTelegramModalVisible}
              setIsTelegramModalVisible={setIsTelegramModalVisible}
            />
          )}
        ></Route>
      </Switch>
    </Suspense>
  );
};
export default WorksContainer;
