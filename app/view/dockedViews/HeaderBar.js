/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 8/5/12  Time: 12:21 PM
 */
Ext.define('Bloom.view.dockedViews.HeaderBar', {

    extend: 'Ext.Toolbar',
    xtype: 'headerBar',

    config: {
        border: 0,
        itemId: 'headerBarId',
        items: [
            {
                xtype: 'label',
                labelAlign: 'center',
                align: 'center',
                alignment: 'center',
                html: '<div align="center" style="color: red;">Doctor</div>'
            }
        ]
    }
});