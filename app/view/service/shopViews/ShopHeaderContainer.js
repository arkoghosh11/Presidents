/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/26/2015 Time: 10:00 PM
 * @Copyright.
 */
Ext.define("Bloom.view.service.shopViews.ShopHeaderContainer", {

    extend: 'Bloom.view.DynamicContainer',
    xtype: 'shopHeaderContainer',
    config: {
        layout: 'hbox',
        itemId: 'shopHeaderContainerItemId',
        items: [
            {
                xtype: 'button',
                text: 'ShopId',
                width: "25%"
                //action: 'shopIdA',
            },
            {
                xtype: 'button',
                text: 'ShopOwnId',
                width: "25%"
                //action: 'shopOwnId',
            },
            {
                xtype: 'button',
                text: 'ShopName',
                width: "25%"
                //action: 'shopName',
            },
            {
                xtype: 'button',
                text: 'ShopWebLink',
                width: "25%"
                //action: 'shopWebLink',
            }
        ]
    }
});