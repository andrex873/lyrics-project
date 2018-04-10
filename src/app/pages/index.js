import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Index extends Component {

  constructor () {
      super();
      this.state = {
          lyrics: [
              {name: 'we are the champions', state: 'active'},
              {name: 'Yes we are', state: 'inactive'},
              {name: 'How lost a moment', state: 'active'}
          ]
      };
  }

  render() {
    return (
      <section className='section'>
          <div className='container is-fullhd has-text-centered'>
              <h1 className='title'>Lyrics project application</h1>
              <p className='subtitle'>
                  Learn, Play, enjoy completing blank spaces in <strong>lyrics</strong>!
              </p>
              <Link to='/lyrics/create' className='button is-success is-medium'>
                  <span className='icon is-small'><i className='fas fa-music'></i></span>
                  <span>Create new lyrics</span>
              </Link>
          </div>
          <section className='section'>
              <table className='table main-content--lyrics-table'>
                <tbody>
                    <tr>
                      <th>Lyric</th>
                      <th>State</th>
                      <th></th>
                    </tr>
                    {this.state.lyrics.map(this.renderLyricsRow)}
                </tbody>
              </table>
          </section>
      </section>
    );
  }

  renderLyricsRow (lyric, index) {
    const state = {
        active: 'is-primary',
        inactive: 'is-danger'
    };

    return (
        <tr key={index}>
            <td>{lyric.name}</td>
            <td><span className={'tag ' + state[lyric.state]}>{lyric.state}</span></td>
            <td>
                <a className='button is-success is-outlined is-small' disabled={lyric.state === 'inactive'}>
                    <span className='icon is-small'><i className='fas fa-trophy'></i></span>
                    <span>Let's play</span>
                </a>
            </td>
        </tr>
    );
  }
}

export default Index;
