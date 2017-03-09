sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
<<<<<<< HEAD
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel) {
=======
	"sap/ui/demo/wt/controller/HelloDialog"
], function (UIComponent, JSONModel, HelloDialog) {
>>>>>>> branch 'master' of https://github.com/abercr0mby/my-first-ui5
   "use strict";
   return UIComponent.extend("sap.ui.demo.wt.Component", {
      metadata : {
            manifest: "json"
      },
   	
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);
<<<<<<< HEAD
=======
         
		// set dialog helper
		this._helloDialog = new HelloDialog(this.getAggregation("rootControl"));         
	},

	openHelloDialog : function () {
		this._helloDialog.open();
>>>>>>> branch 'master' of https://github.com/abercr0mby/my-first-ui5
	}
   });
});
