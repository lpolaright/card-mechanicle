import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import RevealedCard from '../../components/RevealedCard';

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
    <RevealedCard
      image="http://digitalspyuk.cdnds.net/17/02/1280x640/landscape-1483963591-12699754-low-res-sherlock.jpg"
      description="deducts all minions on board"
      type="detective"
      attack={7}
      defense={6}
      />
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
