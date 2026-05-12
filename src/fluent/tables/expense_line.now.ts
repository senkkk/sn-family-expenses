import { DateColumn, DecimalColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

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
        notes: StringColumn({
            label: [
                { language: 'en', label: 'Notes', plural: 'Notes' },
                { language: 'ja', label: '備考', plural: '備考' },
            ],
            maxLength: 1000,
        }),
    },
})
