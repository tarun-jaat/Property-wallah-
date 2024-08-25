import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageStack() {
  // Media queries for responsiveness
  const isXs = useMediaQuery('(max-width:600px)');
  const isSm = useMediaQuery('(min-width:600px) and (max-width:960px)');
  const isMd = useMediaQuery('(min-width:960px) and (max-width:1280px)');
  const isLg = useMediaQuery('(min-width:1280px)');

  let cols = 4;
  let rowHeight = 121;

  if (isXs) {
    cols = 2;
    rowHeight = 100;
  } else if (isSm) {
    cols = 3;
    rowHeight = 110;
  } else if (isMd) {
    cols = 4;
    rowHeight = 120;
  } else if (isLg) {
    cols = 5;
    rowHeight = 130;
  }

  return (
    <ImageList
      sx={{ width: '100%' }}
      variant="quilted"
      cols={cols}
      rowHeight={rowHeight}
      style={{margin:"0"}}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 131, item.rows, item.cols)}
            alt={item.title}
            style={{ objectFit: 'cover' }} // Ensures images fit the container
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://newprojects.99acres.com/projects/sheth_corp_mumbai/sheth_zuri/images/7xfctve4_large.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 3,
  },
  {
    img: 'https://newprojects.99acres.com/projects/sheth_corp_mumbai/sheth_zuri/images/br75nm91_optOrig.jpg',
    title: 'Burger',
    cols: 1,
    rows: 1,
  },
  {
    img: 'https://newprojects.99acres.com/projects/sheth_corp_mumbai/sheth_zuri/images/dvax0mi0_large.jpg',
    title: 'Camera',
    cols: 1,
    rows: 1,
  },
];
