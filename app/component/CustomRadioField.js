/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/27/2015 Time: 1:21 AM
 * @Copyright.
 */
Ext.define("Bloom.component.CustomRadioField", {

    extend: 'Ext.field.Radio',
    requires: [],
    xtype: 'customRadioField', // only for views
    config: {
        itemId: 'customRadioFieldItemId',
        labelWidth: '40%',
        label: 'Custom Radio'
        //storeId:''// only for stores
    }
    //init: function() { } // only for controllers
});