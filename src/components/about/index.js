import React from 'react';
import README from '../../../README.md';
import AboutStyle from './about.less';

const createMarkup = () => {
  return {
    __html: README
  }
}

export default () => {
  return (
    <div id="about" dangerouslySetInnerHTML={createMarkup()} />
  )
}
