import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
  coverImg,
  title,
  desc,
}) => (
  <section className="project-item">
    <img className="cover-image" src={coverImg} alt="thumbnail" />
    <h3>{title}</h3>
    <p>{desc}</p>
  </section>
);

Project.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Project;
