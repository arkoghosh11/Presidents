/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/27/2015 Time: 1:05 AM
 * @Copyright.
 */
Ext.define("Bloom.component.CustomEmailField", {

    extend: 'Ext.field.Email',
    requires: [],
    xtype: 'customEmailField',
    config: {
        itemId: 'customEmailFieldItemId',
        label: 'Email',
        labelWidth: '20%',
        placeHolder: 'Enter Email'

    }
});