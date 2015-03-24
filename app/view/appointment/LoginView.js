/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 8/6/12  Time: 6:39 PM
 */
Ext.define('Bloom.view.appointment.LoginView', {

    extend: 'Ext.Container',
    xtype: 'loginView',
    config: {

        layout: 'vbox',
        itemId: 'loginViewId',
        cls: 'x-list',
        items: [
            {
                xtype: 'label',
                html: '<div align="center">Patient Login</div>'
            },
            {
                xtype: 'fieldset',
//                title : 'Patient Login',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'User Name',
                        placeHolder: 'Enter your username',
                        name: 'username',
                        maxLength: 20
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        placeHolder: 'Enter your password',
                        name: 'password',
                        maxLength: 30
                    }
                ]
            },
            {
                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        text: 'login',
                        html: '<div >Login</div>',
                        action: 'login',
                        width: '10%'
                    },
                    {
                        xtype: 'spacer',
                        width: '2%'

                    },
                    {
                        xtype: 'button',
                        text: 'register',
                        html: '<div >Register</div>',
                        action: 'registration',
                        width: '10%'
                    }
                ]
            }

        ]
    }
});