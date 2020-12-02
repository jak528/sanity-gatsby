export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fc6f7e219430baa0ff1c0e6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio-mhoeb22x',
                  apiId: 'e26275a0-4a93-4361-909a-4d904d4eb74c'
                },
                {
                  buildHookId: '5fc6f7e219430bab25f1c070',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-web-j76mjoh6',
                  apiId: 'f5d74bcd-df34-4ea9-9a6d-ec0ef528ed7c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jak528/sanity-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-web-j76mjoh6.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
