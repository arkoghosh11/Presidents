/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/27/2015 Time: 1:05 AM
 * @Copyright.
 */
Ext.define("Bloom.component.CustomDateField", {

    extend: 'Ext.picker.Date',
    requires: [],
    xtype: 'customDateField',
    config: {
        value: new Date(),
        itemId: 'customDateFieldItemId',
        label: 'Date Field',
        labelWidth: '20%',
        width: '80%',
        ui: 'dark',
        picker: {
            yearFrom: 2000,
            yearTo: 2020
        },
        placeHolder: 'Enter Date'
    }
});