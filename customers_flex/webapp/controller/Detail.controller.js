sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/proy/customersflex/util/Constants"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Constants) {
        "use strict";

        return Controller.extend("com.proy.customersflex.controller.Detail", {
            onInit: function () {

            },
            onCloseDetail: function () {

                //Fx para cerrar el detail, setea el layout en una sola columna 
                let oViewModel = new JSONModel({
                    layout: Constants.LAYOUT.oneColumn
                });

                this.getOwnerComponent().setModel(oViewModel, Constants.MODEL.app_view);
            },

        });
    });
