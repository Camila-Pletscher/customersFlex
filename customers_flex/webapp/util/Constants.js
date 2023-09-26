sap.ui.define([], function () {
    'use strict';
    return {
        MODEL: {
            model_name: "customerModel",
            select_item_model: "selectedCustomerModel",
            model_proy: "com/proy/customersflex",
            model_url_ext: "/northwind/northwind.svc/",
            entity_set: "/Customers",
            app_view: "appView",
            error: "error"
        },

        MODEL_FILTER: {
            company: "filterSelect",
            property_selected_key: "/selectKeyName"

        },

        BINDING: {
            binding_items: "items"
        },

        VIEW: {
            view_detail: "ViewDetail",

        },
        FILTER: {
            search_contact : "ContactName",
            search_query: "query",
            search_app: "Application",
            select_company: "CompanyName",
            select_clean: ""
            

        },
        SORT: {
            sort_contact_name: "ContactName"
        },
        ID: {
            table_customers: "customersTable"
        },

        LAYOUT: {
            twoColumns: "TwoColumnsMidExpanded",
            oneColumn: "OneColumn"
        }

    };
}, true);