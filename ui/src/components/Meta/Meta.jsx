/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  )
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
}

Meta.defaultProps = {
  title: 'Tolby Technologies',
  description: `Unlock the future with cutting-edge
    technology at our premier tech emporium. Immerse yourself in a world of
    innovation as you explore our vast selection of state-of-the-art Technologies,
    top-of-the-line electronics, and revolutionary smart devices. From the
    latest smartphones to immersive virtual reality experiences, we have
    everything you need to stay ahead in the digital age. Browse now and embrace
    the limitless possibilities of tomorrow.`,
  keywords:
    'electronics, electronics,  technologies, gadgets, kicks, tolby, advance,',
}

export default Meta
