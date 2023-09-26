sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/proy/customersflex/util/Constants"
  ],
  function (BaseController, JSONModel, Constants) {
    "use strict";

    return BaseController.extend("com.proy.customersflex.controller.App", {
      onInit() {
        let oViewModel = new JSONModel({

          layout: Constants.LAYOUT.oneColumn

        });
        this.getOwnerComponent().setModel(oViewModel, Constants.MODEL.app_view);


        const url = sap.ui.require.toUrl(Constants.MODEL.model_proy) + Constants.MODEL.model_url_ext;
        this._model = new sap.ui.model.odata.v2.ODataModel(url, {
          json: true,
          headers: {
            "DataServiceVersion": "2.0",
            "Cache-Control": "no-cache, no-store",
            "Pragma": "no-cache"

          },
          useBatch: false
        });

        this._model.read(Constants.MODEL.entity_set, {
          async: true,
          success: jQuery.proxy(this.success, this),
          error: jQuery.proxy(this.error, this)
        })
      },
      success: function (oData) {
        const oModel = new JSONModel(oData.results);
        console.log(oModel);
        this.getOwnerComponent().setModel(oModel, Constants.MODEL.model_name);
      },
      error: function () {
        alert(Constants.MODEL.error);
      }
    });
  }
);
