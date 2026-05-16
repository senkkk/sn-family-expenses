import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '0a1642681da34f0bb990fb143c2c2d45'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '6f166abaa3fb45f093e41dca4b5746a2'
                        deleted: true
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '373448d4b624474f96f6b7ff6c650d4a'
                        deleted: true
                    }
                    family_expenses_app_category: {
                        table: 'sys_app_category'
                        id: '67d58bedd40e47c9a3abb7b6ac3ef03e'
                    }
                    family_expenses_application_menu: {
                        table: 'sys_app_application'
                        id: '46b5e94e3ecd49e3a9a0908dff4dcfac'
                    }
                    family_expenses_configuration_separator_module: {
                        table: 'sys_app_module'
                        id: '05897eaf503245368963ff38c55f9cce'
                    }
                    family_expenses_expense_lines_module: {
                        table: 'sys_app_module'
                        id: '5ea9bf7237b74279842fd91a87466b43'
                    }
                    family_expenses_expense_shares_module: {
                        table: 'sys_app_module'
                        id: 'c09925a8cf094bc28e941bccab16c073'
                    }
                    family_expenses_properties_module: {
                        table: 'sys_app_module'
                        id: 'f350023c73d547748d37972234f2e4f1'
                    }
                    family_expenses_reimbursement_requests_module: {
                        table: 'sys_app_module'
                        id: '32f40421ffd240158a8ef6384d7ffecf'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '04fad376c98441c2b9f57229d24fc641'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '50fb66e9ca8745f7b61e8e0083f7ba5c'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0216edbdd7ef4e5487cc93e9c47c0053'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'share_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '079b01639da4482aa6af3b1351813331'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '085d8ce19e514ba281ad273f4d0fe2c0'
                        key: {
                            sys_ui_form: {
                                id: 'd0ba3de426d44bad9b10a9fb8cff6883'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'dc689ba82fb640ba9c2e180e6bb9920a'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    caption: 'Expense Shares'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0866b3d1ef49468ea1d411a951c0e069'
                        key: {
                            sys_ui_section: {
                                id: '438229533b364d1293f36a2f13e28ae5'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    caption: 'Expense Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '0a56efe67a6548e4beb1f65fb049de94'
                        key: {
                            sys_ui_form: {
                                id: 'c81e88aa89f44264bf62e1b4f978c629'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '65dd78daffb0434bbf404429ce841c82'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    caption: 'Expense Lines'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b672f90c43a40818af424ba46a0d6ff'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'share_amount'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0ca5aa25d4134d18a0e8026db0570254'
                        key: {
                            list_id: {
                                id: 'bff4c339d5424e64943c8238675595c6'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'paid_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0cdf7a65459d4c0ea35d41a7a6761774'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '0d611cdc8d4a4ff7b9b607febd5f6c00'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0ff133c6f2254f3e9ae367a4c0a13c00'
                        key: {
                            sys_ui_section: {
                                id: 'dc689ba82fb640ba9c2e180e6bb9920a'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    caption: 'Expense Shares'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '12M.x_144721_family_ex_expense_line.x_144721_family_ex_expense_share.expense_line'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1022de2c7e7944a284b875d007e434fc'
                        key: {
                            list_id: {
                                id: 'd72cc7161de54b4284604949fe50e5ea'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_144721_family_ex_expense_line'
                                }
                            }
                            element: 'share_amount'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '10a8500f0623498eb80a62db2355fc72'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '16a91a394cf0466e8d151116126e78f5'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '1773498c40224103801eb7d2a9cbaea2'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'x_144721_family_ex_reimbursement_request'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '1928727621e54970b30f807c52b9b356'
                        key: {
                            sys_ui_form: {
                                id: 'd0ba3de426d44bad9b10a9fb8cff6883'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '438229533b364d1293f36a2f13e28ae5'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    caption: 'Expense Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1b9cd2c615d54f5799d9ef8e86218169'
                        key: {
                            list_id: {
                                id: '0d611cdc8d4a4ff7b9b607febd5f6c00'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'expense_line'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1bca6bb719084815a1b5a71a22a3ad54'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2204c757132b406988eaa889cc45378f'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'NULL'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '222aa093da184daba38c066cba49407d'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'status'
                            value: 'canceled'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '22c3f620a895415da171d404d421bf42'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'amount'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '239094b57d7f472b971ebf1d99fe6208'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'state'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '23cb5044ce3643c48c2e20c7af2c853a'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'expense_line'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26ac4718dd7d41878806de95a795852f'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'expense_line'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '27ecd9e3950348b6a23e69133c8186e5'
                        key: {
                            list_id: {
                                id: '1773498c40224103801eb7d2a9cbaea2'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_144721_family_ex_reimbursement_request'
                                }
                            }
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '281d4a73de4343d28b81805e80249250'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '285dc414a3e443ddb945986defb138b3'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            caption: 'Share Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2921091efc7947c290a9ae8473bf42cb'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '3241a4aea6be48ea94115800214bd02c'
                        key: {
                            category: 'x_144721_family_ex_reimbursement_request'
                            prefix: 'FEX'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '32e12bc35a4545ee89bfb6f354854ba9'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '347c7cd8d7c94295a6149761847263d8'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'description'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '35bb3284fdca40b59dde61cd01a59601'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '36f018ff37d048d883f2c2079b865ee4'
                        key: {
                            list_id: {
                                id: 'bff4c339d5424e64943c8238675595c6'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'amount'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c092f3ab5b74fe597cfcd4ac741a784'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3cf23042819e42c99af773695cd3f6b0'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'request'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3e4835d2efda49999b0aaeb8e7d08715'
                        key: {
                            list_id: {
                                id: '1773498c40224103801eb7d2a9cbaea2'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_144721_family_ex_reimbursement_request'
                                }
                            }
                            element: 'paid_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3f2d9522336d422fbc42c4042592da63'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4189bb387df14b1699a28aa37f847c89'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '422ff888108f4bcf8ba19c9da3d09029'
                        key: {
                            list_id: {
                                id: '1773498c40224103801eb7d2a9cbaea2'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_144721_family_ex_reimbursement_request'
                                }
                            }
                            element: 'amount'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '429013c5e4ae4ed595c99e30e99f3cba'
                        key: {
                            sys_ui_section: {
                                id: '285dc414a3e443ddb945986defb138b3'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    caption: 'Share Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'notes'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '431d1e2be1734adb9fdebbd0377ffcaa'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '437666527c8642658985939dea6952e1'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '438229533b364d1293f36a2f13e28ae5'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            caption: 'Expense Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '46804aaccd314a3db13d461aeff6aae4'
                        key: {
                            sys_ui_section: {
                                id: '438229533b364d1293f36a2f13e28ae5'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    caption: 'Expense Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'notes'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '46a98ea6a5604c04b279c80c806904f6'
                        key: {
                            list_id: {
                                id: '0d611cdc8d4a4ff7b9b607febd5f6c00'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'share_amount'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4abd203c50a14a4981a2a42eb51ed698'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4d2da23baf804c2da7780987dbc8c1e5'
                        key: {
                            sys_ui_section: {
                                id: '438229533b364d1293f36a2f13e28ae5'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    caption: 'Expense Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f91b104ab7c4b89a7c4fa8d590c1fe6'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'paid_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '50851f69fad14e5788493a3dee88cff0'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'paid_by'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '53137bb08212402584ae2c010bb9caa9'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '544b9ce433f5414385b751cd5e7cfbe3'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '54cd7af15d2b4c97a405869d8f1397f9'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'notes'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '58effc2dee4e4b648e2004acec389c97'
                        key: {
                            sys_ui_section: {
                                id: '438229533b364d1293f36a2f13e28ae5'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    caption: 'Expense Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'paid_by'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5a54eccd273b4099b85b2ee13aac397f'
                        key: {
                            list_id: {
                                id: '544b9ce433f5414385b751cd5e7cfbe3'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5b223190730d4593af0c8f9ea6a30c5a'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'status'
                            value: 'settled'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5c425e6a24674fcab051c27fd8d0c8d7'
                        key: {
                            list_id: {
                                id: '0d611cdc8d4a4ff7b9b607febd5f6c00'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'member'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5d8d0990ea02427dad3a67572389ff1d'
                        key: {
                            list_id: {
                                id: '544b9ce433f5414385b751cd5e7cfbe3'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '61defb3c82e141b89f8a02f539119fd2'
                        key: {
                            sys_ui_section: {
                                id: 'c06708db6c1049609d64c30be6e66822'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '65dd78daffb0434bbf404429ce841c82'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            caption: 'Expense Lines'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '65f8474eab9047e79a5245d252b196ad'
                        key: {
                            sys_ui_section: {
                                id: 'c06708db6c1049609d64c30be6e66822'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6c2d96cde04c4e33a829e29da05b3a11'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'NULL'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6f695bcd733140de9cc9c79ba16f147d'
                        key: {
                            list_id: {
                                id: '544b9ce433f5414385b751cd5e7cfbe3'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6fc03158710b4eb899866c9a10fb48d4'
                        key: {
                            list_id: {
                                id: 'bff4c339d5424e64943c8238675595c6'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ff56f8526a44453896a89be1c222b81'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'paid'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '701a341b0a7548aa8f539af25543803f'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'expense_date'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '73b4f1f755b046a0a59fc3e2fd1092ca'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'member'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '73ee9f50be78492da9f438971fc65f8f'
                        key: {
                            sys_ui_section: {
                                id: 'c06708db6c1049609d64c30be6e66822'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '77c4e87c9d9c4ab0928da86229b23bc3'
                        key: {
                            sys_ui_section: {
                                id: '285dc414a3e443ddb945986defb138b3'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    caption: 'Share Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'share_amount'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7891c4f8e62848a880edcfd568c89e68'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '791b1c71eada4343b5e980a115b0ff7c'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'paid_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7a3f102183254f9db2c3cb23ebf2a36a'
                        key: {
                            sys_ui_section: {
                                id: 'c06708db6c1049609d64c30be6e66822'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'notes'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b727e653b4f4d52a326727638f8cf42'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7cbe74fb65974d5ab8d5caad2cbb576e'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7d5420300f07489685fe44adec33b823'
                        key: {
                            list_id: {
                                id: '544b9ce433f5414385b751cd5e7cfbe3'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8410df98038c429bb079419a6a2eb932'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8aa9b66cd112412a94cff38402300d46'
                        key: {
                            sys_ui_section: {
                                id: '438229533b364d1293f36a2f13e28ae5'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    caption: 'Expense Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8aadcfa35e7742578ebda3708e122391'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'expense_line'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8bb8ac2ca84144249a5abf189367c21f'
                        key: {
                            list_id: {
                                id: '0d611cdc8d4a4ff7b9b607febd5f6c00'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8e3bf6853aca423f953922c5f0056500'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'status'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8ef9687bc3b64bdc83ba7651e7f1edae'
                        key: {
                            sys_ui_section: {
                                id: '65dd78daffb0434bbf404429ce841c82'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    caption: 'Expense Lines'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '12M.x_144721_family_ex_reimbursement_request.x_144721_family_ex_expense_line.request'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9155fa29420741888f52eafe146c2678'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9327e4c44a844931b85c2a3fb4c96d71'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '937f02cfa3bc47c8af4f8f9d6d5d4e55'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9792b252521a41eb97e6b1f8cfa6ed4b'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'expense_date'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9874a229d4d9437f8c577cb4475a4cbe'
                        key: {
                            list_id: {
                                id: 'bff4c339d5424e64943c8238675595c6'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'expense_date'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '994dca29516249458ac825d10c80e026'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a957c56627b4e3691bd4736ba3e7a62'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'short_description'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9af547e3c3ac4d4ba41a6f7543b0bcfa'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'amount'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9c0b5ade65214c89af85864f4480c991'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'requested_by'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9ccd17d05c304406a440e04ffb16d6c6'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'settlement_payer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9d6307d734a349bcb491bc9114b05cb1'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9dcc77d8354e41bebcce58c97a7a70d3'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '9fa50f045a9d484383b4a463f5fc36b2'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a18f0c97fd684453b228a60dd5041730'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'paid_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1e313d27e994c25996c3ea5d9c711b9'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'notes'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1ece5c1f51f40fa9070ee03a7d3184c'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a21d9ef957bc40c69e2a932e71d237d8'
                        key: {
                            sys_ui_form: {
                                id: 'c81e88aa89f44264bf62e1b4f978c629'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'c06708db6c1049609d64c30be6e66822'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a53c93454fd54e9fb737a8ff18e3161f'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a6f333c2838340d99dad84de8ef92418'
                        key: {
                            sys_ui_section: {
                                id: '285dc414a3e443ddb945986defb138b3'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    caption: 'Share Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'member'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a8d2f9b9f9c942e1951eee9984a669e1'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'requester'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a8f25d9f7aed41d0ad588fb12031ff14'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a991170d0a96453bbdd0735486b7d8f6'
                        key: {
                            list_id: {
                                id: 'd72cc7161de54b4284604949fe50e5ea'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_144721_family_ex_expense_line'
                                }
                            }
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a9ab675092b44e9cae6208ffa7497b24'
                        key: {
                            sys_ui_section: {
                                id: 'c06708db6c1049609d64c30be6e66822'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_by'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa0a6bc875e44148b07a63aae0c536ae'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aa4732b0965f4faca088a5a63aae1483'
                        key: {
                            sys_ui_section: {
                                id: 'c06708db6c1049609d64c30be6e66822'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa7e669799c7427fa22056c1d1319459'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'assigned_to'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'abd98892e0614f6a8f10c0924d446b48'
                        key: {
                            list_id: {
                                id: 'd72cc7161de54b4284604949fe50e5ea'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_144721_family_ex_expense_line'
                                }
                            }
                            element: 'member'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ae53c568ed324a9f92accda5c856f10c'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'share_amount'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b0b09ad3cc724210949b24f119c9537b'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'active'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b269e9e41dbb490bbb3f3394d1230100'
                        key: {
                            list_id: {
                                id: '1773498c40224103801eb7d2a9cbaea2'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_144721_family_ex_reimbursement_request'
                                }
                            }
                            element: 'expense_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b2dfde82c09d4e8a9121eacbd1934ac3'
                        key: {
                            sys_ui_section: {
                                id: 'c06708db6c1049609d64c30be6e66822'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b3029f636aae4a29aff758d7a42bb407'
                        key: {
                            sys_ui_section: {
                                id: '285dc414a3e443ddb945986defb138b3'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    caption: 'Share Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b5ca1058682944a093430a390ae2e16e'
                        key: {
                            sys_ui_section: {
                                id: 'c06708db6c1049609d64c30be6e66822'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b90fe879cd2949a896adacd014c02d80'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'paid_on'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba7589f49d104ce8a13f07d32762f32c'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bba378e2d2254672acd899c7d74a26d0'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'settlement_payer'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bf6e1cf654994349907ca976da5eec5f'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'bff4c339d5424e64943c8238675595c6'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'c06708db6c1049609d64c30be6e66822'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            caption: 'Request Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c1ed7c043cfc4980a043d54dd2aa1048'
                        key: {
                            list_id: {
                                id: '1773498c40224103801eb7d2a9cbaea2'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_144721_family_ex_reimbursement_request'
                                }
                            }
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'c20a093bb69b4a2a91c72a8a54131531'
                        key: {
                            sys_ui_form: {
                                id: 'f4cfe00d7f0c4b0c8e3f1378bc0fd5ec'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '285dc414a3e443ddb945986defb138b3'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    caption: 'Share Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c2bd9409c3514ecebdffda40655ff69f'
                        key: {
                            sys_ui_section: {
                                id: '285dc414a3e443ddb945986defb138b3'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    caption: 'Share Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c55fd818e97c4fb084deea1cf030e976'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c68065be74fc4858abb98bac163f2b78'
                        key: {
                            sys_ui_section: {
                                id: '438229533b364d1293f36a2f13e28ae5'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    caption: 'Expense Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'expense_date'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'c81e88aa89f44264bf62e1b4f978c629'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cba4d09045b749109ca9be0d7663eca0'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'expense_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'cc5ffe20e4424156843b9ab50f797099'
                        key: {
                            list_id: {
                                id: '544b9ce433f5414385b751cd5e7cfbe3'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: 'cf7d90d00c8f4003a8d737aa224a97d7'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'd0ba3de426d44bad9b10a9fb8cff6883'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd350fc73b67f46c4a39fa908b9e180a7'
                        key: {
                            sys_ui_section: {
                                id: '285dc414a3e443ddb945986defb138b3'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    caption: 'Share Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'expense_line'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd488bca44be04b5eb0bf15374b34a2e1'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'requester'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd678e1dd6ee24cfa8821e6f8121cb512'
                        key: {
                            sys_ui_section: {
                                id: '438229533b364d1293f36a2f13e28ae5'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    caption: 'Expense Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'd72cc7161de54b4284604949fe50e5ea'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'x_144721_family_ex_expense_line'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'db1da534148b4d3e9ca58eb89cbb1c32'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'dc689ba82fb640ba9c2e180e6bb9920a'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            caption: 'Expense Shares'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dca24297d3ab4b84b37a988d796bd423'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dd055dd37695435d86fd44e59edf1adb'
                        key: {
                            sys_ui_section: {
                                id: 'c06708db6c1049609d64c30be6e66822'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'df1d68d3793b45f39d797c1eef94b805'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dfb763863d7544a894bd47b80e9630e4'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'paid'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dfc59792118c468d94c17a4851cfa377'
                        key: {
                            sys_ui_section: {
                                id: '438229533b364d1293f36a2f13e28ae5'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    caption: 'Expense Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'amount'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e01ac326306f44c0bfbcae995ddd7205'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'notes'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e161621ee8ee43bba3926742fc6ce8a0'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'status'
                            value: 'submitted'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e338df45eca940398f331e5554e7722f'
                        key: {
                            list_id: {
                                id: '544b9ce433f5414385b751cd5e7cfbe3'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5cae70ce2644aa49906012c6f51fbf2'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'NULL'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e8233f4c1cf64a19944b0c05fc90718b'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'member'
                            language: 'ja'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'eb8bae32431d4290a6a6a09d94bfd8a6'
                        key: {
                            sys_ui_section: {
                                id: '285dc414a3e443ddb945986defb138b3'
                                key: {
                                    name: 'x_144721_family_ex_expense_share'
                                    caption: 'Share Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'eb953af2260340e0bbbcdc8c8e25bfb4'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'efc3c85c1f904951a5f9f5290f566b6d'
                        key: {
                            sys_ui_section: {
                                id: 'c06708db6c1049609d64c30be6e66822'
                                key: {
                                    name: 'x_144721_family_ex_reimbursement_request'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f1d4f444a433492d9b0b1f32d4e84624'
                        key: {
                            list_id: {
                                id: 'bff4c339d5424e64943c8238675595c6'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'request'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f43e1b9f19d54128a4d91136bac9c975'
                        key: {
                            sys_ui_section: {
                                id: '438229533b364d1293f36a2f13e28ae5'
                                key: {
                                    name: 'x_144721_family_ex_expense_line'
                                    caption: 'Expense Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'request'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'f4cfe00d7f0c4b0c8e3f1378bc0fd5ec'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f6d75353e5d44ea3a58f268d3c9a900e'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'member'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f70120a78e994a798fab91cda75f1717'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'notes'
                        }
                    },
                ]
            }
        }
    }
}
