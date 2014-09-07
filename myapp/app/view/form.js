Ext.define('myapp.view.Form', {
    extend: 'Ext.Panel',
    xtype: 'Form',
    
    config: {
        
        layout: {
       
        align: 'middle'
                },
        items: [

            {
            xtype: 'panel',
            html: 'Please choose whether you want to view a doctors profile or give comments about a doctor'
            },
            
            
            
                {
                    xtype: 'button',
                    itemid: 'comment',
                    text: 'Comment about a doctor',
                    name: 'Comment about a doctor',
                    margin: '50 50 150 50',
                    height: 100,
                    width: 500,
                    

                },
                {
                    xtype: 'button',
                    itemid: 'view',
                    text: 'view Comments about a doctor',
                    name: 'view Comments about a doctor',
                    margin: '150 50 50 50',
                    height: 100,
                    width: 500,
                     

                 },
            
            
        ]
    }
});
