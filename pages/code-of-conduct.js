import React from 'react';
import Shed from 'react-shed';
import ContentLink from 'components/content-link';
import Layout from 'components/layouts/master';

/* eslint-disable max-len */
export default () => (
  <Layout>
    <div.shed
      px="1"
      py="2"
    >
      <h1.shed
        id="welcometodetroitjs"
        f="2"
        fw="700"
        lh="n"
        tt="u"
        ta="c"
        mb="1"
      >
        Welcome to DetroitJS
      </h1.shed>

      <h2.shed
        id="codeofconduct"
        f="2"
        fw="300"
        mb=".8"
      >
        Code of Conduct
      </h2.shed>

      <p.shed mb="1" >
        All delegates, speakers, sponsors and volunteers at any DetroitJS event
        are required to agree with the following code of conduct. Organizers
        will enforce this code throughout the event.
      </p.shed>

      <h3.shed
        mb=".8"
        fw="700"
        tt="u"
        ls="t"
        id="thequickversion"
      >
        The Quick Version
      </h3.shed>

      <p.shed
        mb="1"
      >
        DetroitJS is dedicated to providing a harassment-free experience for
        everyone, regardless of gender, gender identity and expression, age,
        sexual orientation, disability, physical appearance, body size, race,
        ethnicity, religion (or lack thereof), or technology choices. We do not
        tolerate harassment of DetroitJS participants in any form. Sexual
        language and imagery is not appropriate for any DetroitJS venue,
        including talks, workshops, parties, Twitter and other online media.
        DetroitJS participants violating these rules may be sanctioned or
        expelled from the DetroitJS without a refund at the discretion of the
        DetroitJS organizers.
      </p.shed>

      <h3.shed
        mb=".8"
        fw="700"
        tt="u"
        ls="t"
        id="thelessquickversion"
      >
        The Less Quick Version
      </h3.shed>

      <p.shed
        mb="1"
      >
        Harassment includes offensive verbal comments related to gender, gender
        identity and expression, age, sexual orientation, disability, physical
        appearance, body size, race, ethnicity, religion, technology choices,
        sexual images in public spaces, deliberate intimidation, stalking,
        following, harassing photography or recording, sustained disruption of
        talks or other events, inappropriate physical contact, and unwelcome
        sexual attention.
      </p.shed>

      <p.shed
        mb="1"
      >
        Participants asked to stop any harassing behavior are expected to
        comply immediately.
      </p.shed>

      <p.shed
        mb="1"
      >
        Sponsors are also subject to the anti-harassment policy. In particular,
        sponsors should not use sexualized images, activities, or other
        material. Booth staff (including volunteers) should not use sexualized
        clothing/uniforms/costumes, or otherwise create a sexualized
        environment.
      </p.shed>

      <p.shed
        mb="1"
      >
        If a participant engages in harassing behavior, the DetroitJS
        organizers may take any action they deem appropriate, including warning
        the offender or expulsion from the DetroitJS.
      </p.shed>

      <p.shed
        mb="1"
      >
        If you are being harassed, notice that someone else is being harassed,
        or have any other concerns, please contact a member of DetroitJS
        immediately.
      </p.shed>

      <p.shed
        mb="1"
      >
        We expect participants to follow these rules at all DetroitJS meetups
        and DetroitJS-related social endeavors.
      </p.shed>

      <p.shed
        mb="1"
      >
        Organizers: <ContentLink href="https://github.com/seafoam6">seafoam6</ContentLink>, <ContentLink href="https://github.com/sixlive">sixlive</ContentLink>
      </p.shed>
    </div.shed>
  </Layout>
);
/* eslint-enable max-len */
