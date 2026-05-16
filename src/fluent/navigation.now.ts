import { ApplicationMenu, Record } from '@servicenow/sdk/core'

export const familyExpensesAppCategory = Record({
    $id: Now.ID['family_expenses_app_category'],
    table: 'sys_app_category',
    data: {
        name: 'Family Expenses',
        style: 'border-color: #7c3aed; background-color: #f5f3ff;',
        default_order: 100,
    },
})

export const familyExpensesApplicationMenu = ApplicationMenu({
    $id: Now.ID['family_expenses_application_menu'],
    title: 'Family Expenses',
    hint: 'Open family expense reimbursement records and configuration.',
    description: 'Navigation menu for family expense reimbursement requests, expense lines, shares, and application properties.',
    category: familyExpensesAppCategory,
    active: true,
    order: 100,
})

Record({
    $id: Now.ID['family_expenses_reimbursement_requests_module'],
    table: 'sys_app_module',
    data: {
        title: 'Reimbursement Requests',
        application: familyExpensesApplicationMenu,
        link_type: 'LIST',
        name: 'x_144721_family_ex_reimbursement_request',
        hint: 'Open reimbursement request records.',
        active: true,
        order: 100,
    },
})

Record({
    $id: Now.ID['family_expenses_expense_lines_module'],
    table: 'sys_app_module',
    data: {
        title: 'Expense Lines',
        application: familyExpensesApplicationMenu,
        link_type: 'LIST',
        name: 'x_144721_family_ex_expense_line',
        hint: 'Open expense line records.',
        active: true,
        order: 200,
    },
})

Record({
    $id: Now.ID['family_expenses_expense_shares_module'],
    table: 'sys_app_module',
    data: {
        title: 'Expense Shares',
        application: familyExpensesApplicationMenu,
        link_type: 'LIST',
        name: 'x_144721_family_ex_expense_share',
        hint: 'Open expense share records.',
        active: true,
        order: 300,
    },
})

Record({
    $id: Now.ID['family_expenses_configuration_separator_module'],
    table: 'sys_app_module',
    data: {
        title: 'Configuration',
        application: familyExpensesApplicationMenu,
        link_type: 'SEPARATOR',
        active: true,
        order: 400,
    },
})

Record({
    $id: Now.ID['family_expenses_properties_module'],
    table: 'sys_app_module',
    data: {
        title: 'Properties',
        application: familyExpensesApplicationMenu,
        link_type: 'FILTER',
        name: 'sys_properties',
        filter: 'nameSTARTSWITHx_144721_family_ex',
        hint: 'Edit Family Expenses system properties.',
        active: true,
        order: 500,
    },
})
