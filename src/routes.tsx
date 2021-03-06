import React from "react";
import { Rocon } from "rocon/react";
import { DocsBuilderPath } from "./pages/docs/builder/Path";
import { DocsBuilderRoot } from "./pages/docs/builder/Root";
import { DocsBuilderSearch } from "./pages/docs/builder/Search";
import { DocsBuilderSingleHash } from "./pages/docs/builder/SingleHash";
import { DocsBuilderState } from "./pages/docs/builder/State";
import { DocsComponentLink } from "./pages/docs/component/Link";
import { DocsComponentRoconRoot } from "./pages/docs/component/RoconRoot";
import { DocsConcepts } from "./pages/docs/Concepts";
import { DocsHookUseHistory } from "./pages/docs/hook/UseHistory";
import { DocsHookUseLocation } from "./pages/docs/hook/UseLocation";
import { DocsHookUseNavigate } from "./pages/docs/hook/UseNavigate";
import { DocsHookUseRoutes } from "./pages/docs/hook/UseRoutes";
import { DocsTop } from "./pages/docs/Top";
import { DocsTypePathSingleRouteInterface } from "./pages/docs/type/PathSingleRouteInferface";
import { DocsTypeReactRouteRecord } from "./pages/docs/type/ReactRouteRecord";
import { DocsUtilIsLocationNotFoundError } from "./pages/docs/util/isLocationNotFoundError";
import { DocsUtilLocationNotFoundError } from "./pages/docs/util/LocationNotFoundError";
import { TopPage } from "./pages/TopPage";
import { TutorialBasicRouting } from "./pages/tutorial/BasicRouting";
import { TutorialDeepRoutes } from "./pages/tutorial/DeepRoutes";
import { TutorialDynamicRoutes } from "./pages/tutorial/DynamicRoutes";
import { TutorialExactRoute } from "./pages/tutorial/ExactRoute";
import { TutorialLocationState } from "./pages/tutorial/LocationState";
import { TutorialNavigation } from "./pages/tutorial/Navigation";
import { TutorialNested } from "./pages/tutorial/Nested";
import { TutorialNotFound } from "./pages/tutorial/NotFound";
import { TutorialQueryParameter } from "./pages/tutorial/QueryParameter";
import { TutorialTop } from "./pages/tutorial/Top";
import { TutorialUtilHooks } from "./pages/tutorial/UtilHooks";

// /tutorial
export const tutorialRoutes = Rocon.Path()
  .exact({
    action: () => <TutorialTop />,
  })
  .route("basic-routing", (r) => r.action(() => <TutorialBasicRouting />))
  .route("exact-route", (r) => r.action(() => <TutorialExactRoute />))
  .route("deep-routes", (r) => r.action(() => <TutorialDeepRoutes />))
  .route("dynamic-routes", (r) => r.action(() => <TutorialDynamicRoutes />))
  .route("navigation", (r) => r.action(() => <TutorialNavigation />))
  .route("not-found", (r) => r.action(() => <TutorialNotFound />))
  .route("query-parameter", (r) => r.action(() => <TutorialQueryParameter />))
  .route("location-state", (r) => r.action(() => <TutorialLocationState />))
  .route("util-hooks", (r) => r.action(() => <TutorialUtilHooks />))
  .route("nested", (r) => r.action(() => <TutorialNested />));

// /docs
export const docsRoutes = Rocon.SingleHash("hash", { optional: true })
  .attach(Rocon.Path())
  .exact({
    action: () => <DocsTop />,
  })
  .route("concepts", (r) => r.action(() => <DocsConcepts />))
  .route("builder")
  .route("hook")
  .route("component")
  .route("type")
  .route("util");

// /docs/builder
export const docsBuilderRoutes = docsRoutes._.builder
  .attach(Rocon.Path())
  .route("path", (r) => r.action(() => <DocsBuilderPath />))
  .route("search", (r) => r.action(() => <DocsBuilderSearch />))
  .route("state", (r) => r.action(() => <DocsBuilderState />))
  .route("singleHash", (r) => r.action(() => <DocsBuilderSingleHash />))
  .route("root", (r) => r.action(() => <DocsBuilderRoot />));

// /docs/hook
export const docsHookRoutes = docsRoutes._.hook
  .attach(Rocon.Path())
  .route("useRoutes", (r) => r.action(() => <DocsHookUseRoutes />))
  .route("useHistory", (r) => r.action(() => <DocsHookUseHistory />))
  .route("useLocation", (r) => r.action(() => <DocsHookUseLocation />))
  .route("useNavigate", (r) => r.action(() => <DocsHookUseNavigate />));

// /docs/component
export const docsComponentRoutes = docsRoutes._.component
  .attach(Rocon.Path())
  .route("roconRoot", (r) => r.action(() => <DocsComponentRoconRoot />))
  .route("link", (r) => r.action(() => <DocsComponentLink />));

// /docs/type
export const docsTypeRoutes = docsRoutes._.type
  .attach(Rocon.Path())
  .route("reactRouteRecord", (r) =>
    r.action(() => <DocsTypeReactRouteRecord />)
  )
  .route("pathSingleRouteInterface", (r) =>
    r.action(() => <DocsTypePathSingleRouteInterface />)
  );

// /docs/util
export const docsUtilRoutes = docsRoutes._.util
  .attach(Rocon.Path())
  .route("locationNotFoundError", (r) =>
    r.action(() => <DocsUtilLocationNotFoundError />)
  )
  .route("isLocationNotFoundError", (r) =>
    r.action(() => <DocsUtilIsLocationNotFoundError />)
  );

export const toplevelRoutes = Rocon.Path()
  .exact({
    action: () => <TopPage />,
  })
  .route("tutorial", (p) => p.attach(tutorialRoutes))
  .route("docs", (p) => p.attach(docsRoutes));
