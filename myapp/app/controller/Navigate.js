Ext.define('myapp.controller.Navigate',{
extend : 'Ext.app.Controller',
requires: [
        'Ext.data.proxy.Rest'
    ],
 config: {
	views: ['docList','Menu','formDoctor'],
	refs:{
		commentOnDoctor : '#commentOnDoctor',
		viewDoctor : '#viewDoctor',
		submit : '#submit',
		docSearchListId: '#docSearchListId',
		searchButton: '#searchButton',
		backSearch: '#backSearch',
		backForm: '#backForm',
		backList: '#backList'
		
		},
		control: {
			commentOnDoctor : {
				tap: 'commentOnDoctorFunction'
						    	},
			viewDoctor : {
				tap: 'viewDoctorFunction'
						},
			submit : {
				tap: 'submitFunction'
			 		 },
			 docSearchListId : {
			 	itemtap: 'selectItemFunction'
			 },
			 searchButton : {
			 	action: 'searchFunction'
			 },
			 backSearch : {
			 	tap: 'backSearchFunction'
			 },
			 backList : {
			 	tap: 'backListFunction'
			 },
			 backForm : {
			 	tap: 'backFormFunction'
			 }
		}
  },
  
	commentOnDoctorFunction: function()
	{
		Ext.getCmp('menuView').hide();
		 if(!Ext.getCmp('formDoctorView'))
        {
            Ext.create('myapp.view.formDoctor',{ 
            	viewId: 'formDoctorView'
            })
        }
		Ext.getCmp('formDoctorView').show();
		
	},
	viewDoctorFunction: function()
	{
		Ext.getCmp('menuView').hide();
		 if(!Ext.getCmp('searchView'))
        {
            Ext.create('myapp.view.search',{
                viewId: 'searchView'
            })
        }
        
        Ext.getCmp('searchView').show();
	},
	submitFunction: function()
	{
		
		 if(!Ext.getCmp('formDoctorView'))
        {
            Ext.create('myapp.view.formDoctor',{
                viewId: 'formDoctorView'
            })
        }
        var doctorName=Ext.getCmp('doctorName').getValue();
        var user=Ext.getCmp('user').getValue();
        var comment=Ext.getCmp('comment').getValue();
		var store = Ext.StoreMgr.get('docListStore');
        
         store.setProxy({        
         url: 'http://192.168.1.125:4004/createComment?doctorName='+doctorName+'&user='+user+'&comment='+comment,
            		   });

		 Ext.getStore('docListStore').load();
		 store.setProxy({        
         url: 'http://192.168.1.125:4004/getComment?doctorName='+doctorName,
            		  });

		Ext.getStore('docListStore').load();

		Ext.getCmp('formDoctorView').hide();
		
		 if(!Ext.getCmp('docListView'))
        {
            Ext.create('myapp.view.docList',{
                viewId: 'docListView'
            })
        }
         Ext.getCmp('listTitle').setTitle(doctorName);
		Ext.getCmp('docListView').show();
	},
	selectItemFunction: function(dataview, index, target, record, e, options)
	{

		var itemText=record.data.doctorName;
		var store = Ext.StoreMgr.get('docListStore');
         store.setProxy({ 
         	url: 'http://192.168.1.125:4004/getComment?doctorName='+itemText
          });
         Ext.getStore('docListStore').load();
         Ext.getCmp('searchView').hide();
        if(!Ext.getCmp('docListView'))
        {
            Ext.create('myapp.view.docList',{
                viewId: 'docListView'
            })
        }
         Ext.getCmp('listTitle').setTitle(itemText);
        //Ext.getCmp('docSearchListId').hide();
        Ext.getCmp('docListView').show();

	},
	searchFunction: function()
	{
		var searchText=Ext.getCmp('searchButton').getValue();
		var store = Ext.StoreMgr.get('docListStore');
         store.setProxy({ 
         	url: 'http://192.168.1.125:4004/searchDoctor?doctorName='+searchText
          });

		Ext.getStore('docListStore').load();
		//Ext.getCmp('docSearchListId').show();
	},
	backSearchFunction: function()
	{
		Ext.getCmp('searchView').hide();
		Ext.getCmp('menuView').show();
	},
	backFormFunction: function()
	{
		Ext.getCmp('formDoctorView').hide();
		Ext.getCmp('menuView').show();

	},
	backListFunction: function()
	{
		Ext.getCmp('docListView').hide();
		Ext.StoreMgr.get('docListStore').removeAll();
		if(Ext.getCmp('searchButton')){Ext.getCmp('searchButton').reset();}
		if(Ext.getCmp('doctorName')){Ext.getCmp('doctorName').reset();}
		if(Ext.getCmp('user')){Ext.getCmp('user').reset();}
		if(Ext.getCmp('comment')){Ext.getCmp('comment').reset();}
	//	Ext.getCmp('docSearchListId').hide();
		Ext.getCmp('menuView').show();
	}
	
});



	