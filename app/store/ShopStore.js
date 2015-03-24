/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/24/2015 Time: 8:50 PM
 * @Copyright.
 */
Ext.define("Bloom.store.ShopStore", {

    extend: 'Ext.data.Store',
    requires: ['Bloom.model.ShopModel'],
    config: {
        model: 'Bloom.model.ShopModel',
        storeId: 'shopStoreStoreId',
        autoLoad: false,
        proxy: {
            url: 'http://localhost:8080/Bloom/rest/shops?start_limit=0&size=20',
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'payload.shops.shop'
            }
            //listeners:{
            //    exception:function (proxy, response, operation) {
            //        console.log(proxy);
            //        console.log(response);
            //        console.log(operation);
            //    }
            //}
        }
    }
});