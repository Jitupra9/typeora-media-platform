import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
const renderRoutes = (routes) =>
  routes.map(({ path, component: Component, children }, index) => (
    <Route key={index} path={path} element={<Component />}>
      {children && renderRoutes(children)}
    </Route>
  ));

function RouterProvider() {
  return <Routes>{renderRoutes(routes)}</Routes>;
}

export default RouterProvider;
