Ext.define('myapp.store.docList', 
{
    requires: ['myapp.model.docList'],
    extend: 'Ext.data.Store',
    storeId: 'docList',
    config: {
        model: 'myapp.model.docList',
        autoLoad: true,
        data: [
            { commentBy: 'Kartik',  comment: 'He is a good doctor'},
            { commentBy: 'Karan',  comment: 'He is a terrible doctor'},
            { commentBy: 'John',  comment: 'He is an ok ok doctor'},
            { commentBy: 'Amrit',  comment: 'Is he even a doctor??'}
              ]
        }
 });