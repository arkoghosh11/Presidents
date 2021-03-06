/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/27/2015 Time: 1:03 AM
 * @Copyright.
 */
Ext.define("Bloom.component.CustomTextField", {

    extend: 'Ext.field.Text',
    requires: [],
    xtype: 'customTextField',
    config: {
        itemId: 'customTextFieldItemId',
        label: 'Custom Text',
        labelWidth: '40%',
        placeHolder: 'Enter Text'
    }
});