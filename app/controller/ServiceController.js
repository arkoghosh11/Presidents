/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/24/2015 Time: 9:21 PM
 * @Copyright.
 */
Ext.define("Bloom.controller.ServiceController", {

    extend: 'Ext.app.Controller',
    requires: [
        'Bloom.model.ShopModel',
        'Bloom.model.ItemModel',
        'Bloom.model.AddressModel',
        'Bloom.model.WorkingHourModel',
        'Bloom.store.ShopStore',
        'Bloom.store.ItemStore'
    ],
    //store: [
    //],
    config: {

        refs: {
            shopListView: 'shopListView',
            itemListView: 'itemListView'
        },
        tabsController: '',
        appointmentController: ''
    },
    init: function () {

        Bloom.controller.serviceController = this;
        this.setTabsController(this.getApplication().getController('TabsController'));
        this.setAppointmentController(this.getApplication().getController('AppointmentController'));

        this.control({
            shopListView: {
                initialize: this.initializeListStore,
                itemtap: this.displayOnTap
            },
            itemListView: {
                initialize: this.initializeListStore,
                itemtap: this.displayOnTap
            }
        });
    },

    initializeListStore: function (dataview) {

        var store = dataview.getStore();
        //console.log("dataview", dataview, dataview.getStore());
        if (Ext.data.StoreManager.lookup("shopStoreStoreId") == null) {
            if (store == null) {
                store = Ext.create("Bloom.store.ShopStore");
                console.error("Failed to find a store object for dataview" + dataview.getItemId());
            }
        }

        if (store != null && !store.isLoaded()) {
            store.load({
                //callback: function (records) {
                //    //console.log("records ", store);
                //    // todo any callback function on the stores records
                //}
            });
        }
    },

    /**
     *
     * @param dataview
     * @param index
     * @param target
     * @param record
     */
    displayOnTap: function (dataview, index, target, record) {

        Ext.Msg.alert("Dataview Tap", "Index of tapped record is " + index)

    }
});