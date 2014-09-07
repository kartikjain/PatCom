Ext.define('myapp.view.docList', {
    extend: 'Ext.List',

    xtype: 'docList',
    
    config: {
        title: 'docList',
        itemId: 'docList',
        
        scrollable: 'vertical',

        items: [
            {
                xtype: 'list',
                store: 'docList',
                itemTpl: '<div><strong>{comment}</strong> {commentBy} </div>'
               
             }
         ],
        
    },

    
    
});