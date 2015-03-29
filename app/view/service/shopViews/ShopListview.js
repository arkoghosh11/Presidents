/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * 3/24/2015
 * @Copyright.
 */
Ext.define("Bloom.view.service.shopViews.ShopListView", {

    extend: 'Ext.dataview.List',
    requires: [
        'Bloom.model.ShopModel',
        'Bloom.store.ShopStore'
    ],
    xtype: 'shopListView',
    config: {
        itemId: 'shopListViewItemId',
        itemTpl: '<div>' +
        ' <span style="width: 350px">{shop_id}</span>' +
        ' <span style="width: 350px">{shop_own_id}</span>' +
        ' <span style="width: 350px">{shop_name}</span>' +
        ' <span style="width: 300px">{shop_web_link}</span>' +
        ' address"<span style="width: 300px">{address_id}</span>' +
        ' workingHour: <span style="width: 300px">{working_hour_id}</span>' +
        '</div>',
        store: Ext.create("Bloom.store.ShopStore"),//'shopStoreStoreId',
    }
});