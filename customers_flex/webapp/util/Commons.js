sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History"
], function () {
    "use strict";
    //borrar lo que importo pero no uso 
    return {
        onChangeLanguage: function () {
            var sCurrentLanguage = sap.ui.getCore().getConfiguration().getLanguage();
            console.log(sCurrentLanguage);
            var sNewLanguage = sCurrentLanguage === "en" ? "es" : "en";
            console.log(sNewLanguage);
            sap.ui.getCore().getConfiguration().setLanguage(sNewLanguage);
        }
        
    };
});
