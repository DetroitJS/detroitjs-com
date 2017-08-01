import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import shortid from 'shortid'

const BOOK = '📖'
const GAME = '👾'
const TUTORIAL_ON_WEB = '☁️'
const TUTORIAL_INSTALL_REQUIRED = '💻'
const CODE_KATA = '🥋'

const legendItems = [
  { term: BOOK, description: 'Book' },
  { term: GAME, description: 'Game' },
  { term: TUTORIAL_ON_WEB, description: 'Interactive tutorial (on the web)' },
  { term: TUTORIAL_INSTALL_REQUIRED, description: 'Interactive tutorial (installation required)' },
  { term: CODE_KATA, description: 'Code Katas (coding practice)' }
]

const learningLinks = [
  { name: 'Codecademy', link: 'https://www.codecademy.com/learn/learn-javascript', symbol: TUTORIAL_ON_WEB },
  { name: 'Free Code Camp', link: 'https://www.freecodecamp.com', symbol: TUTORIAL_ON_WEB },
  { name: 'Khan Academy', link: 'https://www.khanacademy.org/computing/computer-programming', symbol: TUTORIAL_ON_WEB },
  { name: 'JavaScript for Cats', link: 'http://jsforcats.com/', symbol: BOOK },
  { name: 'Eloquent JavaScript', link: 'http://eloquentjavascript.net/', symbol: BOOK },
  { name: 'Code Combat', link: 'https://codecombat.com/', symbol: GAME },
  { name: 'Node School', link: 'https://nodeschool.io/', symbol: TUTORIAL_INSTALL_REQUIRED },
  { name: 'Code Wars', link: 'https://www.codewars.com', symbol: CODE_KATA },
  { name: 'exercism.io', link: 'http://exercism.io', symbol: CODE_KATA },
  { name: 'cyber-dojo.org', link: 'http://cyber-dojo.org', symbol: CODE_KATA }
]

const LegendItem = ({ item }) => (
  <dl className="f6 lh-title mv2 mr2">
    <dt className="dib b">{item.term} :&nbsp;</dt>
    <dd className="dib ml0 gray">{item.description}</dd>
  </dl>
)

const LearningLink = ({ link }) => (
  <li>
    {link.symbol} <a className="link mid-gray dim" href={link.link}>{link.name}</a>
  </li>
)

const Learning = () => (
  <Layout>
    <div className="ph3">
      <div className="measure lh-copy center">

        <h1>Learning JavaScript Resources</h1>
        <h4 className="f6 fw6">Legend</h4>
        {legendItems.map((item) => (
          <LegendItem key={shortid.generate()} item={item} />
        ))}

        <h2 id="beginner">Beginner</h2>
        <ul className="list pl0">
        {learningLinks.map((link) => (
          <LearningLink key={shortid.generate()} link={link} />
        ))}
        </ul>

      </div>
    </div>
  </Layout>
)

LegendItem.propTypes = {
  item: PropTypes.shape({
    term: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
}

LearningLink.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired
  })
}

export default Learning
