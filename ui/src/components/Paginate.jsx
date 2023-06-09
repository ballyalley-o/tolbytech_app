/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Pagination, PaginationItem, Stack } from '@mui/material'

export default function Paginate({
  pages,
  page,
  root,
  adminRoot,
  keyword = '',
  isAdmin = false,
}) {
  return (
    pages > 1 && (
      <Stack spacing={2}>
        <Pagination
          page={page}
          count={pages}
          shape="rounded"
          renderItem={(x) => (
            <PaginationItem
              component={Link}
              to={
                !isAdmin
                  ? keyword
                    ? `/${root}/search/${keyword}/${x.page === 1 ? '' : x.page}`
                    : `/${root}/${x.page === 1 ? '' : `${x.page}`}`
                  : `/admin/${adminRoot}/${x.page}`
              }
              {...x}
              active={x + 1 === page}
            />
          )}
        ></Pagination>
      </Stack>
    )
  )
}

Paginate.propTypes = {
  pages: PropTypes.number,
  page: PropTypes.number,
  isAdmin: PropTypes.bool,
  root: PropTypes.string,
  adminRoot: PropTypes.string,
  keyword: PropTypes.string,
}
