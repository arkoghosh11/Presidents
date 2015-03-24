/**
 * @email arkoghosh@hotmail.com, meankur1@gmail.com
 * @author Arko Ghosh, Ankur Bhardwaj
 * Date: 8/6/12  Time: 9:23 PM
 */
Ext.define('Bloom.view.contact.ContactView', {

    xtype: 'contactView',
    extend: 'Ext.Container',
    requires: 'Bloom.view.contact.ContactInnerView',
    config: {
        itemId: 'contactView',
        layout: 'fit',
        items: [

            {
                xtype: 'container',
                centered: 'true',
                html: '<div> Contact Us </div> <br><div> <a href="http://www.google.com"> Click Here for new site </a> </div>'
            }

        ]
    }
});