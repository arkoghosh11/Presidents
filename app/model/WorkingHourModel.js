/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date:3/25/2015 Time: 1:15 AM
 * @Copyright.
 */
Ext.define("Bloom.model.WorkingHourModel", {

    extend: 'Ext.data.Model',
    config: {
        idProperty: 'working_hour_id',
        fields: [
            {
                name: "working_hour_id", type: 'int'
            },
            {
                name: "day", type: 'string'
            },
            {
                name: "start_time", type: 'string'
            },
            {
                name: "end_time", type: 'string'
            },
            {
                name: "is_weekend", type: 'string'
            },
            {
                name: "is_closed", type: 'string'
            },
            {
                name: "is_holiday", type: 'string'
            }
        ],
        belongsTo: {
            model: 'Bloom.model.ShopModel'
        }
    }

});