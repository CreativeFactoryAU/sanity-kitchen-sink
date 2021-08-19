export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611dbdc679eaf5691d5117ea',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-odz6opj2',
                  apiId: 'f49944aa-6296-4608-b01d-166d0c6ffe7b'
                },
                {
                  buildHookId: '611dbdc6311aaf6f864e5fa4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nq89mndu',
                  apiId: '564b2929-76ab-4263-b220-825b1ba9cde1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CreativeFactoryAU/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nq89mndu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
