import { OverrideColumn, Record, StringColumn, Table } from '@servicenow/sdk/core'

export const x_144721_family_ex_reimbursement_request = Table({
    name: 'x_144721_family_ex_reimbursement_request',
    label: [
        { language: 'en', label: 'Reimbursement Request', plural: 'Reimbursement Requests' },
        { language: 'ja', label: '立替金精算申請', plural: '立替金精算申請' },
    ],
    extends: 'task',
    display: 'number',
    allowWebServiceAccess: true,
    audit: true,
    autoNumber: {
        prefix: 'FEX',
        number: 1000,
        numberOfDigits: 7,
    },
    schema: {
        short_description: OverrideColumn({
            baseTable: 'task',
            mandatory: true,
        }),
        requested_by: OverrideColumn({
            baseTable: 'task',
            mandatory: true,
        }),
        assigned_to: OverrideColumn({
            baseTable: 'task',
            mandatory: true,
        }),
        state: OverrideColumn({
            baseTable: 'task',
            mandatory: true,
            default: '1',
        }),
        active: OverrideColumn({
            baseTable: 'task',
            default: 'true',
        }),
        notes: StringColumn({
            label: [
                { language: 'en', label: 'Notes', plural: 'Notes' },
                { language: 'ja', label: '備考', plural: '備考' },
            ],
            maxLength: 1000,
        }),
    },
})

// OverrideColumn only creates sys_dictionary_override records. Define request-specific labels
// for inherited task fields as sys_documentation records so the form/list labels are clear
// in this reimbursement request table.
Record({
    $id: Now.ID['reimbursement_request_short_description_doc_en'],
    table: 'sys_documentation',
    data: {
        name: 'x_144721_family_ex_reimbursement_request',
        element: 'short_description',
        language: 'en',
        label: 'Request Summary',
        plural: 'Request Summaries',
    },
})

Record({
    $id: Now.ID['reimbursement_request_short_description_doc_ja'],
    table: 'sys_documentation',
    data: {
        name: 'x_144721_family_ex_reimbursement_request',
        element: 'short_description',
        language: 'ja',
        label: '申請概要',
        plural: '申請概要',
    },
})

Record({
    $id: Now.ID['reimbursement_request_requested_by_doc_en'],
    table: 'sys_documentation',
    data: {
        name: 'x_144721_family_ex_reimbursement_request',
        element: 'requested_by',
        language: 'en',
        label: 'Applicant',
        plural: 'Applicants',
    },
})

Record({
    $id: Now.ID['reimbursement_request_requested_by_doc_ja'],
    table: 'sys_documentation',
    data: {
        name: 'x_144721_family_ex_reimbursement_request',
        element: 'requested_by',
        language: 'ja',
        label: '申請者',
        plural: '申請者',
    },
})

Record({
    $id: Now.ID['reimbursement_request_assigned_to_doc_en'],
    table: 'sys_documentation',
    data: {
        name: 'x_144721_family_ex_reimbursement_request',
        element: 'assigned_to',
        language: 'en',
        label: 'Settlement Assignee',
        plural: 'Settlement Assignees',
    },
})

Record({
    $id: Now.ID['reimbursement_request_assigned_to_doc_ja'],
    table: 'sys_documentation',
    data: {
        name: 'x_144721_family_ex_reimbursement_request',
        element: 'assigned_to',
        language: 'ja',
        label: '精算担当者',
        plural: '精算担当者',
    },
})

Record({
    $id: Now.ID['reimbursement_request_state_doc_en'],
    table: 'sys_documentation',
    data: {
        name: 'x_144721_family_ex_reimbursement_request',
        element: 'state',
        language: 'en',
        label: 'Request State',
        plural: 'Request States',
    },
})

Record({
    $id: Now.ID['reimbursement_request_state_doc_ja'],
    table: 'sys_documentation',
    data: {
        name: 'x_144721_family_ex_reimbursement_request',
        element: 'state',
        language: 'ja',
        label: '申請ステータス',
        plural: '申請ステータス',
    },
})

Record({
    $id: Now.ID['reimbursement_request_active_doc_en'],
    table: 'sys_documentation',
    data: {
        name: 'x_144721_family_ex_reimbursement_request',
        element: 'active',
        language: 'en',
        label: 'Active Request',
        plural: 'Active Requests',
    },
})

Record({
    $id: Now.ID['reimbursement_request_active_doc_ja'],
    table: 'sys_documentation',
    data: {
        name: 'x_144721_family_ex_reimbursement_request',
        element: 'active',
        language: 'ja',
        label: '有効な申請',
        plural: '有効な申請',
    },
})
