
  if (this.props.data.allMarkdownRemark.edges.length >= 1) {
    return (
      <Layout>
        <div className="pa3 center cf">
          <h1 className="tc">Upcoming Meetups</h1>
          <Meetups meetups={this.state.meetups} />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pa3 center cf">
        <NoMeetup />
      </div>
    </Layout>
  );