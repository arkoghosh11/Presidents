/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/27/2015 Time: 1:04 AM
 * @Copyright.
 */
Ext.define("Bloom.component.CustomSelectField", {

    extend: 'Ext.field.Select',
    requires: [
        'Bloom.store.GlobalStore'
    ],
    xtype: 'customSelectField',
    config: {
        itemId: 'customSelectFieldItemId',
        label: 'Custom Select',
        required: false,
        labelWidth: '40%',
        //labelWrap :'false',
        usePicker: 'auto',
        autoSelect: false
    }
});