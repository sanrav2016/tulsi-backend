export default {
    name: 'eventImage',
    title: 'EventImage',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        }, 
        {
            name: 'uploaded',
            title: "Uploaded",
            type: 'datetime'
        },
        {
            name: 'creator',
            title: 'Creator',
            type: 'reference',
            to: [{ type: 'user' }],
            weak: true,
            options: {
                disableNew: true,
            }
        }
    ]
}