import React from 'react';

const PageLoader = () => {
  
  return (
    <div id="preloader">
      <div className="container-preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span preloader-text="G" className="characters">G</span>
            <span preloader-text="R" className="characters">R</span>
            <span preloader-text="A" className="characters">A</span>
            <span preloader-text="D" className="characters">D</span>
            <span preloader-text="E" className="characters">E</span>
            <span preloader-text="S" className="characters">S</span>
            <span preloader-text="U" className="characters">U</span>
            <span preloader-text="P" className="characters">P</span>
            <span preloader-text="®" className="characters r">®</span>
          </div>
          <div className="txt-loading lower-text">
    <span preloader-text="G" className="characters">G</span>
    <span preloader-text="e" className="characters">e</span>
    <span preloader-text="t" className="characters">t</span>
    <span preloader-text=" " className="characters"> </span>
    <span preloader-text="R" className="characters">R</span>
    <span preloader-text="e" className="characters">e</span>
    <span preloader-text="a" className="characters">a</span>
    <span preloader-text="d" className="characters">d</span>
    <span preloader-text="y" className="characters">y</span>
    <span preloader-text=" " className="characters"> </span>
    <span preloader-text="F" className="characters">F</span>
    <span preloader-text="o" className="characters">o</span>
    <span preloader-text="r" className="characters">r</span>
    <span preloader-text=" " className="characters"> </span>
    <span preloader-text="5" className="characters">5</span>
    <span preloader-text="5" className="characters">5</span>
    <span preloader-text="%" className="characters">%</span>
    <span preloader-text=" " className="characters"> </span>
    <span preloader-text="D" className="characters">D</span>
    <span preloader-text="i" className="characters">i</span>
    <span preloader-text="s" className="characters">s</span>
    <span preloader-text="c" className="characters">c</span>
    <span preloader-text="o" className="characters">o</span>
    <span preloader-text="u" className="characters">u</span>
    <span preloader-text="n" className="characters">n</span>
    <span preloader-text="t" className="characters">t</span>
    <span preloader-text=" " className="characters"> </span>
    <span preloader-text="!" className="characters">!</span>
</div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </div>
  );
};

export default PageLoader;
