import ProjectCard from '../components/projectCard'

const projects = [
  {
    title: 'ORE Planet',
    description:
      'A space themed game demonstrating the capabilities of the ORE ID solution through opening packs and claiming, trading and selling cards.',
    link: 'https://demo.oreid.io/',
    images: ['projects/oreplanet01.png', './projects/oreplanet02.png', './projects/oreplanet03.png'],
    tags: ['Dev Team', 'Design Team', 'Project Manager']
  },
  {
    title: 'NFT Draft',
    description:
      'An NFT Fantasy Sports NFL game that allows players to create the best Rosters to compete in multiplayer tournaments.',
    link: 'https://play.nftdraft.io/',
    images: ['projects/nftdraft01.png', './projects/nftdraft02.png', './projects/nftdraft03.png'],
    tags: ['Dev Team', 'Design Team', 'Project Manager']
  },
  {
    title: 'Pinmaster',
    description:
      'An NFT Fantasy Sports Bowling game in which players can train and equip their bowlers to compete in tournament matches.',
    link: 'https://wax.atomichub.io/explorer/collection/wax-mainnet/pinmasterio1',
    images: ['projects/pinmaster01.png', './projects/pinmaster02.png', './projects/pinmaster03.png'],
    tags: ['Dev Team', 'Design', 'Project Manager']
  },
  {
    title: 'Dark Pinup',
    description:
      'An NFT collection campaign and sales page created to showcase the amazing photography work of Lars Kommienezuspadt.',
    link: 'https://darkpinup.com/',
    images: ['projects/darkpinup01.png', './projects/darkpinup02.png', './projects/darkpinup03.png'],
    tags: ['Dev Team', 'Design']
  },
  {
    title: 'DLT Blog',
    description:
      'Detroit Ledger Technology website Blog section including posts CRM configuration, i18n integration and translation.',
    link: 'https://detroitledger.tech/blog',
    images: ['projects/dltblog01.png', './projects/dltblog02.png', './projects/dltblog03.png'],
    tags: ['Dev Team', 'CRM', 'Translation']
  }
]

function Projects() {
  return <>{projects.map((project, index) => ProjectCard(project, index))}</>
}

export default Projects
