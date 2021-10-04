import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },

  title: {
    margin: 0,
    lineHeight: 1.15,
    fontSSize: '2rem',
  },
})
