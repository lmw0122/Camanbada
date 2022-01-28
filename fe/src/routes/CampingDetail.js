import BasicTabs from "../components/BasicTabs";
import NavBar from "../components/NavBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function CampingDetail () {

  return (
    <div>
      <NavBar></NavBar>
      <BasicTabs></BasicTabs>
    </div>
  )
}