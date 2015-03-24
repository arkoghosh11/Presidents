/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 8/6/12  Time: 8:30 PM
 */
Ext.define('Bloom.controller.AppointmentController', {

    extend: 'Ext.app.Controller',

    config: {

        refs: {
            appointmentView: 'appointmentView',
            register: 'button[action=registration]'
        },
        mainController: ''
    },
    init: function () {
        Bloom.controller.appointmentController = this;

        this.setMainController(this.getApplication().getController('MainController'));

        this.control({

            register: {
                tap: this.pushNewViewOnToAppointment
            },
            appointmentView: {
                back: this.initializeListStore
            }
        });

    },
    initializeListStore: function () {
        this.redirectTo('view/appointmentView/loginView');
    },
    pushNewViewOnToAppointment: function (button) {

        if (button.getText() == 'register') {
            this.redirectTo('view/appointmentView/registerView');
        }
    },
    pushOnToAppointment: function (appointmentView, viewName) {

        if (appointmentView.query('.' + viewName).length < 1) {
            appointmentView.push({
                xtype: viewName
            });
        }
    }
});
