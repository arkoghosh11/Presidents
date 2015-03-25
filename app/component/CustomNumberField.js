/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/27/2015 Time: 1:03 AM
 * @Copyright.
 */
Ext.define("Bloom.component.CustomNumberField", {

    extend: 'Ext.field.Number',
    requires: [],
    xtype: 'customNumberField',
    config: {
        itemId: 'customNumberFieldItemId',
        value: 0,
        label: 'Custom NumberField',
        labelWidth: '40%',
        placeHolder: 'Enter Number'
    }
});