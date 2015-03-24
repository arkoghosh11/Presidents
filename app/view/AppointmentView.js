/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 8/6/12  Time: 8:19 PM
 */
Ext.define('Bloom.view.AppointmentView', {

    extend: 'Ext.navigation.View',
    xtype: 'appointmentView',
    requires: [
        'Bloom.view.appointment.LoginView',
        'Bloom.view.appointment.RegisterView'
    ],
    config: {
        title: 'Appointment',
        navigationBar: {
            //backButton : 'hide'
        },
        items: [
            {
                xtype: 'loginView'
            }
        ]
    }
});