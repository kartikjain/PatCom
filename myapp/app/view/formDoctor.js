Ext.define('myapp.view.formDoctor', {
            extend: 'Ext.tab.Panel',
            xtype: 'formDoctor',
            id: 'formDoctorView',
            config: {

                tabBar: {
                  
                    items : [{
                     title : 'Back',
                     html : '<h2>Back</h2>',
                     id: 'backForm',
                    
                 }]
                },
                items: [{

                        xtype: 'formpanel',
                        id: 'basicForm',
                        
                        items: [{
                            xtype: 'fieldset',
                            instructions: 'Please enter the information above',
                            defaults: {
                                labelWidth: '35%'
                            },
                            items: [{
                                    xtype: 'textfield',
                                    label: 'Doctor Name',
                                    id: 'doctorName',
                                    name: 'doctorName',
                                    placeHolder: 'Enter Name',
                                    autoCapitalize: true,
                                    required: true,
                                    clearIcon: true
                                }, {
                                    xtype: 'textfield',
                                    name: 'user',
                                    id: 'user',
                                    label: 'Your name',
                                    placeHolder: 'Enter Name',
                                    autoCapitalize: true,
                                    required: true,
                                    clearIcon: true
                                }, {
                                    xtype: 'textareafield',
                                    name: 'comment',
                                    id: 'comment',
                                    label: 'Comments',
                                    placeHolder: 'Enter Comments',
                                    autoCapitalize: true,
                                    required: true,
                                    clearIcon: true
                                }, {
                                    xtype: 'button',
                                    text: 'Submit',
                                    margin: 50,
                                    id: 'submit'
                                }

                            ]
                        }]
                    }]

                }    
            })