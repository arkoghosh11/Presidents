/**
 * Created by Rono on 2/6/2015.
 */
Ext.define("Bloom.view.service.ItemListView", {

    extend: "Ext.dataview.List",
    requires: [],
    xtype: 'itemListView',
    config: {
        itemId: 'itemListViewItemId',
        itemTpl: '<div> <span style="width: 350px">{ITEM_NAME}</span> <span style="width: 300px">{ITEM_PRICE}</span></div>',
        data: [
            {
                ITEM_NAME: 'Tommy',
                ITEM_PRICE: '5'
            },
            {
                ITEM_NAME: 'Rob',
                ITEM_PRICE: '34'
            },
            {
                ITEM_NAME: 'Ed',
                ITEM_PRICE: '23.667'
            },
            {
                ITEM_NAME: 'Jamie',
                ITEM_PRICE: '45'
            },
            {
                ITEM_NAME: 'Aaron',
                ITEM_PRICE: '43.67'
            },
            {
                ITEM_NAME: 'Dave',
                ITEM_PRICE: '45'
            }
        ],
        items: [
            {
                xtype: 'button',
                text: 'Booking',
                html: 'Book Your Appointments Online Now!',
                action: 'bookAppointment',
                docked: 'bottom'
            }
        ]
    }


});
