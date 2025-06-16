import * as React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// import our unit data from the json file created by google sheets
// the path is relative from this file
import unit_data from '../../../unit_list.json'
import weapon_data from '../../../weapon_stats.json'

function parseIdList (idList) {
  return (idList || "").split(",").map(x => x.trim());
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Factions = () => {
  return (
    <div>
      <h1>Factions</h1>
      {
        ...unit_data.map(f => makeFactionAccordian(f))
      }
    </div>
  )
}

function makeFactionAccordian(unit) {
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{unit.Unit}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {unit.Ability}
          </Typography>
          <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 8 }}>
            <Item>Strength: 4</Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item>Dexterity: 4</Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item>Sex Appeal: 10</Item>
          </Grid>
          <Grid size={{ xs: 6, md: 8 }}>
            <Item>Magic: 3</Item>
          </Grid>
        </Grid>
        </AccordionDetails>
      </Accordion>
  )
}

export default Factions
