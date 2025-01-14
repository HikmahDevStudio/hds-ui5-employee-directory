sap.ui.define(
  ["sap/ui/demo/empdirectory/controller/BaseController"],
  (BaseController) => {
    return BaseController.extend(
      "sap.ui.demo.empdirectory.controller.EmployeeHomePage",
      {
        onInit() {
          console.log("+++EmployeeHomePage controller initialized");
        },
      }
    );
  }
);
