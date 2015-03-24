/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 8/5/12  Time: 12:15 PM
 */
Ext.define("Bloom.view.service.ItemListView", {

    extend: "Ext.dataview.List",
    requires: [],
    xtype: 'itemListView',
    config: {
        itemId: 'itemListViewItemId',
        itemTpl: '<div> <span style="width: 350px">{item_name}</span> <span style="width: 300px">{item_price}</span></div>',
        store: Ext.create("Bloom.store.ItemStore"),
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
