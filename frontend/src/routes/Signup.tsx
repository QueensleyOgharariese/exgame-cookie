import React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import { Input, Button, Typography } from '@mui/joy';

export const Signup: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <Typography level="h2" component="h1" sx={{ mb: 2 }}>
        Sign-up
      </Typography>
      
      {/* Input per inserire il nome */}


    <FormControl>
      <FormLabel>Nome</FormLabel>
      <Input
       placeholder="Inserisci il tuo nome"
       color="neutral"
       disabled={false}
       size="lg"
       variant="outlined"n
       sx={{ mb: 2 }} 
       />
    </FormControl>

      {/* Input per inserire il cognome */}

      <FormControl>
      <FormLabel>Cognome</FormLabel>
      <Input
       placeholder="Inserisci il tuo cognome"
       color="neutral"
       disabled={false}
       size="lg"
       variant="outlined"
       sx={{ mb: 2 }} 
       />
    </FormControl>
      {/* Input per inserire l'email*/}

      <FormControl>
      <FormLabel>Email</FormLabel>
      <Input
        color="neutral"
        disabled={false}
        placeholder="Inserisci l'email"
        size="lg"
        variant="outlined"
        sx={{ mb: 2 }}
      />
       </FormControl>

      {/* Input per inserire la password*/}
      <FormControl>
      <FormLabel>Password</FormLabel>
      <Input
       placeholder="Inserisci la tua password"
       color="neutral"
       disabled={false}
       size="lg"
       variant="outlined"
       sx={{ mb: 2 }} 
       />
    </FormControl>
    <FormControl>
      <FormLabel>Conferma password</FormLabel>
     {/* Input per la conferma della password*/}
            <Input
        color="neutral"
        type="password"
        placeholder=" Conferma la password"
        size="lg"
        variant="outlined"
        sx={{ mb: 2 }}
      />
      </FormControl>

      <Button variant="solid" color="primary" fullWidth>
        Register
      </Button>
    </div>
  );
};
