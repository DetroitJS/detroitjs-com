import React from 'react'
import Layout from '../components/layout'

const Learning = () => (
<Layout>
  <div className="ph3">
    <div className="measure lh-copy center">
      <h1>Learning JavaScript Resources</h1>
        <h4 className="f6 fw6">Legend</h4>
        <dl className="f6 lh-title mv2 mr2">
          <dt className="dib b">📖 :</dt>
          <dd className="dib ml0 gray">Book</dd>
        </dl>
        <dl className="f6 lh-title mv2 mr2">
          <dt className="dib b">👾 :</dt>
          <dd className="dib ml0 gray">Game</dd>
        </dl>
        <dl className="f6 lh-title mv2 mr2">
          <dt className="dib b">☁️ :</dt>
          <dd className="dib ml0 gray">Interactive tutorial (on the web)</dd>
        </dl>
      <dl className="f6 lh-title mv2 mr2">
        <dt className="dib b">💻 :</dt>
        <dd className="dib ml0 gray">Interactive tutorial (installation required)</dd>
      </dl>
      <dl className="f6 lh-title mv2 mr2">
        <dt className="dib b">🥋 :</dt>
        <dd className="dib ml0 gray">Code Katas (coding practice)</dd>
      </dl>
      <h2 id="beginner">Beginner</h2>
      <li>
        <a className="link mid-gray dim " href="https://www.codecademy.com/learn/learn-javascript">Codecademy</a> ☁️
      </li>
      <li>
        <a className="link mid-gray dim " href="https://www.freecodecamp.com">Free Code Camp</a> ☁️
      </li>
      <li>
        <a className="link mid-gray dim " href="https://www.khanacademy.org/computing/computer-programming">Khan Academy</a> ☁️
      </li>
      <li>
        <a className="link mid-gray dim " href="http://jsforcats.com/">JavaScript for Cats</a> 📖
      </li>
      <li>
        <a className="link mid-gray dim " href="http://eloquentjavascript.net/">Eloquent JavaScript</a> 📖
      </li>
      <li>
        <a className="link mid-gray dim " href="https://codecombat.com/">Code Combat</a> 👾
      </li>
      <li>
        <a className="link mid-gray dim " href="https://nodeschool.io/">Node School</a> 💻
      </li>
      <li>
        <a className="link mid-gray dim " href="https://www.codewars.com">Code Wars</a> 🥋
      </li>
      <li>
        <a className="link mid-gray dim " href="http://exercism.io">exercism.io</a> 🥋
      </li>
    </div>
  </div>
</Layout>
)

export default Learning
