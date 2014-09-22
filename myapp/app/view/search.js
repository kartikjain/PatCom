Ext.define('myapp.view.search', {
    extend: 'Ext.Panel',
    xtype: 'search',
    id : 'searchView',
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
            title: 'Search for a Doctor',
            items: [{
                xtype: 'button',
                id: 'backSearch',
                text: 'Back'
            }]
        }, {
    		xtype: 'searchfield',
    		placeHolder: 'Search for a Doctor',
    		name: 'searchfield',
            docked: 'top',
            width: '100%',
            id: 'searchButton'
    	}, {
            xtype: 'list',
            width: '100%',
            height: '100%',
            emptyText: 'No such Doctors',
            id: 'docSearchListId',
            store: 'docListStore',
            itemTpl: new Ext.XTemplate(
                      '<div width="100%">',
                      '<div style="float:left;">{doctorName}</div>',
                      '</div>'
                )
           
        }]
    }
});
