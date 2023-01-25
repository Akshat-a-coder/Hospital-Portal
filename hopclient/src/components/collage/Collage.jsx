import React from 'react'

import './Collage.css';
import  data  from './data.js'

const Collage = () => (
  <div className='collage--grid'>
    <div>
      {data.grids.map((grids) => (
        <img src={grids.pic1} onmouseover='hover()' />
      ))}
      <div className='collage--head'>Alpha</div>
    </div>
    <div class='horizontal'>
      {data.grids.map((grids) => (
        <img src={grids.pic2} onmouseover='hover()' />
      ))}
      <div className='collage--head'>Beta</div>
    </div>
    <div>
      {data.grids.map((grids) => (
        <img src={grids.pic3} onmouseover='hover()' />
      ))}
      <div className='collage--head'>Gamma</div>
    </div>
    <div>
      {data.grids.map((grids) => (
        <img src={grids.pic4} onmouseover='hover()' />
      ))}
      <div className='collage--head'>Theta</div>
    </div>
    <div class='horizontal'>
      {data.grids.map((grids) => (
        <img src={grids.pic5} onmouseover='hover()' />
      ))}
      <div className='collage--head'>Terra</div>
    </div>
    <div class='horizontal'>
      {data.grids.map((grids) => (
        <img src={grids.pic6} onmouseover='hover()' />
      ))}
      <div className='collage--head'>Phi</div>
    </div>
    <div>
      {data.grids.map((grids) => (
        <img src={grids.pic7} onmouseover='hover()' />
      ))}
      <div className='collage--head'>Florida</div>
    </div>
    <div class='horizontal'>
      {data.grids.map((grids) => (
        <img src={grids.pic8} onmouseover='hover()' />
      ))}
      <div className='collage--head'>Omega</div>
    </div>
    <div>
      {data.grids.map((grids) => (
        <img src={grids.pic9} onmouseover='hover()' />
      ))}
      <div className='collage--head'>Delta</div>
    </div>
    <div class='horizontal'>
      {data.grids.map((grids) => (
        <img src={grids.pic10} onmouseover='hover()' />
      ))}
      <div className='collage--head'>Charlie</div>
    </div>
    <div class='horizontal'>
      {data.grids.map((grids) => (
        <img src={grids.pic11} onmouseover='hover()' />
      ))}
      <div className='collage--head'>Sierra</div>
    </div>
    <div>
      {data.grids.map((grids) => (
        <img src={grids.pic12} onmouseover='hover()' />
      ))}
      <div className='collage--head'>Psi</div>
    </div>
  </div>
)

export default Collage;