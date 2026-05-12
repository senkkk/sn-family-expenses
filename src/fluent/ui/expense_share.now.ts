import { default_view, Form, List } from '@servicenow/sdk/core'

export const expenseShareDefaultForm = Form({
    table: 'x_144721_family_ex_expense_share',
    view: default_view,
    sections: [
        {
            caption: 'Share Details',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'expense_line', type: 'table_field' },
                        { field: 'member', type: 'table_field' },
                    ],
                    rightElements: [{ field: 'share_amount', type: 'table_field' }],
                },
                {
                    layout: 'one-column',
                    elements: [{ field: 'notes', type: 'table_field' }],
                },
            ],
        },
    ],
})

export const expenseShareDefaultList = List({
    table: 'x_144721_family_ex_expense_share',
    view: default_view,
    columns: [
        { element: 'expense_line', position: 0 },
        { element: 'member', position: 1 },
        { element: 'share_amount', position: 2, sum: true },
        { element: 'notes', position: 3 },
    ],
})

export const expenseShareLineRelatedList = List({
    table: 'x_144721_family_ex_expense_share',
    view: default_view,
    parent: 'x_144721_family_ex_expense_line',
    columns: [
        { element: 'member', position: 0 },
        { element: 'share_amount', position: 1, sum: true },
        { element: 'notes', position: 2 },
    ],
})
