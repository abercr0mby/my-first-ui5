sap.ui.define([
	"sap/ui/base/Object"
], function (UI5Object) {
	"use strict";

	return UI5Object.extend("sap.ui.demo.wt.controller.HelloDialog", {

		constructor : function (oView) {
			this._oView = oView;	
		},

		open : function () {
			var oView = this._oView;
			var oDialog = oView.byId("helloDialog");
			
			// create dialog lazily
			if (!oDialog) {
				var oFragmentController = {
					onCloseDialog : function () {
						oDialog.close();
					}
				};
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "sap.ui.demo.wt.view.HelloDialog", oFragmentController);
				// connect dialog to the root view of this component (models, lifecycle)
				oView.addDependent(oDialog);
            	
            	// forward compact/cozy style into dialog
				// The "Hello World" dialog is not part of the app view but opened in a special part of the DOM called 
				//"static area". The content density class defined on the app view is not known to the dialog so we sync 
				// the style class of the app with the dialog manually.            	
            	jQuery.sap.syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);				
			}
			oDialog.open();
		}
	});

});