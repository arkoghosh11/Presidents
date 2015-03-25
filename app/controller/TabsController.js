/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 8/5/12  Time: 12:10 PM
 */
Ext.define('Bloom.controller.TabsController', {

    extend: 'Ext.app.Controller',

    config: {

        refs: {
            homeButton: 'button[action=home]',
            serviceButton: 'button[action=services]',
            appointmentButton: 'button[action=appointment]',
            contactButton: 'button[action=contact]'
        },
        mainController: ''
    },
    init: function () {
        Bloom.controller.tabsController = this;

        this.setMainController(this.getApplication().getController('MainController'));

        this.control({
            homeButton: {
                tap: this.changeView
            },
            serviceButton: {
                tap: this.changeView
            },
            appointmentButton: {
                tap: this.changeView
            },
            contactButton: {
                tap: this.changeView
            }
        });

    },

    /**
     * This method is to change view with STouch Routing capabilities
     * @param button
     */
    changeView: function (button) {

        if (button.getText() == 'Services') {
            this.redirectTo('view/serviceView');
        }
        if (button.getText() == 'Home') {
            this.redirectTo('view/homeView');
        }
        if (button.getText() == 'Contact Us') {
            this.redirectTo('view/contactView');
        }
        if (button.getText() == 'Appointment') {
            this.redirectTo('view/appointmentView/loginView');
        }
    },

    /**
     * This method is to set the current view with tabs
     * @param dynamicContainer
     * @param viewName
     */
    setActiveItemAccordingToTabButtons: function (dynamicContainer, viewName) {

        //console.log(dynamicContainer.query('.' + viewName), dynamicContainer.query('.' + viewName).length, viewName);
        if (dynamicContainer.query('.' + viewName).length < 1) {
            try {
                dynamicContainer.add(
                {
                    xtype: viewName,
                    title: viewName
                }
                );
            } catch (error) {
                Ext.Msg.alert("Error", "Unknown Error Occurred", null, this);
            }
        }
        dynamicContainer.setActiveItem(dynamicContainer.query('.' + viewName)[0]);
    }
});