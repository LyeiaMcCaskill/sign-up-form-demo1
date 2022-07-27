import './App.css';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
function App() {
  return (
    <div className="App">
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Alert severity="error">This is an error alert — check it out!</Alert>
<Button variant="text">add</Button>
<Button variant="contained">subtract</Button>
<Button variant="outlined">multiply</Button>
    </div>
  );
}

export default App;
