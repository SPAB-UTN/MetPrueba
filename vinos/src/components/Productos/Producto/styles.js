import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    height: '100%',
    position: 'relative',
  },
  media: {
    height: 0,
    paddingTop: '70%', // 16:9
    backgroundSize: 'contain',
    backgorundPosition: 'center center',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  IconButton: {
    color: '#fff',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#76353B',
    textAlign: 'center',
  },
    
}));

