export default {
    name: 'eventInstance',
    title: 'EventInstance',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'start',
            title: 'Start',
            type: 'datetime',
            options: {
                dateFormat: 'MM-DD-YYYY',
                timeFormat: 'hh:mm a',
                timeStep: 15,
                calendarTodayLabel: 'Today'
            }
        },
        {
            name: 'end',
            title: 'End',
            type: 'datetime',
            options: {
                dateFormat: 'MM-DD-YYYY',
                timeFormat: 'hh:mm a',
                timeStep: 15,
                calendarTodayLabel: 'Today'
            }
        },
        {
            name: 'numHours',
            title: 'NumHours',
            type: 'number'
        },
        {
            name: 'volunteersNumSlots',
            title: 'VolunteersNumSlots',
            type: 'number'
        },
        {
            name: 'supervisorsNumSlots',
            title: 'SupervisorsNumSlots',
            type: 'number'
        },
        {
            name: 'signUps',
            title: 'SignUps',
            type: 'array',
            of: [{ type: 'signUp' }],
            initialValue: []
        },
        {
            name: 'active',
            title: 'Active',
            type: 'boolean',
            initialValue: true
        },
        {
            name: 'freeze',
            title: 'Freeze',
            type: 'datetime'
        },
        {
            name: 'prerequisites',
            title: 'Prerequisites',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: []
        }
    ]
}