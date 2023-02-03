import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Project = ({
  coverImg,
  langImgOne,
  langImgTwo,
  langOneTitle,
  langTwoTitle,
  title,
  desc,
  link,
  liveDemo,
  previewGif,
}) => {
  const [previewed, setPreviewed] = useState(false);

  const handleHover = (input) => {
    setPreviewed(input);
  };

  return (
    <section className="project-item">
      {previewGif !== undefined ? (
        <a href={link}><img className="cover-image" src={previewed ? previewGif : coverImg} alt={`${title} project thumbnail`} /></a>
      ) : (
        <a href={link}><img className="cover-image" src={coverImg} alt={`${title} project thumbnail`} /></a>
      )}
      <section className="project-info">
        {langImgTwo !== undefined ? (
          <section className="lang-images">
            <img title={langOneTitle} className="lang-image" src={langImgOne} alt="language1" />
            <img title={langTwoTitle} className="lang-image" src={langImgTwo} alt="language2" />
          </section>
        ) : (
          <img title={langOneTitle} className="lang-image" src={langImgOne} alt="language" />
        )}
        <a className="project-title" href={link}><h3>{title}</h3></a>
        <p className="project-desc" title={desc}>{desc}</p>
        {liveDemo !== undefined ? (
          <a className="live-demo" href={liveDemo} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>Live Demo</a>
        ) : (
          <br />
        )}
      </section>
    </section>
  );
};

Project.propTypes = {
  coverImg: PropTypes.string.isRequired,
  langImgOne: PropTypes.string.isRequired,
  langImgTwo: PropTypes.string,
  langOneTitle: PropTypes.string.isRequired,
  langTwoTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  liveDemo: PropTypes.string,
  previewGif: PropTypes.string,
};

Project.defaultProps = {
  langImgTwo: undefined,
  langTwoTitle: undefined,
  liveDemo: undefined,
  previewGif: undefined,
};

export default Project;
