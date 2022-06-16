import React from 'react';

const uploadStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-30px',
  right: '-19px',
  width: '30px',
  height: '30px'
};

const arrowStyle: React.CSSProperties = {
  width: '30px',
  height: '30px',
  position: 'absolute',
  bottom: '-5px',
  left: '3px'
};

const HelpIconSyle: React.CSSProperties = {
  width: '30px',
  height: '30px',
  position: 'absolute',
  bottom: '-2px'
};

const MoveIconStyle: React.CSSProperties = {
  width: '30px',
  height: '30px',
  bottom: '0px',
  cursor: 'grab'
};

export const UploadIcon = (): JSX.Element => (
  <i className="icon-upload" style={{ display: 'inline-block', position: 'relative' }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -20 150 50" style={uploadStyle}>
      <path
        style={{
          fill: '#311ac9',
          fillOpacity: 1,
          stroke: 'none'
        }}
        d="M 20.832031 70.351562 L 20.832031 55.765625 C 20.832031 53.464844 18.964844 51.601562 16.667969 51.601562 C 14.367188 51.601562 12.5 53.464844 12.5 55.765625 L 12.5 70.351562 C 12.5 74.953125 16.230469 78.683594 20.832031 78.683594 L 79.167969 78.683594 C 83.769531 78.683594 87.5 74.953125 87.5 70.351562 L 87.5 55.765625 C 87.5 53.464844 85.632812 51.601562 83.332031 51.601562 C 81.035156 51.601562 79.167969 53.464844 79.167969 55.765625 L 79.167969 70.351562 Z M 20.832031 70.351562 "
      />
      <path
        style={{
          stroke: 'none',
          fillRule: 'evenodd',
          fill: '#fff',
          fillOpacity: 1
        }}
        d="M20.832 70.352V55.766a4.166 4.166 0 0 0-8.332 0v14.586a8.332 8.332 0 0 0 8.332 8.332h58.336a8.332 8.332 0 0 0 8.332-8.332V55.766a4.166 4.166 0 0 0-8.332 0v14.586ZM61.277 34.07l-8.332-8.332a4.168 4.168 0 0 0-5.89 0l-8.332 8.332a4.168 4.168 0 0 0 0 5.89 4.161 4.161 0 0 0 5.89 0L50 34.575l5.387 5.387a4.161 4.161 0 0 0 5.89 0 4.168 4.168 0 0 0 0-5.89Zm0 0"
      />
      <path
        style={{
          stroke: 'none',
          fillRule: 'evenodd',
          fill: '#fff',
          fillOpacity: 1
        }}
        d="M45.832 30.766v29.168A4.17 4.17 0 0 0 50 64.102a4.17 4.17 0 0 0 4.168-4.168V30.766c0-2.301-1.867-4.164-4.168-4.164a4.166 4.166 0 0 0-4.168 4.164Zm0 0"
      />
    </svg>
  </i>
);

export const AlertIcon = () => (
  <i
    className="icon-alert"
    aria-label="alert"
    style={{ display: 'inline-block', position: 'relative' }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="30 -15 5 90" width={45} height={45}>
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#311ac9',
          fillOpacity: 1
        }}
        d="m32 6.438-1.75 3L6.25 51l-1.688 3h54.876l-1.688-3-24-41.563Zm0 8L52.5 50h-41ZM30 28v12h4V28Zm0 14v4h4v-4Zm0 0"
      />
    </svg>
  </i>
);

export const RightArrowtIcon = (): JSX.Element => (
  <i
    className="icon-upload"
    style={{ display: 'inline-block', position: 'relative', marginRight: '2rem' }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 -20 40 55" style={arrowStyle}>
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#311ac9',
          fillOpacity: 1
        }}
        d="M13.469 2.047 12.03 3.453 23.351 15l-11.32 11.555 1.438 1.39L26.149 15Zm0 0"
      />
    </svg>
  </i>
);

export const DownArrowIcon = (): JSX.Element => (
  <i
    className="icon-upload"
    style={{ display: 'inline-block', position: 'relative', marginRight: '2rem' }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 -20 40 55" style={arrowStyle}>
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#311ac9',
          fillOpacity: 1
        }}
        d="M3.453 8.031 2.047 9.47 15 22.149l12.945-12.68-1.39-1.438L15 19.351Zm0 0"
      />
    </svg>
  </i>
);
export const HelpIcon = (): JSX.Element => (
  <i
    className="icon-upload"
    aria-label="upload"
    style={{ display: 'inline-block', position: 'relative', marginRight: '2rem' }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 -20 1 55" style={HelpIconSyle}>
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#969797',
          fillOpacity: 1
        }}
        d="M15 2C7.836 2 2 7.836 2 15s5.836 13 13 13 13-5.836 13-13S22.164 2 15 2Zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S4 21.086 4 15 8.914 4 15 4Zm.117 4c-2.422.14-4.398 2.172-4.398 4.64h2c0-1.624 1.406-2.898 3.125-2.6 1.226.21 2.195 1.413 2.156 2.679-.031 1.11-.68 1.812-1.633 2.234-.594.266-1.156.516-1.633 1.016-.476.5-.734 1.242-.734 2.031h2c0-.453.063-.523.188-.656.117-.125.445-.32.984-.563 1.492-.648 2.773-2.078 2.828-4 .07-2.273-1.563-4.328-3.82-4.719A5.463 5.463 0 0 0 15.117 8ZM14 20v2h2v-2Zm0 0"
      />
    </svg>
  </i>
);

export const MoveIcon = (): JSX.Element => (
  <i className="icon-upload" style={{ display: 'inline-block', marginRight: '2rem' }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="60 -15 5 112" style={MoveIconStyle}>
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#cbcbcb',
          fillOpacity: 1
        }}
        d="m32 5.172-9.414 9.414 2.828 2.828L30 12.828V24h4V12.828l4.586 4.586 2.828-2.828ZM14.586 22.586 5.172 32l9.414 9.414 2.828-2.828L12.828 34H26v-4H12.828l4.586-4.586Zm34.828 0-2.828 2.828L51.172 30H38v4h13.172l-4.586 4.586 2.828 2.828L58.828 32ZM30 38v13.172l-4.586-4.586-2.828 2.828L32 58.828l9.414-9.414-2.828-2.828L34 51.172V38Zm0 0"
      />
    </svg>
  </i>
);

export const EditIcon = (): JSX.Element => (
  <i className="icon-upload" style={{ display: 'inline-block', position: 'relative', top: '2px' }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width={16} height={16}>
      <path d="M20.094.25a2.247 2.247 0 0 0-1.625.656l-1 1.031 6.593 6.625 1-1.03a2.32 2.32 0 0 0 0-3.282L21.75.937A2.364 2.364 0 0 0 20.094.25Zm-3.75 2.594-1.563 1.5 6.875 6.875L23.25 9.75ZM13.78 5.438 2.97 16.155a.979.979 0 0 0-.5.625L.156 24.625a.98.98 0 0 0 .242.977.98.98 0 0 0 .977.242l7.844-2.313a.979.979 0 0 0 .781-.656l10.656-10.563-1.468-1.468L8.25 21.813l-4.406 1.28-.938-.937 1.344-4.593L15.094 6.75Zm2.375 2.406-10.968 11 1.593.343.219 1.47 11-10.97Z" />
    </svg>
  </i>
);
