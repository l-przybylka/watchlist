import Button from '@mui/material/Button';

function App() {
  return (
    <>
    <Button 
    variant="contained" 
    color='success' 
    onClick={()=>console.log('button clicked')} >
      Hello World
    </Button>
    </>
  )
}
export default App;
