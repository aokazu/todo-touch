/*
 * File: app/controller/ToDos.js
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

Ext.define('ToDo.controller.ToDos', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
        refs: {
            detailContainer: 'detailcontainer',
            listContainer: 'listcontainer',
            deleteButton: 'button#DeleteButton'
        },

        control: {
            "list#mylist": {
                itemtap: 'onListItemTap'
            },
            "button#BackButton": {
                tap: 'onBackButtonTap'
            },
            "button#AddButton": {
                tap: 'onAddButtonTap'
            },
            "button#SaveButton": {
                tap: 'onSaveButtonTap'
            },
            "button#DeleteButton": {
                tap: 'onDeleteButtonTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {

        var detail = this.getDetailContainer();

        if (!detail) {
            detail = Ext.widget('detailcontainer');
        }

        detail.down('formpanel').setRecord(record);

        this.getDeleteButton().show();

        Ext.Viewport.animateActiveItem(detail, {
            type: 'slide',
            direction: 'left'
        });

    },

    onBackButtonTap: function(button, e, eOpts) {

        var list = this.getListContainer();

        Ext.Viewport.animateActiveItem(list, {
            type: 'slide',
            direction: 'right'
        });

    },

    onAddButtonTap: function(button, e, eOpts) {

        var detail = this.getDetailContainer();

        if (!detail) {
            detail = Ext.widget('detailcontainer');
        }

        var record = Ext.create('ToDo.model.ToDo');

        detail.down('formpanel').setRecord(record);

        this.getDeleteButton().hide();

        Ext.Viewport.animateActiveItem(detail, {
            type: 'slide',
            direction: 'left'
        });

    },

    onSaveButtonTap: function(button, e, eOpts) {

        var detail = this.getDetailContainer(),
            form = detail.down('formpanel'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);

        var store = Ext.getStore('ToDos');

        store.add(record);

        store.sync({
            callback: function() {
                // alert('保存しました。');

                Ext.Msg.alert('', '保存しました。', function() {
                    Ext.Viewport.animateActiveItem(list, {
                        type: 'slide',
                        direction: 'right'
                    });

                });
            }
        });

        var list = this.getListContainer();

        // Ext.Viewport.animateActiveItem(list, {
        //     type: 'slide',
        //     direction: 'right'
        // });

    },

    onDeleteButtonTap: function(button, e, eOpts) {

        var detail = this.getDetailContainer(),
            list = this.getListContainer(),
            form = detail.down('formpanel'),
            record = form.getRecord();

        var store = Ext.getStore('ToDos');

        store.remove(record);

        store.sync({
            callback: function() {
                Ext.Msg.alert('', '削除しました。', function() {
                    Ext.Viewport.animateActiveItem(list, {
                        type: 'slide',
                        direction: 'right'
                    });
                });
            }
        });

    }

});