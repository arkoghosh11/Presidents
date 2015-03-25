/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/26/2015 Time: 10:00 PM
 * @Copyright.
 */
Ext.define("Bloom.view.service.shopViews.ShopHeaderEditableOptionsContainer", {

    extend: 'Bloom.view.DynamicContainer',
    xtype: 'shopHeaderEditableOptionsContainer',
    config: {
        layout: 'hbox',
        items: [
            {
                xtype: 'container',
                layout: 'hbox',
                centered: true,
                width: '100%',
                items: [
                    {
                        xtype: 'spacer',
                        width: '70%'
                    },
                    {
                        xtype: 'button',
                        text: '',
                        width: "10%",
                        iconMask: true,
                        iconCls: 'add',
                        action: 'createShopAction'
                    },
                    {
                        xtype: 'button',
                        text: '',
                        width: "10%",
                        iconMask: true,
                        iconCls: 'compose',
                        action: 'editShopAction'
                        //action: 'shopId',
                    },
                    {
                        xtype: 'button',
                        text: '',
                        width: "10%",
                        iconMask: true,
                        iconCls: 'delete',
                        action: 'deleteShopAction'
                    }
                ]
            }]
    }

});