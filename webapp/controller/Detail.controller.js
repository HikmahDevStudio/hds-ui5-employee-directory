sap.ui.define(
  ["sap/ui/demo/empdirectory/controller/BaseController"],
  (BaseController) => {
    "use strict";

    return BaseController.extend("sap.ui.demo.empdirectory.controller.Detail", {
      onInit() {
        console.log("+++ Detail controller initialized ----");
      },
      onNavBack() {
        // this.getRouter().navTo("overview");
        console.log("+++ onNavBack");
        this.getView().getParent().to("overview");
      },
    });
  }
);
