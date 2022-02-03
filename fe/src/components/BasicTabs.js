import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const theme = createTheme();

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py:0, mt: 12, mb: 8}} maxWidth="md">
          <Container 
            sx={{ py:0, mt: 2, mb: 0, display: 'flex', flexDirection: 'row'}}
            maxWidth="sm"
          >
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  // pt: '56.25%',
                  pt: '0%',
                }}
                // width='30vw'
                // height='45vw'
                image="https://images.unsplash.com/photo-1641157141085-8454fbc33f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MzExNTc1NQ&ixlib=rb-1.2.1&q=80&w=1080"
                alt="CampingImage"
              />
            </Card>
          </Container>
          <Container>
            <Typography
              sx={{
                // pt: 5,
              }}
              component="h1"
              variant="h6"
              align="center"
              color="text.primary"
              gutterBottom
            >
              좋아요: @@
            </Typography>
          </Container>
          <Container>
            <Typography
              sx={{
                // pt: 5,
              }}
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              캠핑장 이름
            </Typography>
          </Container>

          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="캠핑장 소개" {...a11yProps(0)} />
                <Tab label="위치" {...a11yProps(1)} />
                <Tab label="주변 시설" {...a11yProps(2)} />
                <Tab label="후기" {...a11yProps(3)} />
                
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              캠핑장 소개 내용
            </TabPanel>
            <TabPanel value={value} index={1}>
              위치 내용
            </TabPanel>
            <TabPanel value={value} index={2}>
              주변 시설 내용
            </TabPanel>
            <TabPanel value={value} index={3}>
              후기 내용
            </TabPanel>
          </Box>

        </Container>
      </main>
    </ThemeProvider>

  );
}
