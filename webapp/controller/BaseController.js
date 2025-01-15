sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"],
  (Controller, UIComponent) => {
    "use strict";

    return Controller.extend(
      "sap.ui.demo.empdirectory.controller.BaseController",
      {
        getRouter() {
          return UIComponent.getRouterFor(this);
        },
      }
    );
  }
);
