sap.ui.define(
  ["sap/ui/demo/empdirectory/controller/BaseController"],
  (BaseController) => {
    "use strict";

    return BaseController.extend(
      "sap.ui.demo.empdirectory.controller.Overview",
      {
        onInit() {
          console.log("+++ Overview controller initialized ----");
        },
      }
    );
  }
);
