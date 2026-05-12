import {
    DateColumn,
    DecimalColumn,
    MultiLineTextColumn,
    OverrideColumn,
    ReferenceColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core'

export const x_144721_family_ex_reimbursement_request = Table({
    name: 'x_144721_family_ex_reimbursement_request',
    label: '立替金精算申請',
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
            label: '備考',
            maxLength: 1000,
        }),
    },
})

export const x_144721_family_ex_expense_line = Table({
    name: 'x_144721_family_ex_expense_line',
    label: '立替明細',
    display: 'description',
    allowWebServiceAccess: true,
    audit: true,
    schema: {
        request: ReferenceColumn({
            label: '立替金精算申請',
            referenceTable: 'x_144721_family_ex_reimbursement_request',
            mandatory: true,
            cascadeRule: 'cascade',
        }),
        paid_by: ReferenceColumn({
            label: '立替者',
            referenceTable: 'sys_user',
            mandatory: true,
            hint: 'この明細を実際に支払った家庭内メンバーです。1明細につき1名のみを想定します。',
        }),
        expense_date: DateColumn({
            label: '利用日',
            mandatory: true,
        }),
        description: StringColumn({
            label: '内容',
            mandatory: true,
            maxLength: 160,
        }),
        amount: DecimalColumn({
            label: '立替金額',
            mandatory: true,
            scale: 2,
        }),
        notes: MultiLineTextColumn({
            label: '備考',
            maxLength: 1000,
        }),
    },
})

export const x_144721_family_ex_expense_share = Table({
    name: 'x_144721_family_ex_expense_share',
    label: '負担内訳',
    display: 'member',
    allowWebServiceAccess: true,
    audit: true,
    schema: {
        expense_line: ReferenceColumn({
            label: '立替明細',
            referenceTable: 'x_144721_family_ex_expense_line',
            mandatory: true,
            cascadeRule: 'cascade',
        }),
        member: ReferenceColumn({
            label: '負担する人',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        share_amount: DecimalColumn({
            label: '負担額',
            mandatory: true,
            scale: 2,
        }),
        notes: MultiLineTextColumn({
            label: '備考',
            maxLength: 1000,
        }),
    },
})
