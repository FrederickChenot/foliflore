import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import './caroussel.scss';
import itemData from '../Data/ImageList';

export default function ListStackRatio() {
  return (
    <div className="caroussel">
      <Card variant="outlined" sx={{ width: 400, p: 0 }}>
        <List sx={{ py: 'var(--ListDivider-gap)' }} className="caroussel-listItem">
          {itemData.map((item, index) => (
            <React.Fragment key={item.title}>
              <ListItem>
                <ListItemButton sx={{ gap: 2 }}>
                  <AspectRatio sx={{ flexBasis: 2000 }}>
                    <img
                      srcSet={`${item.img}?w=120&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=120&fit=crop&auto=format`}
                      alt={item.title}
                    />
                  </AspectRatio>
                  <ListItemContent>
                    <Typography fontWeight="md">{item.title}</Typography>
                    <Typography level="body-sm">{item.description}</Typography>
                  </ListItemContent>
                </ListItemButton>
              </ListItem>
              {index !== itemData.length - 1 && <ListDivider />}
            </React.Fragment>
          ))}
        </List>
      </Card>
    </div>
  );
}
