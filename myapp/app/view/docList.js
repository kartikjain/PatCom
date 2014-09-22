
Ext.define('myapp.view.docList', {
    extend: 'Ext.Panel',
    xtype: 'docList',
    id: 'docListView',
    config: {
            layout: {
            type: 'vbox',
            align: 'top'
        },
          
            items: [
            {
              xtype: 'titlebar',
             docked: 'top',
             width: '100%',
             id: 'listTitle',
             
               items: [{
                  xtype: 'button',
                  id: 'backList',
                  text: 'Back'
            }]
            },
            {

                xtype: 'list',
                width: '100%',
                height: '100%',
                id: 'listId',    
               // scrollable: 'vertical',
                store: 'docListStore',
                itemTpl: new Ext.XTemplate(
                      '<div width="100%">',
                      '<div style="float:left;">{comment}</div>',
                      '<div style="float:right;font-size:0.7em;color:#999999;">',
                      '{user}',
                      '</div>',
                      '</div>'
                )

             }]
    }
})





