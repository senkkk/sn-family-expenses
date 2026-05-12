import {
    DateColumn,
    DecimalColumn,
    MultiLineTextColumn,
    OverrideColumn,
    Record,
    ReferenceColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core'

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
        notes: MultiLineTextColumn({
            label: [
                { language: 'en', label: 'Notes', plural: 'Notes' },
                { language: 'ja', label: '備考', plural: '備考' },
            ],
            maxLength: 1000,
        }),
    },
})

export const x_144721_family_ex_expense_line = Table({
    name: 'x_144721_family_ex_expense_line',
    label: [
        { language: 'en', label: 'Expense Line', plural: 'Expense Lines' },
        { language: 'ja', label: '立替明細', plural: '立替明細' },
    ],
    display: 'description',
    allowWebServiceAccess: true,
    audit: true,
    schema: {
        request: ReferenceColumn({
            label: [
                { language: 'en', label: 'Reimbursement Request', plural: 'Reimbursement Requests' },
                { language: 'ja', label: '立替金精算申請', plural: '立替金精算申請' },
            ],
            referenceTable: 'x_144721_family_ex_reimbursement_request',
            mandatory: true,
            cascadeRule: 'cascade',
        }),
        paid_by: ReferenceColumn({
            label: [
                {
                    language: 'en',
                    label: 'Paid By',
                    plural: 'Paid By',
                    hint: 'The household member who actually paid this expense line. Only one person is expected per line.',
                },
                {
                    language: 'ja',
                    label: '立替者',
                    plural: '立替者',
                    hint: 'この明細を実際に支払った家庭内メンバーです。1明細につき1名のみを想定します。',
                },
            ],
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        expense_date: DateColumn({
            label: [
                { language: 'en', label: 'Expense Date', plural: 'Expense Dates' },
                { language: 'ja', label: '利用日', plural: '利用日' },
            ],
            mandatory: true,
        }),
        description: StringColumn({
            label: [
                { language: 'en', label: 'Description', plural: 'Descriptions' },
                { language: 'ja', label: '内容', plural: '内容' },
            ],
            mandatory: true,
            maxLength: 160,
        }),
        amount: DecimalColumn({
            label: [
                { language: 'en', label: 'Expense Amount', plural: 'Expense Amounts' },
                { language: 'ja', label: '立替金額', plural: '立替金額' },
            ],
            mandatory: true,
            scale: 2,
        }),
        notes: MultiLineTextColumn({
            label: [
                { language: 'en', label: 'Notes', plural: 'Notes' },
                { language: 'ja', label: '備考', plural: '備考' },
            ],
            maxLength: 1000,
        }),
    },
})

export const x_144721_family_ex_expense_share = Table({
    name: 'x_144721_family_ex_expense_share',
    label: [
        { language: 'en', label: 'Expense Share', plural: 'Expense Shares' },
        { language: 'ja', label: '負担内訳', plural: '負担内訳' },
    ],
    display: 'member',
    allowWebServiceAccess: true,
    audit: true,
    schema: {
        expense_line: ReferenceColumn({
            label: [
                { language: 'en', label: 'Expense Line', plural: 'Expense Lines' },
                { language: 'ja', label: '立替明細', plural: '立替明細' },
            ],
            referenceTable: 'x_144721_family_ex_expense_line',
            mandatory: true,
            cascadeRule: 'cascade',
        }),
        member: ReferenceColumn({
            label: [
                { language: 'en', label: 'Member', plural: 'Members' },
                { language: 'ja', label: '負担する人', plural: '負担する人' },
            ],
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        share_amount: DecimalColumn({
            label: [
                { language: 'en', label: 'Share Amount', plural: 'Share Amounts' },
                { language: 'ja', label: '負担額', plural: '負担額' },
            ],
            mandatory: true,
            scale: 2,
        }),
        notes: MultiLineTextColumn({
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
