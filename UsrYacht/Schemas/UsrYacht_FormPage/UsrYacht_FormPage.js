define("UsrYacht_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "c8beed63-1c8b-48ad-b36e-02d5c712bfbc",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "copilot-rewrite-friendly-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_wqp9jkb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_ycoxcq2",
					"control": "$PDS_UsrPrice_ycoxcq2",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_lmptrpw",
					"control": "$PDS_UsrTicketPrice_lmptrpw",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_5955gl9",
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
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "large",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_2pwjns0",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType_2pwjns0",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "FlexContainer_5955gl9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Length",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrColumn8_k9l6odn",
					"control": "$PDS_UsrColumn8_k9l6odn",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "FlexContainer_5955gl9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PassengersCount",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCount_zpl55ri",
					"control": "$PDS_UsrPassengersCount_zpl55ri",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "FlexContainer_5955gl9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_b48sgsy",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCity_b48sgsy",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "FlexContainer_5955gl9",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn17_qkbtk36",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrColumn17_qkbtk36",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "FlexContainer_5955gl9",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_3vcihx7",
					"control": "$PDS_UsrComment_3vcihx7",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": false
				},
				"parentName": "FlexContainer_5955gl9",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "YachtCategory",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(YachtCategory_label)#",
					"visible": true,
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": "",
					"required": false,
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentYacht",
					"selectSchemaName": "UsrSelectedYachtCategory",
					"selectColumnName": "UsrCategory"
				},
				"parentName": "FlexContainer_5955gl9",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "FlexContainer_dixdppr",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "large",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "YachtStatus",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_wu9ohka",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus_wu9ohka",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "FlexContainer_dixdppr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Captain",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_xesasyj",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCaptain_xesasyj",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "FlexContainer_dixdppr",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CrewCount",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewCount_8vkabsv",
					"control": "$PDS_UsrCrewCount_8vkabsv",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "FlexContainer_dixdppr",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_a3h7v39",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_a3h7v39",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "FlexContainer_dixdppr",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ManagerEmail",
				"values": {
					"type": "crt.EmailInput",
					"label": "#ResourceString(ManagerEmail_label)#",
					"control": "$PDS_UsrManagerEmail_rk1qoj9",
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(ManagerEmail_caption)#",
					"visible": true,
					"readonly": true
				},
				"parentName": "FlexContainer_dixdppr",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "FlexContainer_bwzvjiu",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "medium",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_tqd6ams",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_tqd6ams_title)#",
					"toggleType": "material",
					"togglePosition": "after",
					"expanded": false,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "medium",
						"right": "medium"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "FlexContainer_bwzvjiu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_8bupa4o",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_tqd6ams",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_l0ao1oy",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_8bupa4o",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_4mgsxwk",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_4mgsxwk_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_l0ao1oy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_bi5as8y",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_bi5as8y_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_e8tht2cDS"
						}
					}
				},
				"parentName": "FlexContainer_l0ao1oy",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_db67oq6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_db67oq6_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_l0ao1oy",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_fphrorl",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_fphrorl_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "YachtRental_GridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_db67oq6",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_1dean2n",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_1dean2n_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_db67oq6",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_xh89i00",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_xh89i00_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_xh89i00_GridDetail_e8tht2c",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_e8tht2c"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_xh89i00_SearchValue",
							"GridDetailSearchFilter_xh89i00_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_l0ao1oy",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_y5dyrh5",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_tqd6ams",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YachtRental_GridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_e8tht2c",
					"activeRow": "$GridDetail_e8tht2c_ActiveRow",
					"selectionState": "$GridDetail_e8tht2c_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_e8tht2c_SelectionState"
					},
					"primaryColumnName": "GridDetail_e8tht2cDS_Id",
					"columns": [
						{
							"id": "b2aa82b8-3222-5db8-4228-2a1392fa01bc",
							"code": "GridDetail_e8tht2cDS_UsrStartDate",
							"caption": "#ResourceString(GridDetail_e8tht2cDS_UsrStartDate)#",
							"dataValueType": 8,
							"width": 143
						},
						{
							"id": "72ff76f2-fe7a-83b7-4361-9b8a3cd4d3c1",
							"code": "GridDetail_e8tht2cDS_UsrEndDate",
							"caption": "#ResourceString(GridDetail_e8tht2cDS_UsrEndDate)#",
							"dataValueType": 8,
							"width": 132
						},
						{
							"id": "b69a81ef-7b74-c6ae-d0f5-d20b54aac1a6",
							"code": "GridDetail_e8tht2cDS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_e8tht2cDS_UsrCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "8b1e74cb-222c-0d71-feb6-56e63d498927",
							"code": "GridDetail_e8tht2cDS_UsrTotalAmount",
							"caption": "#ResourceString(GridDetail_e8tht2cDS_UsrTotalAmount)#",
							"dataValueType": 32,
							"width": 150.99998474121094
						},
						{
							"id": "fabfea6b-1798-a3cd-9e9f-a9277389c77f",
							"code": "GridDetail_e8tht2cDS_UsrComment",
							"caption": "#ResourceString(GridDetail_e8tht2cDS_UsrComment)#",
							"dataValueType": 28
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_y5dyrh5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_e8tht2c_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_e8tht2cDS",
							"filters": "$GridDetail_e8tht2c | crt.ToCollectionFilters : 'GridDetail_e8tht2c' : $GridDetail_e8tht2c_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_e8tht2c_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "YachtRental_GridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_e8tht2c_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_e8tht2cDS",
							"filters": "$GridDetail_e8tht2c | crt.ToCollectionFilters : 'GridDetail_e8tht2c' : $GridDetail_e8tht2c_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_e8tht2c_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_e8tht2c_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_e8tht2c_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "YachtRental_GridDetail",
							"filters": "$GridDetail_e8tht2c | crt.ToCollectionFilters : 'GridDetail_e8tht2c' : $GridDetail_e8tht2c_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_e8tht2c_SelectionState"
						}
					}
				},
				"parentName": "YachtRental_GridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_e8tht2c_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_e8tht2cDS",
							"selectionState": "$GridDetail_e8tht2c_SelectionState"
						}
					}
				},
				"parentName": "YachtRental_GridDetail",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetail_e8tht2c_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_e8tht2cDS",
							"filters": "$GridDetail_e8tht2c | crt.ToCollectionFilters : 'GridDetail_e8tht2c' : $GridDetail_e8tht2c_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_e8tht2c_SelectionState"
						}
					}
				},
				"parentName": "YachtRental_GridDetail",
				"propertyName": "bulkActions",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrColumn8_k9l6odn": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						}
					},
					"PDS_UsrPrice_ycoxcq2": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrCaptain_xesasyj": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrCaptain_xesasyj_List": {
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
					"PDS_UsrCrewCount_8vkabsv": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						}
					},
					"PDS_UsrPassengersCount_zpl55ri": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(PassengersCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrDriveType_2pwjns0": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrDriveType_2pwjns0_List": {
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
					"PDS_UsrStatus_wu9ohka": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrStatus_wu9ohka_List": {
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
					"PDS_UsrComment_3vcihx7": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_a3h7v39": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_a3h7v39_List": {
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
					"PDS_UsrColumn17_qkbtk36": {
						"modelConfig": {
							"path": "PDS.UsrColumn17"
						}
					},
					"PDS_UsrColumn17_qkbtk36_List": {
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
					"PDS_UsrCity_b48sgsy": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCity_b48sgsy_List": {
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
					"PDS_UsrTicketPrice_lmptrpw": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrManagerEmail_rk1qoj9": {
						"modelConfig": {
							"path": "PDS.UsrManagerEmail_rk1qoj9"
						}
					},
					"GridDetail_e8tht2c": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_e8tht2cDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_xh89i00_GridDetail_e8tht2c",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_e8tht2c_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_e8tht2cDS_UsrStartDate": {
									"modelConfig": {
										"path": "GridDetail_e8tht2cDS.UsrStartDate"
									}
								},
								"GridDetail_e8tht2cDS_UsrEndDate": {
									"modelConfig": {
										"path": "GridDetail_e8tht2cDS.UsrEndDate"
									}
								},
								"GridDetail_e8tht2cDS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_e8tht2cDS.UsrCustomer"
									}
								},
								"GridDetail_e8tht2cDS_UsrTotalAmount": {
									"modelConfig": {
										"path": "GridDetail_e8tht2cDS.UsrTotalAmount"
									}
								},
								"GridDetail_e8tht2cDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_e8tht2cDS.UsrComment"
									}
								},
								"GridDetail_e8tht2cDS_Id": {
									"modelConfig": {
										"path": "GridDetail_e8tht2cDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_e8tht2c_PredefinedFilter": {
						"value": null
					},
					"YachtCategory_List_Items_Predefined_Filter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_e8tht2cDS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYacht",
							"attributes": {
								"UsrManagerEmail_rk1qoj9": {
									"path": "UsrManager.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_e8tht2cDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrStartDate": {
									"path": "UsrStartDate"
								},
								"UsrEndDate": {
									"path": "UsrEndDate"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrTotalAmount": {
									"path": "UsrTotalAmount"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_ycoxcq2;
					console.log("Price = " + price);
					request.$context.PDS_UsrComment_3vcihx7 = "comment from JS code!";
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrPrice_ycoxcq2' || 		        // if price changed
					   request.attributeName === 'PDS_UsrPassengersCount_zpl55ri' ) { 		// or Passenger count changed
						let price = await request.$context.PDS_UsrPrice_ycoxcq2;
						let passengers = await request.$context.PDS_UsrPassengersCount_zpl55ri;
						let ticket_price = price / passengers;
						request.$context.PDS_UsrTicketPrice_lmptrpw = ticket_price;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": {
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});