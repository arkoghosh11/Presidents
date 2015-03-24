/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/25/2015 Time: 1:14 AM
 * @Copyright.
 */
Ext.define("Bloom.model.ItemModel", {

    extend: 'Ext.data.Model',

    config: {
        idProperty: 'item_id',
        fields: [
            {
                name: "bought_date", type: "string"
            },
            {
                name: "bought_from", type: "string"
            },
            {
                name: "item_id", type: "int"
            },
            {
                name: "item_name", type: "string"
            },
            {
                name: "item_price", type: "string"
            },
            {
                name: "item_price_currency", type: "string"
            },
            {
                name: "item_sub_type", type: "string"
            },
            {
                name: "item_type", type: "string"
            },
            {
                name: "quantity", type: "string"
            },
            {
                name: "quantity_type", type: "string"
            },
            {
                name: "weight", type: "string"
            },
            {
                name: "weighted_unit", type: "string"
            }
        ],
        belongsTo: {
            model: 'Bloom.model.ShopModel'
        }

    }

});