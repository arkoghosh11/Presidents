/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 7/24/12  Time: 7:35 PM
 */
Ext.define('Bloom.view.contact.ContactInnerView', {

    xtype: 'contactInnerView',
    extend: 'Ext.dataview.List',
    requires: [],
    config: {

        itemId: 'contactInnerViewId',
        cls: 'x-list',
        items: [
//            {
//                xtype : 'datepickerfield',
//                title : 'DatePicker',
//                label : 'Date',
//                value : new Date(),
//                yearFrom : 2000,
//                yearTo : 2020
//            } ,
        ],
        itemTpl: '<div class="alerts-view">{firstName} <strong> {lastName}</strong> </div>',
        data: [
            {firstName: 'Tommy', lastName: 'Maintz'},
            {firstName: 'Rob', lastName: 'Dougan'},
            {firstName: 'Ed', lastName: 'Spencer'},
            {firstName: 'Jamie', lastName: 'Avins'},
            {firstName: 'Aaron', lastName: 'Conran'},
            {firstName: 'Dave', lastName: 'Kaneda'}
        ]
    }
});