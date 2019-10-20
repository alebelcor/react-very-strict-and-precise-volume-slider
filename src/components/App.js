/** @jsx jsx */
import { Fragment, useState } from 'react';
import { jsx } from '@emotion/core';

import {
  headerStyle,
  headingStyle,
  mainStyle,
  formStyle,
  gridContainerStyle,
  statusStyle,
  labelStyle,
  inputStyle,
  errorStyle,
} from '../styles/App.css';

const App = () => {
  const [volume, setVolume] = useState(0);
  const [isErrorDisplayed, setIsErrorDisplayed] = useState(false);

  const handleChange = e => {
    const parsedFloat = Number.parseFloat(e.target.value);

    if (isErrorDisplayed) {
      setIsErrorDisplayed(false);
    }

    setVolume(parsedFloat);
  }

  const handleMouseUp = () => {
    if (Number.isInteger(volume)) {
      setIsErrorDisplayed(false);
      return;
    }

    setIsErrorDisplayed(true);
    setVolume(0);
  }

  return (
    <Fragment>
      <header css={headerStyle}>
        <h1 css={headingStyle}>A Very Strict and Precise Volume Slider</h1>
      </header>

      <main css={mainStyle}>
        <form css={formStyle} onSubmit={e => e.preventDefault()}>
          <div css={gridContainerStyle}>
            <div role="status" aria-live="polite" css={statusStyle}>
              Current volume: <strong>{volume}%</strong>
            </div>

            <label htmlFor="volume" css={labelStyle}>
              Volume:
            </label>

            <input
              type="range"
              min="0"
              max="100.1"
              step="0.000001"
              value={volume}
              css={inputStyle}
              onChange={handleChange}
              onMouseUp={handleMouseUp}
            />

            {isErrorDisplayed ? (
              <div id="volume-description" role="alert" css={errorStyle}>
                Value must be a whole number.
            </div>
            ) : (
              <div id="volume-description" css={errorStyle}></div>
            )}
          </div>
        </form>
      </main>
    </Fragment>
  );
}

export default App;
