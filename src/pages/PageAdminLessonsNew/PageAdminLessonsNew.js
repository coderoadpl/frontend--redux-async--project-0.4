import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'

export const PageAdminLessonsNew = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      PageAdminLessonsNew
    </Box>
  )
}

PageAdminLessonsNew.propTypes = {
  sx: PropTypes.object
}

export default PageAdminLessonsNew
