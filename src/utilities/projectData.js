import neighborhood1 from '../images/neighborhood1.png'
import neighborhood2 from '../images/neighborhood2.png'
import pokemon1 from '../images/pokemon1.png'
import pokemon2 from '../images/pokemon2.png'
import movie1 from '../images/movie1.png'
import movie2 from '../images/movie3.png'

const projects = [
  {
    img: [neighborhood1, neighborhood2],
    github: 'https://github.com/dmiller1623/Neighborhood-Kickstarter', 
    description: 'NeighborHub is an application where users volunteer their help on neighborhood projects.Whether it be fixing an old bench in your neighborhood or painting an elderly neighbors fence, NeighborHub allows neighbors to come together to better their community. A user has the ability to create a project of their own, set the resources needed for the project, and allow other neighbors to write comments on a project with help and/or services they may be able to provide.',
    techStack: ['React', 'React Router']
  },

  {
    img: [movie1, movie2],
    github: 'https://github.com/dmiller1623/movie-tracker',
    description: 'Movie Tracker is an app that allows the user to sign in, create an account, and favorite or unfavorite a movie. The app was built in React and created with collaborators Laura Whitaker, and Benjamin Paige.',
    techStack: ['React', 'Redux']
  },

  {
    img: [pokemon1, pokemon2],
    github: 'https://github.com/dmiller1623/byob-frontend'
    description: 'An app built to allow a user to check out stats of each Pokemon and build their ultimate team. The user can scroll through to find which Pokemon they want to be on their team, they can create a new trainer along with deleting teams and their profile. All data is stored on the backend',
    techStack: ['React', 'Node.js']
  }
]

export default projects