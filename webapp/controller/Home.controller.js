sap.ui.define(
  ["hds/ui5/employeedirectory/controller/BaseController"],
  (BaseController) => {
    "use strict";

    return BaseController.extend("hds.ui5.employeedirectory.controller.Home", {
      onInit() {},

      onShowEmployeeBtnPress() {
        this.getRouter().navTo("employeeList");
      },
    });
  }
);
