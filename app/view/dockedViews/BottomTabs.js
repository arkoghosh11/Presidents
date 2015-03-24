/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 8/5/12  Time: 12:04 PM
 */
Ext.define('Bloom.view.dockedViews.BottomTabs', {

    extend: 'Ext.Toolbar',
    xtype: 'bottomTab',

    config: {

        itemId: 'bottomTabId',
        layout: 'hbox',
        border: 0,
//        cls:'x-toolbar',
        defaults: {
            ui: 'confirm',
            iconMask: true,
            iconAlign: 'left',
            width: '25%'
        },
        items: [
            {
                xtype: 'button',
                text: 'Home',
                iconCls: 'home',
                action: 'home'
            },
            {
                xtype: 'button',
                text: 'Services',
                iconCls: 'star',
                action: 'services'
//                ui:'green' ,
            },
            {
                xtype: 'button',
                text: 'Appointment',
                iconCls: 'action',
                action: 'appointment'
            },
            {
                xtype: 'button',
                text: 'Contact Us',
                action: 'contact',
                iconCls: 'locate',
                width: '23.2%'
            }
        ]
    },
    constructor: function (config) {
        if (this.config == null) {
            this.config = config;
        }
        this.callParent(arguments);
    }
});