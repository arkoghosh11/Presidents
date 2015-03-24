/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/24/2015 Time: 8:59 PM
 * @Copyright.
 */
Ext.define("Bloom.model.ShopModel", {

    extend: 'Ext.data.Model',
    requires: [
        'Bloom.model.ItemModel',
        'Bloom.model.AddressModel',
        'Bloom.model.WorkingHourModel'
    ],
    config: {
        idProperty: 'shop_id',
        fields: [
            {name: "shop_id", type: 'int'},
            {name: "shop_name", type: 'string'},
            {name: "shop_own_id", type: 'int'},
            {name: "shop_web_link", type: 'string'}
        ],
        hasMany: [
            {
                model: 'Bloom.model.ItemModel',
                store: 'Bloom.store.ItemStore',
                associationKey: 'items',
                name: 'items'
            },
            {
                model: 'Bloom.model.WorkingHourModel',
                associationKey: 'working_hours',
                name: 'workingHours'
            }
        ],
        hasOne: [
            {
                model: 'Bloom.model.AddressModel',
                //store:'Bloom.store.AddressStore', //todo an address store
                associationKey: 'address',
                name: 'address'
            }
        ]
    }
});