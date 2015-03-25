/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/27/2015 Time: 12:57 AM
 * @Copyright.
 */
Ext.define("Bloom.view.service.popUpViews.PopupFormPanel", {

    extend: 'Bloom.component.CustomFormPanel',
    requires: [
        'Bloom.component.CustomFormPanel',
        'Bloom.component.CustomTextField',
        'Bloom.component.CustomNumberField',
        'Bloom.component.CustomCheckboxField',
        'Bloom.component.CustomSelectField',
        'Bloom.component.CustomFieldSet',
        'Bloom.component.CustomDateField',
        'Bloom.component.CustomEmailField'
    ],
    xtype: 'popUpFormPanel',

    config: {
        itemId: 'popUpFormPanelItemId',
        scrollable: true,
        items: []

    },

    /**
     * @Override{@link Bloom.component.CustomFormPanel}
     * This method is to
     * @param customFormPanel
     */
    initialize: function (customFormPanel) {

        this.createShopFields();
    },

    /**
     * This method is to generate a proto type object of customFieldSet
     * @param numberOfFieldSets
     */
    createFieldSets: function (numberOfFieldSets) {

        var fieldSets = new Array(numberOfFieldSets);
        for (var i = 0; i < numberOfFieldSets; i++) {
            fieldSets[i] = {
                xtype: 'customFieldSet',
                layout: 'hbox'
            };
        }
    },

    /**
     * This method is to generate a proto type object of customTextField
     * @param numberOfTextFields
     * @param names
     */
    createTextFields: function (numberOfTextFields, names) {

        var textFieldFieldSets = new Array(numberOfTextFields);
        for (var i = 0; i < numberOfTextFields; i++) {
            var textField = {
                xtype: 'customTextField',
                name: names[i],
                isRequired: true,
                label: names[i].length() > 7 ? names[i].substring(0, 7) : names[i],
                //value:'',
                placeHolder: 'Enter value for ' + names[i]
            };
            var fieldSet = this.createFieldSets(1)[0];
            fieldSet.items = [textField];
            textFieldFieldSets[i] = fieldSet;
        }
        return textFieldFieldSets;
    },

    /**
     * This method is to generate a proto type object of customNumberField
     * @param numberOfNumberFields
     * @param names
     */
    createNumberFields: function (numberOfNumberFields, names) {

        var numberFieldFieldSets = new Array(numberOfNumberFields);
        for (var i = 0; i < numberOfNumberFields; i++) {
            var numberField = {
                xtype: 'customNumberField',
                name: names[i],
                isRequired: true,
                label: names[i].length() > 7 ? names[i].substring(0, 7) : names[i],
                //value:'',
                placeHolder: 'Enter value for ' + names[i]
            };
            var fieldSet = this.createFieldSets(1)[0];
            fieldSet.items = [numberField];
            numberFieldFieldSets[i] = fieldSet;
        }
        return numberFieldFieldSets;
    },

    /**
     * This method is to generate a proto type object of customDateField
     * @param numberOfDateFields
     * @param names
     */
    createDateFields: function (numberOfDateFields, names) {

        var dateFieldFieldSets = new Array(numberOfDateFields);
        for (var i = 0; i < numberOfDateFields; i++) {
            var dateField = {
                xtype: 'customDateField',
                name: names[i],
                isRequired: true,
                label: names[i].length() > 7 ? names[i].substring(0, 7) : names[i],
                //value:'',
                placeHolder: 'Enter value for ' + names[i]
            };
            var fieldSet = this.createFieldSets(1)[0];
            fieldSet.items = [dateField];
            dateFieldFieldSets[i] = fieldSet;
        }
        return dateFieldFieldSets;
    },

    /**
     *This method is to generate a proto type object of customCheckBoxField
     * @param numberOfChkBoxFields
     * @param names
     */
    createCheckboxFields: function (numberOfChkBoxFields, names) {

        var chkBoxFieldFieldSets = new Array(numberOfChkBoxFields);
        for (var i = 0; i < numberOfChkBoxFields; i++) {
            var chkBoxField = {
                xtype: 'customCheckBoxField',
                name: names[i],
                isRequired: true,
                label: names[i].length() > 7 ? names[i].substring(0, 7) : names[i],
                checked: false
                //value:'',
                //placeHolder:'Enter value for '+ names[i]
            };
            var fieldSet = this.createFieldSets(1)[0];
            fieldSet.items = [chkBoxField];
            chkBoxFieldFieldSets[i] = fieldSet;
        }
        return chkBoxFieldFieldSets;
    },

    /**
     * This method is to generate a proto type object of customSelectField
     * @param numberOfSelectFields{Number}
     * @param metadata{Array}
     * @param selectFieldData
     */
    createSelectFields: function (numberOfSelectFields, metadata, selectFieldData) {

        var selectFieldFieldSets = new Array(numberOfSelectFields);
        for (var i = 0; i < numberOfSelectFields; i++) {
            var selectField = {
                xtype: 'customCheckBoxField',
                name: metadata.selectNames[i],
                isRequired: true,
                label: metadata.selectNames[i].name.length() > 7 ? metadata.selectNames[i].name.substring(0, 7) : metadata.selectNames[i].name,
                data: selectFieldData[i],
                valueField: metadata.valueField[i].valueField,
                displayField: metadata.displayField[i].displayField
                //value:'',
                //placeHolder:'Enter value for '+ names[i]
            };
            var fieldSet = this.createFieldSets(1)[0];
            fieldSet.items = [selectField];
            selectFieldFieldSets[i] = fieldSet;
        }
        return selectFieldFieldSets;
    },

    /**
     * This function is to create the shop fields
     */
    createShopFields: function () {

        var metaData = this.dummyMetaData();
        var fieldSets;// = this.createFieldSets(metaData.numberOfFieldSets);
        fieldSets = this.createTextFields(metaData.numberOfTextFields, metaData.textNames);
        fieldSets.push(this.createCheckboxFields(metaData.numberOfChkBoxFields, metaData.chkBoxNames));
        fieldSets.push(this.createNumberFields(metaData.numberOfNumberFields, metaData.numberNames));
        fieldSets.push(this.createSelectFields(metaData.numberOfSelectFields, metaData, metaData.selectFieldData));
        fieldSets.push(this.createDateFields(metaData.numberOfDateFields, metaData.dateNames));
        console.log(fieldSets);
        this.add(fieldSets);
    },

    //Note temporary dummy values for the form fields
    //IMP needs to be implemented via a server side call
    /**
     * This method is to provide with dummy data for now
     * @param type{String} possible values are shop,workingHour,address or item
     */
    dummyMetaData: function (type) {

        //var selectFieldData = [];
        var typeData = {}, index = 0;
        typeData.selectFieldData = [];
        typeData.displayField = [];
        typeData.valueField = [];

        if (type.toLowerCase() == "shop") {
            typeData.numberOfFieldSets = 3;
            typeData.numberOfTextFields = 2;
            typeData.numberOfNumberFields = 1;
            typeData.numberOfChkBoxFields = 0;
            typeData.numberOfSelectFields = 0;
            typeData.numberOfDateFields = 0;
            typeData.textNames = ["Shop Name", "Shop Web URL"];
            typeData.numberNames = ["Show Identification ID"];
            typeData.chkBoxNames = [];
            typeData.selectNames = [];
            typeData.dateNames = [];

        } else if (type.toLowerCase() == "workingHour") {

            typeData.numberOfFieldSets = 6;
            typeData.numberOfTextFields = 1;
            typeData.numberOfNumberFields = 0;
            typeData.numberOfChkBoxFields = 3;
            typeData.numberOfSelectFields = 0;
            typeData.numberOfDateFields = 2;
            typeData.textNames = ["Day or Number of Days"];
            typeData.numberNames = [];
            typeData.chkBoxNames = ["Holiday", "Weekend", "Closed"];
            typeData.selectNames = [];
            typeData.dateNames = ["Start Time", "End Time"];

        } else if (type.toLowerCase() == "item") {

            typeData.numberOfFieldSets = 11;
            typeData.numberOfTextFields = 4;
            typeData.numberOfNumberFields = 3;
            typeData.numberOfChkBoxFields = 0;
            typeData.numberOfSelectFields = 3;
            typeData.numberOfDateFields = 1;
            typeData.textNames = ["Item Name", "Item Type", "Item Sub Type", "Bought From"];
            typeData.numberNames = ["Price", "Weight", "Quantity"];
            typeData.chkBoxNames = [];
            typeData.selectNames = ["Item Currency ", "Quantity Type", "Weighted Unit"];
            typeData.displayField = ["text", "text", "text", "text"];
            typeData.valueField = ["value", "value", "value", "value"];
            typeData.selectFieldData[index] = [
                {
                    text: 'Dollar',
                    value: "dollar"
                },
                {
                    text: 'Pound',
                    value: 'pound'
                },
                {
                    text: 'Rupee',
                    value: 'rupee'
                },
                {
                    text: 'Ukrainian Hryvnia',
                    value: 'ukrainian_hryvnia'
                }
            ];
            typeData.selectFieldData[index + 1] = [
                {
                    text: 'Unit',
                    value: "unit"
                },
                {
                    text: 'Dozen',
                    value: 'dozen'
                },
                {
                    text: 'Score',
                    value: 'score'
                }
            ];
            typeData.selectFieldData[index + 2] = [
                {
                    text: 'KG',
                    value: "kg"
                },
                {
                    text: 'Pound',
                    value: 'pound'
                },
                {
                    text: 'Gram',
                    value: 'gram'
                },
                {
                    text: 'Ounce',
                    value: 'ounce'
                }
            ];
            typeData.dateNames = ["Bought Date"];


        } else if (type.toLowerCase() == "address") {

            typeData[index].numberOfFieldSets = 6;
            typeData[index].numberOfTextFields = 5;
            typeData[index].numberOfNumberFields = 1;
            typeData[index].numberOfChkBoxFields = 0;
            typeData[index].numberOfSelectFields = 0;
            typeData[index].numberOfDateFields = 0;
            typeData[index].textNames = ["Address 1", "Address 2", "City", "State", "District"];
            typeData[index].numberNames = ["ZipCode"];
            typeData[index].chkBoxNames = [];
            typeData[index].selectNames = [];
            typeData[index].dateNames = [];
        }
        return typeData;
    }

});