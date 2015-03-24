/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/25/2015 Time: 1:47 AM
 * @Copyright.
 */
Ext.define("Bloom.store.ItemStore", {

    extend: 'Ext.data.Store',
    requires: ['Bloom.model.ItemModel'],
    config: {
        model: 'Bloom.model.ItemModel',
        storeId: 'itemStoreStoreId',
        autoLoad: false,
        proxy: {
            url: 'http://localhost:8080/Bloom/rest/items?start_limit=0&size=20',
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'payload.items.item'
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