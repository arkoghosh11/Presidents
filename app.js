Ext.Loader.setConfig({enabled: true});

//Added this line to make debug break point stick across sessions.   FRL
//xxx  Ext.Loader.setConfig({ disableCaching: false }); //frl
//However, when a js file is modified, Sencha would not redownload it.  To get the latest 
//comment out the above or add the js file in index.html file.
//Or to clear browser cache (in developer tools, network tab, right click on any file and select clear browser cache).
Ext.application({
    name: 'Bloom',

    requires: [],
    models: [],

    stores: [],

    views: [
        'MainContainer'
    ],
    controllers: [
        'MainController',
        'TabsController',
        'ServiceController',
        'AppointmentController'
    ],
    launch: function () {
        Ext.Viewport.add({
            xtype: 'mainContainer'
        });
    }
});