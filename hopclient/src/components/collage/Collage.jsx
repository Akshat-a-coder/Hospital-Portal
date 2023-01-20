import React from 'react'

import './Collage.css';
import  data  from './data.js'

const Collage = () => (
  <div class='grid'>
    <div>
      {data.grids.map((grids) => (
        <img src={grids.pic1} onmouseover='hover()' />
      ))}
      <div className='head'>Alpha</div>
    </div>
    <div class='horizontal'>
      {data.grids.map((grids) => (
        <img src={grids.pic2} onmouseover='hover()' />
      ))}
      <div className='head'>Beta</div>
    </div>
    <div>
      {data.grids.map((grids) => (
        <img src={grids.pic3} onmouseover='hover()' />
      ))}
      <div className='head'>Gamma</div>
    </div>
    <div>
      {data.grids.map((grids) => (
        <img src={grids.pic4} onmouseover='hover()' />
      ))}
      <div className='head'>Theta</div>
    </div>
    <div class='horizontal'>
      {data.grids.map((grids) => (
        <img src={grids.pic5} onmouseover='hover()' />
      ))}
      <div className='head'>Terra</div>
    </div>
    <div class='horizontal'>
      {data.grids.map((grids) => (
        <img src={grids.pic6} onmouseover='hover()' />
      ))}
      <div className='head'>Phi</div>
    </div>
    <div>
      {data.grids.map((grids) => (
        <img src={grids.pic7} onmouseover='hover()' />
      ))}
      <div className='head'>Florida</div>
    </div>
    <div class='horizontal'>
      {data.grids.map((grids) => (
        <img src={grids.pic8} onmouseover='hover()' />
      ))}
      <div className='head'>Omega</div>
    </div>
    <div>
      {data.grids.map((grids) => (
        <img src={grids.pic9} onmouseover='hover()' />
      ))}
      <div className='head'>Delta</div>
    </div>
    <div class='horizontal'>
      {data.grids.map((grids) => (
        <img src={grids.pic10} onmouseover='hover()' />
      ))}
      <div className='head'>Charlie</div>
    </div>
    <div class='horizontal'>
      {data.grids.map((grids) => (
        <img src={grids.pic11} onmouseover='hover()' />
      ))}
      <div className='head'>Sierra</div>
    </div>
    <div>
      {data.grids.map((grids) => (
        <img src={grids.pic12} onmouseover='hover()' />
      ))}
      <div className='head'>Psi</div>
    </div>
  </div>
)

export default Collage;