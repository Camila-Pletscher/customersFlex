sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    'sap/ui/model/Sorter',
    "com/proy/customersflex/util/Constants",
    "com/proy/customersflex/util/Commons"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, FilterOperator, Sorter, Constants, Commons) {
        "use strict";

        return Controller.extend("com.proy.customersflex.controller.Master", {
            onInit: function () {
                const oModelFilter = new JSONModel(); 
                this.getView().setModel(oModelFilter, Constants.MODEL_FILTER.company);

                this.oView = this.getView();
                this._bDescendingSort = false;
                this.oCustomersTable = this.oView.byId(Constants.ID.table_customers);
            },
            onSearch: function (oEvent) {
                var oTableSearchState = []
                var sQuery = oEvent.getParameter(Constants.FILTER.search_query);

                if (sQuery && sQuery.length > 0) {
                    oTableSearchState = [new Filter(Constants.FILTER.search_contact, FilterOperator.Contains, sQuery)];
                }

                this.oCustomersTable.getBinding(Constants.BINDING.binding_items).filter(oTableSearchState, Constants.FILTER.search_app);
            },
            onChangeName: function(){
                
                const customerName = this.getView().getModel(Constants.MODEL_FILTER.company).getProperty(Constants.MODEL_FILTER.property_selected_key);
                console.log(customerName);
                
                var oList = this.getView().byId(Constants.ID.table_customers);
                var oBinding = oList.getBinding(Constants.BINDING.binding_items);
                var aFilters = [];
                if (customerName) {
                    var oFilter = new Filter(Constants.FILTER.select_company, FilterOperator.Contains, customerName);
                    aFilters.push(oFilter);
                } 
                oBinding.filter(aFilters);
            },
            onCleanFilter : function(){
                var oList = this.getView().byId(Constants.ID.table_customers);
                var oBinding = oList.getBinding(Constants.BINDING.binding_items);

                //Limpio el filtro 
                var oModel = this.getView().getModel(Constants.MODEL_FILTER.company);
                oModel.setProperty(Constants.MODEL_FILTER.property_selected_key, Constants.FILTER.select_clean);

                //bindeo sin filtro
                oBinding.filter([]);
            },
            onSort: function () {
                this._bDescendingSort = !this._bDescendingSort;
                var oBinding = this.oCustomersTable.getBinding(Constants.BINDING.binding_items),
                    oSorter = new Sorter(Constants.SORT.sort_contact_name, this._bDescendingSort);

                oBinding.sort(oSorter);
            },
            onListItemPress: function (oEvent) {
                var oItem = oEvent.getSource().getBindingContext(Constants.MODEL.model_name);

                const sPath = oItem.getPath();
                const oItemSelect = this.getView().getModel(Constants.MODEL.model_name).getProperty(sPath);

                console.log(oItemSelect);

                const oModel = new JSONModel(oItemSelect);

                this.getOwnerComponent().setModel(oModel, Constants.MODEL.select_item_model);
                let oViewModel = new JSONModel({

                    layout: Constants.LAYOUT.twoColumns

                });



                this.getOwnerComponent().setModel(oViewModel, Constants.MODEL.app_view);
            }, 
            onChangeLanguage: function(){
                Commons.onChangeLanguage();
            }
        });
    });
