export default {
    name: 'signUp',
    title: 'SignUp',
    type: 'document',
    fields: [
        {
            name: 'signedUpUser',
            title: 'SignedUpUser',
            type: 'reference',
            to: [{ type: 'user' }],
            weak: true,
            options: {
                disableNew: true,
            }
        },
        {
            name: 'verified',
            title: 'Verified',
            type: 'boolean'
        },
        {
            name: 'primary',
            title: 'Primary',
            type: 'boolean'
        },
        {
            name: 'adminComfirmed',
            title: 'AdminConfirmed',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'numHours',
            title: 'NumHours',
            type: 'number'
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'string'
        }
    ]
}