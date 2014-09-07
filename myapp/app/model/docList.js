Ext.define('myapp.model.docList', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'commentBy', type: 'string'},
            { name: 'comment', type: 'string'}
       		   ]
   		  }
});