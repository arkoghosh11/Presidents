/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 8/5/12  Time: 12:15 PM
 */
Ext.define('Bloom.view.service.ServiceView', {

    extend: 'Ext.tab.Panel',
    xtype: 'serviceView',
    requires: [
        'Bloom.view.ListView',
        'Bloom.view.service.ShopListView',
        'Bloom.view.service.ItemListView',
        'Bloom.view.contact.ContactInnerView',
        'Bloom.view.DynamicContainer',
        'Bloom.store.ShopStore',
        'Bloom.store.ItemStore'
    ],
    config: {
        itemId: 'serviceViewId',
        tabBarPosition: 'left',
        activeItem: 1,
        items: [
            {
                title: 'Items',
                xtype: 'itemListView',
                badgeText: '2'
            },
            {
                title: 'Shops',
                xtype: 'shopListView'
            },
            {
                title: 'Master Health',
                xtype: 'dynamicContainer'
            },
            {
                title: 'Ultrasound',
                xtype: 'listView'
            }
        ],
        tabBar: {
            layout: 'vbox'
            //cls:'tabContainerBlank'
        },

        layout: {
            animation: {
                type: 'flip',
                duration: 2000
            }
        }


    },
    constructor: function (config) {

//        this.callParent(arguments);
        var me = this;
        me.callParent(arguments);
        // Set zindex for 'proper' tab items
//        Ext.Array.each(me.getItems().items, function (item, index, test) {
//                item.setZIndex(2);
//        });
    }

});