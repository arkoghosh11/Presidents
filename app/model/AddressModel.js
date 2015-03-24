/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/25/2015 Time: 1:15 AM
 * @Copyright.
 */
Ext.define("Bloom.model.AddressModel", {

    extend: 'Ext.data.Model',
    config: {
        idProperty: 'address_id',
        fields: [
            {
                name: "address_id", type: "int"
            },
            {
                name: "address1", type: "string"
            },
            {
                name: "address2", type: "string"
            },
            {
                name: "city", type: "string"
            },
            {
                name: "district", type: "string"
            },
            {
                name: "state", type: "string"
            },
            {
                name: "zipcode", type: "int"
            }
        ]
    }
});