import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
  coverImg,
  langImg,
  title,
  desc,
  link,
}) => (
  <section className="project-item">
    <a href={link}><img className="cover-image" src={coverImg} alt="thumbnail" /></a>
    <section className="project-info">
      <img className="lang-image" src={langImg} alt="language" />
      <a className="project-title" href={link}><h3>{title}</h3></a>
      <p className="project-desc">{desc}</p>
    </section>
  </section>
);

Project.propTypes = {
  coverImg: PropTypes.string.isRequired,
  langImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Project;
