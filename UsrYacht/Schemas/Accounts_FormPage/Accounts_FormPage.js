define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AlternativeName",
				"values": {
					"labelPosition": "above",
					"readonly": false
				}
			},
			{
				"operation": "merge",
				"name": "Ownership",
				"values": {
					"labelPosition": "above",
					"readonly": false
				}
			},
			{
				"operation": "remove",
				"name": "AnnualRevenue"
			},
			{
				"operation": "merge",
				"name": "EmployeesNumber",
				"values": {
					"labelPosition": "above",
					"readonly": false
				}
			},
			{
				"operation": "merge",
				"name": "Timeline",
				"values": {
					"filterValues": "$Timeline_AllTileFilters"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Email",
				"values": {
					"filters": "$TimelineTile_Email_Items"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Task",
				"values": {
					"filters": "$TimelineTile_Task_Items"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Call",
				"values": {
					"filters": "$TimelineTile_Call_Items"
				}
			},
			{
				"operation": "insert",
				"name": "WebsiteCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrWebsiteCode_oz0b7wm",
					"control": "$PDS_UsrWebsiteCode_oz0b7wm",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "AccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_UsrWebsiteCode_oz0b7wm": {
						"modelConfig": {
							"path": "PDS.UsrWebsiteCode"
						}
					},
					"Ownership_List": {
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
					"EmployeesNumber_List": {
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
					"Timeline_AllTileFilters": {
						"from": [],
						"converter": "crt.ToTileFilterGroup"
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"TimelineTile_EmailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_TaskDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_CallDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Call"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});