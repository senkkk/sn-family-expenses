import { default_view, Form, List } from '@servicenow/sdk/core'

export const expenseLineDefaultForm = Form({
    table: 'x_144721_family_ex_expense_line',
    view: default_view,
    sections: [
        {
            caption: 'Expense Details',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'request', type: 'table_field' },
                        { field: 'expense_date', type: 'table_field' },
                        { field: 'description', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'paid_by', type: 'table_field' },
                        { field: 'amount', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [{ field: 'notes', type: 'table_field' }],
                },
            ],
        },
        {
            caption: 'Expense Shares',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            type: 'list',
                            listType: '12M',
                            listRef: 'x_144721_family_ex_expense_share.expense_line',
                        },
                    ],
                },
            ],
        },
    ],
})

export const expenseLineDefaultList = List({
    table: 'x_144721_family_ex_expense_line',
    view: default_view,
    columns: [
        { element: 'request', position: 0 },
        { element: 'expense_date', position: 1 },
        { element: 'description', position: 2 },
        { element: 'paid_by', position: 3 },
        { element: 'amount', position: 4, sum: true },
    ],
})

export const expenseLineRequestRelatedList = List({
    table: 'x_144721_family_ex_expense_line',
    view: default_view,
    parent: 'x_144721_family_ex_reimbursement_request',
    columns: [
        { element: 'expense_date', position: 0 },
        { element: 'description', position: 1 },
        { element: 'paid_by', position: 2 },
        { element: 'amount', position: 3, sum: true },
        { element: 'notes', position: 4 },
    ],
})
