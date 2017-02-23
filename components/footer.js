import Link from 'next/link'

export default () => (
<footer className="footer">
  <div className="container">
    <div className="content has-text-centered">
      <p>
        <Link href="/code-of-conduct"><a>Code of Conduct</a></Link>
      </p>
      <p>
        <a href="https://github.com/detroitjs">
          <img src="/static/github.svg" style={{margin: '1em'}} />
        </a>
        <a href="https://twitter.com/detroit_js">
          <img src="/static/twitter.svg" style={{maxHeight: '32px', height: 'auto', margin: '1em'}}/>
        </a>
      </p>
    </div>
  </div>
</footer>
)
