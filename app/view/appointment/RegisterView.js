/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 8/6/12  Time: 6:39 PM
 */
/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 8/6/12  Time: 6:35 PM
 */
Ext.define('Bloom.view.appointment.RegisterView', {

    extend: 'Ext.Container',
    xtype: 'registerView',
    config: {

        itemId: 'registerViewId',
        scrollable: true,
        items: [
            {
                xtype: 'label',
                html: '<div align="left">Registration</div>'
            },
            {
                xtype: 'fieldset',
                title: 'Patent Login',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'First Name',
                        placeHolder: 'Enter your First Name',
                        name: 'firstname'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Last Name',
                        placeHolder: 'Enter your LastName',
                        name: 'lastName'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email Id',
                        placeHolder: 'Enter your Email Id',
                        name: 'email'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Address',
                        placeHolder: 'Enter your Address',
                        name: 'address'
                    },
                    {
                        xtype: 'textfield',
                        label: 'City',
                        placeHolder: 'Enter your city',
                        name: 'city'
                    },
                    {
                        xtype: 'textfield',
                        label: 'ZipCode',
                        placeHolder: 'Enter your Postal Or Zipcode',
                        name: 'zipcode'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        placeHolder: 'Enter your password',
                        name: 'password',
                        maxLength: 30
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Confirm Password',
                        placeHolder: 'Enter your password',
                        name: 'password',
                        maxLength: 30
                    }
                ]
            },
            {
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        text: 'cancel',
                        html: '<div >Cancel</div>',
                        action: 'cancel'
                    },
                    {
                        xtype: 'button',
                        text: 'register',
                        html: '<div >Confirm</div>',
                        action: 'confirm'
                    }
                ]
            }

        ]
    }
});
