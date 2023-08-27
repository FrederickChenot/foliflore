import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './imageList.scss'; // Assurez-vous d'importer votre fichier SCSS ici
import itemData from '../Data/ImageList';

function TitlebarBelowImageList() {
  return (
    <div className="Image-List">
      <ImageList className="image-list-container">
        {itemData.map((item) => (
          <ImageListItem key={item.img} className="custom-image-list-item">
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              className="custom-image"
            />
            <ImageListItemBar
              position="below"
              subtitle={(
                <span>
                  <Stack spacing={2} direction="column" justifyContent="center" />
                  <Accordion className="custom-accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="accordion-summary"
                    >
                      <Typography><strong>{item.title}</strong></Typography>
                    </AccordionSummary>
                    <AccordionDetails className="accordion-details">
                      <Typography>
                        {item.description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </span>
              )}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default TitlebarBelowImageList;
