import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='w-full max-w-xl pb-36 rounded-sm gap-3'>
    <div>
        <h2 className="faq-title">FAQ</h2>
    </div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            <p className='font-bold '>¿Cómo resumo artículos con OvraAI?</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sólo tienes que pegar el enlace del artículo, esperar y dejar que OvraAI resuma el artículo por ti.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            <p className='font-bold'>¿Necesito una cuenta para utilizar OvraAI?</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            En absoluto, no necesita iniciar sesión ni crear una cuenta para utilizar las funciones de OvraAI.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            <p className='font-bold'>¿Cuánto se tarda en generar un resumen?</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            El tiempo varía en función de la longitud del artículo, pero suele tardar unos instantes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            <p className='font-bold '>¿Cuántos artículos puedo resumir?</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Puede resumir tantos artículos como desee, hasta que se agoten las solicitudes disponibles.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}