/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 7/24/12  Time: 7:48 PM
 */
Ext.define('Bloom.controller.MainController', {

    extend: 'Ext.app.Controller',

    config: {
        profile: Ext.os.deviceType.toLowerCase(),
        refs: {
            listView: 'listView',
            mainContainer: 'mainContainer',
            dynamicContainer: 'dynamicContainer'
        },
        routes: {
            //'view/:viewName/:id/:tab' : 'showViewWithIdTab',
            'view/:viewName/:id': 'showViewWithId',
            'view/:viewName': 'showViewByName'
//            '' : 'onGoHome'
        },
        viewCache: new Array(),
        tabsController: '',
        appointmentController: ''
    },
    init: function () {

        Bloom.controller.mainController = this;
        this.setTabsController(this.getApplication().getController('TabsController'));
        this.setAppointmentController(this.getApplication().getController('AppointmentController'));
        this.createMainView();

        this.control({
//            navigationView : {
//                initialize : this.showDetail
//            },
//            listView : {
//                initialize : this.showDetail,
//                itemtap : this.changeViewLabel
//            }
        });
    },
//    showDetail : function (classObject) {
//        console.log(classObject);
//    },

    createMainView: function () {

        var mainView;
        if (this.getMainContainer() == null) {
            mainView = Ext.create('Bloom.view.MainContainer');
        }
        var container = Ext.create('Ext.Container', {
            layout: 'fit',
            fullscreen: true
        });
        container.add(mainView);
        this.redirectTo('view/homeView');
    },

//    changeViewLabel : function (listView, index, item, record) {
//
//        var labels = this.getListView().query('label');
//        Ext.each(labels, function (label, i) {
//            if (index == i) {
//                label.setHidden(false);
//            }
//            else {
//                label.setHidden(true);
//            }
//        });
//    },
    showViewByName: function (viewName) {
        this.showViewWithId(viewName, undefined);
    },

    showViewWithId: function (viewName, id) {

        this.getTabsController().setActiveItemAccordingToTabButtons(
            this.getMainContainer().query('.dynamicContainer')[0], viewName);
        if (id != undefined) {
            this.getAppointmentController().pushOnToAppointment(
                this.getMainContainer().query('.dynamicContainer')[0].query('appointmentView')[0], id);
        }
//        this.showViewWithIdTab(viewName, id, undefined);
    }

//    showViewWithIdTab : function (viewName, id, tab) {
//       var cache = this.getViewCache(), ln = cache.length, limit = 10, view = "", i, oldView;
//        console.log(viewName, id, tab);
//    }
});