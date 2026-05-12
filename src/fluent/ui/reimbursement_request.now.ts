import { default_view, Form, List } from '@servicenow/sdk/core'

export const reimbursementRequestDefaultForm = Form({
    table: 'x_144721_family_ex_reimbursement_request',
    view: default_view,
    sections: [
        {
            caption: 'Request Details',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'number', type: 'table_field' },
                        { field: 'short_description', type: 'table_field' },
                        { field: 'requested_by', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'state', type: 'table_field' },
                        { field: 'assigned_to', type: 'table_field' },
                        { field: 'active', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [{ field: 'notes', type: 'table_field' }],
                },
            ],
        },
        {
            caption: 'Expense Lines',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            type: 'list',
                            listType: '12M',
                            listRef: 'x_144721_family_ex_expense_line.request',
                        },
                    ],
                },
            ],
        },
    ],
})

export const reimbursementRequestDefaultList = List({
    table: 'x_144721_family_ex_reimbursement_request',
    view: default_view,
    columns: [
        { element: 'number', position: 0 },
        { element: 'short_description', position: 1 },
        { element: 'requested_by', position: 2 },
        { element: 'assigned_to', position: 3 },
        { element: 'state', position: 4 },
        { element: 'active', position: 5 },
    ],
})
