import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
  coverImg,
  langImgOne,
  langImgTwo,
  title,
  desc,
  link,
  liveDemo,
}) => (
  <section className="project-item">
    <a href={link}><img className="cover-image" src={coverImg} alt={`${title} project thumbnail`} /></a>
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
      <p className="project-desc" title={desc}>{desc}</p>
      {liveDemo !== undefined ? (
        <a className="live-demo" href={liveDemo}>Live Demo</a>
      ) : (
        <br />
      )}
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
  liveDemo: PropTypes.string,
};

Project.defaultProps = {
  langImgTwo: undefined,
  liveDemo: undefined,
};

export default Project;
