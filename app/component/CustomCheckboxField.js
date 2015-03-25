/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/27/2015 Time: 1:04 AM
 * @Copyright.
 */
Ext.define("Bloom.component.CustomCheckboxField", {

    extend: 'Ext.field.Checkbox',
    requires: [],
    xtype: 'customCheckBoxField',
    config: {
        itemId: 'customCheckBoxFieldItemId',
        checked: false,
        label: 'Custom CheckBoxField',
        labelWidth: '40%'
    }
});