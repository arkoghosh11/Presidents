/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 7/24/12  Time: 7:43 PM
 */
Ext.define('Bloom.view.ListView', {

    xtype: 'listView',
    extend: 'Ext.dataview.List',
    requires: [],
    config: {
        layout: 'fit',
        itemId: 'listViewId',
        cls: 'x-list',
        itemTpl: '<div class="alerts-view">{firstName} <strong> {lastName}</strong> </div>',
        data: [
            {firstName: 'Tommy', lastName: 'Maintz'},
            {firstName: 'Rob', lastName: 'Dougan'},
            {firstName: 'Ed', lastName: 'Spencer'},
            {firstName: 'Jamie', lastName: 'Avins'},
            {firstName: 'Aaron', lastName: 'Conran'},
            {firstName: 'Dave', lastName: 'Kaneda'}
        ],
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