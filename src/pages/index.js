import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout.js";
import Meetup from "../components/meetup";
import NoMeetup from "../components/noMeetup";

const IndexPage = ({ data }) => {
  if (data.allMarkdownRemark.edges.length >= 1) {
    return (
      <Layout>
        <div className="pa3 center cf">
          <h1 className="tc">Upcoming Meetups</h1>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Meetup
              key={node.id}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              description={node.frontmatter.description}
              url={node.frontmatter.url}
            />
          ))}
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
};

IndexPage.displayName = "IndexPage";

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            url
            description
          }
        }
      }
    }
  }
`;
