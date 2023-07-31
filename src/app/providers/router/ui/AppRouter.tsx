import React, { Suspense, useCallback, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "shared/ui/PageLoader/PageLoader";

const AppRouter = () => {
  const renderWithWrapper = useCallback(() => {
    // return (
    //   <Route
    //     key={path}
    //     path={path}
    //     element={
    //       <Suspense fallback={<PageLoader />}>
    //         <div className="page-wrapper">{element}</div>
    //       </Suspense>
    //     }
    //   />
    // );
  }, []);

  return (
    <Routes>
      {/* {Object.values(routeConfig).map(renderWithWrapper)} */}
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
