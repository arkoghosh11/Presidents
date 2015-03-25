/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 8/6/12  Time: 1:25 PM
 */
Ext.define('Bloom.view.home.HomeView', {

    extend: 'Ext.Container',
    requires: ['Bloom.view.DynamicContainer'],
    xtype: 'homeView',
    config: {
        layout: 'fit',
        //cls : 'x-headeredlist',

        scrollable: true,
        items: [

            {
                xtype: 'dynamicContainer',
                layout: 'fit',
                top: '1%',
                left: '40%',
                html: '<div style=" color:#e22a25; font-family:Helvetica Neue, Arial, Helvetica, sans-serif; font-size:2em">Welcome to Home Page</div>'
            }
        ]
    }
});