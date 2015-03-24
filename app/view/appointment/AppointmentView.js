/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 8/6/12  Time: 6:35 PM
 */
Ext.define('Bloom.view.appointment.AppointmentView', {

    extend: 'Ext.dataview.List',
    xtype: 'appointmentView',
    config: {
        items: [
            {
                xtype: 'label',
                html: '<div align="center">Patent Login</div>'
            },
            {
                xtype: 'fieldset',
                title: 'Patent Login',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'User Name',
                        placeHolder: 'Enter your username',
                        name: 'username'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        placeHolder: 'Enter your password',
                        name: 'password'
                    }
                ]
            },
            {
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        text: 'login',
                        html: '<div >Login</div>',
                        action: 'login'
                    },
                    {
                        xtype: 'button',
                        text: 'register',
                        html: '<div >Register</div>',
                        action: 'register'
                    }
                ]
            }

        ]
    }
});