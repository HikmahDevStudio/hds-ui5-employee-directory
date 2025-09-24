sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
  ],
  (Controller, UIComponent, History) => {
    "use strict";

    console.log("+++ this is the BaseController of the application");

    return Controller.extend(
      "hds.ui5.employeedirectory.controller.BaseController",
      {
        getRouter() {
          return UIComponent.getRouterFor(this);
        },

        onNavBack() {
          const oHistory = History.getInstance();
          const sPreviousHash = oHistory.getPreviousHash();

          sPreviousHash !== undefined
            ? window.history.go(-1)
            : this.getRouter().navTo("homeApp", {}, true);
        },
      }
    );
  }
);
