export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61b9c87fa5863ca8c56f4a4a',
                  title: 'Sanity Studio',
                  name: 'lee-piechowicz-portfolio-studio',
                  apiId: '0107574d-311c-41a5-99a2-109fdc53b0fd'
                },
                {
                  buildHookId: '61b9c8801c7edfacb78c83ed',
                  title: 'Portfolio Website',
                  name: 'lee-piechowicz-portfolio',
                  apiId: 'd6cbed9b-0cad-4597-abbc-08b29bfc800f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MagneticMule/Lee-Piechowicz-Portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://lee-piechowicz-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
