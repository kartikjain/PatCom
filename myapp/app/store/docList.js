Ext.define('myapp.store.docList', 
{
    requires: ['myapp.model.docList',
        'Ext.data.proxy.Rest'
    ],
    extend: 'Ext.data.Store',
    
    config: {
        model: 'myapp.model.docList',
        storeId: 'docListStore',
        sorters: ('id'),
         proxy: {
            type:'rest',
             reader: {
                type: 'json',
                rootProperty: 'root'    
                    }  
             
                }
             }
 });
