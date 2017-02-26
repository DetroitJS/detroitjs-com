import React from 'react';
import Shed from 'react-shed';
import Layout from 'components/layouts/master';
import Meetups from 'components/meetups';

export default () => (
  <Layout>
    <div.shed
      bg="yellow"
      py="2"
      px="1"
    >
      <h2.shed
        c="black"
        f="3"
        mb="2"
        ta="c"
      >
        Upcoming Meetups
      </h2.shed>
      <div.shed>
        <Meetups />
      </div.shed>
    </div.shed>
  </Layout>
);
