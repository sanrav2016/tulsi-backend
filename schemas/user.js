export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'userName',
            title: 'UserName',
            type: 'string'
        },
        {
            name: 'password',
            title: 'Password',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'chapter',
            title: 'Chapter',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            options: {
                list: [
                { title: 'Edison', value: 'Edison' },
                { title: 'Somerset', value: 'Somerset' },
                { title: 'Monroe',  value: 'Monroe' },
                { title: 'Cherry Hill', value: 'Cherry Hill' },
                { title: 'Chesterfield',  value: 'Chesterfield' },
                ],
            }
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
            options: {
                list: [
                { title: 'Sewa Volunteer', value: 'volunteer' },
                { title: 'Event Supervisor Volunteer', value: 'supervisor' },
                { title: 'Admin',  value: 'admin' },
                { title: 'Super Admin',  value: 'admin' }
                ],
            }
        }
    ]
}