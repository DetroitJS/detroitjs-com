import React from 'react'

const NoMeetup = () => {
  return (
    <article className="w-100 w-100-ns pa2 pa3-ns">
      <div className="bt bw2 b-solid" style={{ borderColor: '#f7d71e' }}>
        <h2 className="f2 tc">No Meetups Currently Scheduled</h2>
        <div style={{ background: '#f7df1e' }}>
          <div className="center measure lh-copy pa3 meetup-content">
            😭 Sorry! We don't have anything scheduled at the moment. Please
            join our group over at{' '}
            <a href="https://www.meetup.com/Detroit-Javascript/">Meetup</a>. if
            you'd like to be notified when the next meetup happens. We are
            always looking for people to give talks. If you're interested in
            giving a talk, send us an email over at talks@detroitjs.com.
          </div>
        </div>
      </div>
      <style jsx global>{`
        .meetup-content a {
          color: black;
        }
      `}</style>
    </article>
  )
}

export default NoMeetup
