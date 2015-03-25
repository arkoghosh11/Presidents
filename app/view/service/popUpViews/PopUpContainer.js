/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/27/2015 Time: 12:46 AM
 * @Copyright.
 */
Ext.define("Bloom.view.service.popUpViews.PopUpContainer", {

    extend: 'Bloom.view.DynamicContainer',
    requires: [
        ''
    ],
    xtype: 'popUpContainer',
    config: {
        itemId: 'popUpContainerItemId',
        layout: 'fit',
        centered: true,
        height: '50%',
        weight: '50%',
        modal: true,
        hideOnMaskTap: true,
        hidden: true,
        scrollable: true,
        items: []
    }
});