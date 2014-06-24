/*
 * File: app/view/ListContainer.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ToDo.view.ListContainer', {
    extend: 'Ext.Container',
    alias: 'widget.listcontainer',

    requires: [
        'Ext.TitleBar',
        'Ext.Button',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        itemId: 'mycontainer',
        layout: 'fit',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'タスク管理',
                items: [
                    {
                        xtype: 'button',
                        align: 'right',
                        id: 'AddButton',
                        ui: 'confirm',
                        iconCls: 'add',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'list',
                itemId: 'mylist',
                itemTpl: [
                    '<div>{title}</div>'
                ],
                store: 'ToDos'
            }
        ]
    }

});