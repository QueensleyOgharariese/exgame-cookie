import React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import { Input, Button, Typography } from '@mui/joy';

export const Login: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <Typography level="h2" component="h1" sx={{ mb: 2 }}>
        Login
      </Typography>
      
      {/* Input per inserire il email */}


    <FormControl>
      <FormLabel>Email</FormLabel>
      <Input
       placeholder="Inserisci il tuo nome"
       color="neutral"
       disabled={false}
       size="lg"
       variant="outlined"
       sx={{ mb: 2 }} 
       />
    </FormControl>

      {/* Input per inserisci la password */}

      <FormControl>
      <FormLabel>password</FormLabel>
      <Input
       placeholder="Inserisci la tua password"
       color="neutral"
       disabled={false}
       size="lg"
       variant="outlined"
       sx={{ mb: 2 }} 
       />
      </FormControl>

        <Button variant="solid" color="primary" fullWidth>
          Login
      </Button>
    </div>
  );
};
