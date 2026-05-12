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
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '373448d4b624474f96f6b7ff6c650d4a'
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
            }
        }
    }
}
