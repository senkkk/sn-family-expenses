import { DecimalColumn, MultiLineTextColumn, ReferenceColumn, Table } from '@servicenow/sdk/core'

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
