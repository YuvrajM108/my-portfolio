import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
  coverImg,
  langImgOne,
  langImgTwo,
  title,
  desc,
  link,
}) => (
  <section className="project-item">
    <a href={link}><img className="cover-image" src={coverImg} alt="thumbnail" /></a>
    <section className="project-info">
      {langImgTwo !== undefined ? (
        <section className="lang-images">
          <img className="lang-image" src={langImgOne} alt="language1" />
          <img className="lang-image" src={langImgTwo} alt="language2" />
        </section>
      ) : (
        <img className="lang-image" src={langImgOne} alt="language" />
      )}
      <a className="project-title" href={link}><h3>{title}</h3></a>
      <p className="project-desc">{desc}</p>
    </section>
  </section>
);

Project.propTypes = {
  coverImg: PropTypes.string.isRequired,
  langImgOne: PropTypes.string.isRequired,
  langImgTwo: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

Project.defaultProps = {
  langImgTwo: undefined
};

export default Project;
