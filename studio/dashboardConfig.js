export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '6177605be2d4e2717138c0fa',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6kzoixx6',
                  apiId: '98096acd-92bf-45b6-a01a-1d215a453ad2'
                },
                {
                  buildHookId: '6177605ba5f84b34fce14865',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bjity7qj',
                  apiId: '49d6cd32-8e83-48d2-bb40-09a2eea62742'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/njwang217/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bjity7qj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
