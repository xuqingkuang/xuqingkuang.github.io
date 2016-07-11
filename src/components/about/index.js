import React from 'react';
import README from '../../../README.md';
import './about.less';

const createMarkup = () => {
  return {
    __html: README
  }
}

const About = () => {
  return (
    <div id="about" dangerouslySetInnerHTML={createMarkup()} />
  )
}

export default About;
