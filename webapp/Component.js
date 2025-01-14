sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  (UIComponent, JSONModel) => {
    "use strict";

    return UIComponent.extend("sap.ui.demo.empdirectory.Component", {
      metadata: {
        manifest: "json",
      },

      init() {
        console.log("++Component initialized");

        // Call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);

        // set data model on view
        const oData = {
          employee: {
            name: "Shahabuddin",
          },
        };

        const oModel = new JSONModel(oData);
        this.setModel(oModel);

        // Get the router object & initialize it  with the router configuration
        this.getRouter().initialize();
      },
    });
  }
);
