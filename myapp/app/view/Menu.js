Ext.define('myapp.view.Menu', {
    extend: 'Ext.Panel',
    xtype: 'Menu',
    id: 'menuView',
    config: {
        layout: {
            type: 'vbox',
            align: 'top'
        },
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            width: '100%',
            id: 'searchTitle',
            title: 'PatCom'
        },{

            xtype: 'container',
            width: '100%',
            padding: '10',
            defaults: {
                xtype: 'button',
                ui: 'round',
                margin: '15 0'
                            },
            items: [
                
                {

                    id: 'commentOnDoctor',
                    text: 'Give Comments ',
                    name: 'Give Comments '

                }, {

                    id: 'viewDoctor',
                    text: 'View Comments  ',
                    name: 'View Comments '

                }
                
            ]
        }]
    }
});