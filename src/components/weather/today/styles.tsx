import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  container: {
    width: '50%',
    height: '100%',
    minHeight: '80%',
    margin: '0.25rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayInfo: {
    height: '70%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayParts: {
    height: '30%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})
