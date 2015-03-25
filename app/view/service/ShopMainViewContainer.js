/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/26/2015 Time: 9:39 PM
 * @Copyright.
 */
Ext.define("Bloom.view.service.ShopMainViewContainer", {

    requires: [
        'Bloom.view.service.shopViews.ShopHeaderContainer',
        'Bloom.view.service.shopViews.ShopHeaderEditableOptionsContainer',
        'Bloom.view.service.shopViews.ShopListView'
    ],

    extend: 'Bloom.view.DynamicContainer',
    xtype: 'shopMainViewContainer',

    config: {
        itemId: 'shopMainViewContainerItemId',
        layout: 'vbox',
        items: [
            {
                xtype: 'shopHeaderContainer',
                height: '5%'
            },
            {
                xtype: 'shopHeaderEditableOptionsContainer',
                height: '5%'
            },
            {
                xtype: 'shopListView',
                height: '90%',
                layout: 'fit'
            }
        ]
    }

});