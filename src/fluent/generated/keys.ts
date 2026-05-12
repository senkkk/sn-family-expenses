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
                        table: 'sys_dictionary'
                        id: '0b672f90c43a40818af424ba46a0d6ff'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'share_amount'
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
                        table: 'sys_documentation'
                        id: '1bca6bb719084815a1b5a71a22a3ad54'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'description'
                            language: 'en'
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
                        id: '23cb5044ce3643c48c2e20c7af2c853a'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'expense_line'
                            language: 'en'
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
                        table: 'sys_dictionary_override'
                        id: '35bb3284fdca40b59dde61cd01a59601'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'state'
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
                        table: 'sys_dictionary'
                        id: '4189bb387df14b1699a28aa37f847c89'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'description'
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
                        table: 'sys_dictionary'
                        id: '4f91b104ab7c4b89a7c4fa8d590c1fe6'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'paid_by'
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
                        id: '73b4f1f755b046a0a59fc3e2fd1092ca'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'member'
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
                        table: 'sys_dictionary'
                        id: '8aadcfa35e7742578ebda3708e122391'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
                            element: 'expense_line'
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
                        table: 'sys_dictionary_override'
                        id: '994dca29516249458ac825d10c80e026'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'short_description'
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
                        id: 'a1ece5c1f51f40fa9070ee03a7d3184c'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'status'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: 'aa0a6bc875e44148b07a63aae0c536ae'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
                            element: 'amount'
                            language: 'en'
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
                        table: 'sys_db_object'
                        id: 'c55fd818e97c4fb084deea1cf030e976'
                        key: {
                            name: 'x_144721_family_ex_expense_share'
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
                        table: 'sys_dictionary_override'
                        id: 'cf7d90d00c8f4003a8d737aa224a97d7'
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'requested_by'
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
                        table: 'sys_choice_set'
                        id: 'db1da534148b4d3e9ca58eb89cbb1c32'
                        deleted: true
                        key: {
                            name: 'x_144721_family_ex_reimbursement_request'
                            element: 'status'
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
                        table: 'ua_table_licensing_config'
                        id: 'eb953af2260340e0bbbcdc8c8e25bfb4'
                        key: {
                            name: 'x_144721_family_ex_expense_line'
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
