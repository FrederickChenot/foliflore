import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Stack from '@mui/joy/Stack';
import Autocomplete from '@mui/joy/Autocomplete';
import itemData from '../Data/ImageList';

export default function FreeSolo() {
  return (
    <Stack
      spacing={2}
      sx={{
        width: 400,
        padding: 1,
        display: 'flex',
        justifyContent: 'center',
      }}

    >
      <FormControl id="free-solo-demo">
        <FormLabel />
        <Autocomplete
          freeSolo
          placeholder="Barre de Recherche"
          options={itemData.map((option) => option.title)}
        />
      </FormControl>
    </Stack>
  );
}
