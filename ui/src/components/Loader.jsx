import { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      )
    }, 800)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Stack spacing={2} direction="row" justifyContent="center">
      <CircularProgress
        variant="determinate"
        color="inherit"
        value={progress}
        size={30}
        sx={{
          color: (theme) => theme.palette.text.main,
          reduceMotion: true,
          display: 'flex',
        }}
      />
    </Stack>
  )
}
