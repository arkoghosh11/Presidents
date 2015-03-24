/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 7/24/12  Time: 7:40 PM
 */
Ext.define('Bloom.view.MainContainer', {

    xtype: 'mainContainer',
    extend: 'Ext.Container',

    requires: [
        'Bloom.view.DynamicContainer',
        'Bloom.view.dockedViews.BottomTabs',
        'Bloom.view.dockedViews.HeaderBar',
        'Bloom.view.contact.ContactView',
        'Bloom.view.service.ServiceView',
        'Bloom.view.home.HomeView',
        'Bloom.view.AppointmentView'
    ],

    config: {
        itemId: 'mainContainerId',
        style: 'background-color:#e8d498',
        layout: {
            type: 'hbox'
        },
        autoDestroy: false,
        items: [
            {
                xtype: 'headerBar',
                docked: 'top'
            },
            {
                xtype: 'dynamicContainer',
                layout: {
                    type: 'card',
                    animation: {
                        type: 'pop',
                        //delay: 2000, // time before the animation starts values are in msecs
                        duration: 2000  // How Long the duration lasts  values are in msecs

                    }
                },
                flex: 2
            },
            {
                xtype: 'bottomTab',
                docked: 'bottom'
            }

        ]
    }
});

//var ab = "<div style='background-color: #e8d498'></div>"; //color choosing