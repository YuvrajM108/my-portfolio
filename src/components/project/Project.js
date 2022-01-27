import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
  coverImg,
  title,
  desc,
  link,
}) => (
  <section className="project-item">
    <a href={link}><img className="cover-image" src={coverImg} alt="thumbnail" /></a>
    <a className="project-title" href={link}><h3>{title}</h3></a>
    <p>{desc}</p>
  </section>
);

Project.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Project;
