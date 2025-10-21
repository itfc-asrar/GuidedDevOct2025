define("UsrYachtRental_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "FlexContainer_ahswc1p",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_qnqt1pu",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrStartDate_5s1blbi",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "date",
					"control": "$UsrYachtRentalDS_UsrStartDate_5s1blbi"
				},
				"parentName": "FlexContainer_ahswc1p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_ehv64oi",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrEndDate_z5hz3xa",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "date",
					"control": "$UsrYachtRentalDS_UsrEndDate_z5hz3xa"
				},
				"parentName": "FlexContainer_ahswc1p",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_ygb6cff",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrCustomer_w1lh3h5",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrYachtRentalDS_UsrCustomer_w1lh3h5"
				},
				"parentName": "FlexContainer_ahswc1p",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_qz3zihz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_qz3zihz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ygb6cff",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_o3zbtqi",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrTotalAmount_svmr6bx",
					"control": "$UsrYachtRentalDS_UsrTotalAmount_svmr6bx",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": ""
				},
				"parentName": "FlexContainer_ahswc1p",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_0llbpkq",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrComment_hi9jhli",
					"control": "$UsrYachtRentalDS_UsrComment_hi9jhli",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "FlexContainer_ahswc1p",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrYachtRentalDS_UsrStartDate_5s1blbi": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrStartDate"
						}
					},
					"UsrYachtRentalDS_UsrEndDate_z5hz3xa": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrEndDate"
						}
					},
					"UsrYachtRentalDS_UsrCustomer_w1lh3h5": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrCustomer"
						}
					},
					"UsrYachtRentalDS_UsrCustomer_w1lh3h5_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"UsrYachtRentalDS_UsrTotalAmount_svmr6bx": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrTotalAmount"
						}
					},
					"UsrYachtRentalDS_UsrComment_hi9jhli": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrYachtRentalDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrYachtRental",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "UsrYachtRentalDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});