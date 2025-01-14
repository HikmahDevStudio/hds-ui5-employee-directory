sap.ui.define(
  ["sap/ui/demo/empdirectory/controller/BaseController"],
  (BaseController) => {
    "use strict";

    return BaseController.extend("sap.ui.demo.empdirectory.controller.Home", {
      onInit() {
        console.log("+++ Home Controller +++");
      },
    });
  }
);
