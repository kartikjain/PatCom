Ext.define('myapp.model.docList', {
    extend: 'Ext.data.Model',
    id: 'docListModel',
    config: {
        fields: [
        	{ name: 'id', type: 'int'},
        	{name:'doctorName',type: 'string'},
            { name: 'user', type: 'string'},
            { name: 'comment', type: 'string'}

       		 ]
   		  }
});
