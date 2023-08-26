import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './imageList.scss';
// import { useState } from 'react';
import itemData from '../Data/ImageList';

export default function TitlebarBelowImageList() {
  // const [target, setTarget] = useState('');
  const handleClick = (description) => {
    // event.preventDefault();
    // setTarget(event.currentTarget);
    // console.log('target event', event.currentTarget);
    console.log('description', description);
    // console.log(target);
    // showDescription();
  };

  return (
    <div className="Image-List">
      <ImageList sx={{
        width: 500,
        height: 450,
        // display: 'flex',
        // justifyContent: ' center',
      }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={(
                <span>
                  <Stack spacing={2} direction="row" display="flex" justifyContent="center">
                    <Button
                      variant="contained"
                      onClick={() => handleClick(item.description)}
                      style={{ backgroundColor: '#C3C3C3', color: 'black' }}
                    >En savoir plus
                    </Button>
                  </Stack>
                  {/* {item.description} */}
                </span>
)}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
