sap.ui.define(
  ["sap/ui/demo/empdirectory/controller/BaseController"],
  (BaseController) => {
    "use strict";

    return BaseController.extend(
      "sap.ui.demo.empdirectory.controller.EmployeeList",
      {
        onInit() {
          console.log("+++ EmployeeList controller initialized ----");
        },
        onNavBack() {
          console.log("+++ onNavBack");
          this.getRouter().navTo("homeApp");
        },
      }
    );
  }
);
