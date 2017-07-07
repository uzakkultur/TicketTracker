/*
 * File: app/view/TicketFormWindow.js
 *
 * This file was generated by Sencha Architect version 4.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TicketTracker.view.TicketFormWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ticketFormWindow',

    requires: [
        'TicketTracker.view.TicketForm',
        'Ext.form.Panel'
    ],

    config: {
        buttons: [
            {
                text: 'Save',
                action: 'saveTicket'
            }
        ]
    },

    height: 370,
    width: 500,
    closeAction: 'hide',
    title: 'Add-Edit Ticket',

    items: [
        {
            xtype: 'ticketForm'
        }
    ]

});