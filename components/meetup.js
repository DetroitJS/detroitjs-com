import React from 'react';
import Shed from 'react-shed';

export default props => (
  <div>
    <h3.shed
      f="2"
      mb="1"
    >
      {props.title}
    </h3.shed>
    <span dangerouslySetInnerHTML={{ __html: props.description }} />
  </div>
);
