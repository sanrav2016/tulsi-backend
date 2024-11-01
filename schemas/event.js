export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        }, 
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        }, 
        {
            name: 'galleryEnabled',
            title: 'GalleryEnabled',
            type: 'boolean',
            initialValue: true
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        }, 
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'string' }]
        }, 
        {
            name: 'centers',
            title: 'Centers',
            type: 'array',
            of: [{ type: 'string' }]
        }, 
        {
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{ type: 'eventImage' }],
            initialValue: []
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
        },
        {
            name: 'instances',
            title: 'Instances',
            type: 'array',
            of: [{ type: 'eventInstance' }],
            initialValue: []
        },
        {
            name: 'published',
            title: 'Published',
            type: 'boolean',
            initialValue: false
        }
    ]
}