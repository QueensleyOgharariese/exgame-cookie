import React, { useState } from 'react';
import FormLabel from '@mui/joy/FormLabel';
import { Input, Button, Typography, Box, Checkbox, FormHelperText } from '@mui/joy';

export const Signup: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const evaluatePasswordStrength = (password: string) => {
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[@$!%*?&]/.test(password)) score += 1;
    return score;
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setStrength(evaluatePasswordStrength(newPassword));
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const getBarColor = (index: number) => {
    if (strength >= index + 1) {
      return ['#FF4C4C', '#FF8C42', '#FBD83D', '#4CAF50'][index]; // Colori dal rosso al verde
    }
    return '#E0E0E0'; // Colore grigio per barre non riempite
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <Typography level="h2" component="h1" sx={{ mb: 2 }}>
        Sign-up
      </Typography>

      <form>

      {/* Input per inserire il nome */}
        <FormLabel>Nome</FormLabel>
        <Input
          placeholder="Inserisci il tuo nome"
          color="neutral"
          disabled={false}
          size="lg"
          variant="outlined"
          sx={{ mb: 2 }} 
        />


      {/* Input per inserire il cognome */}
        <FormLabel>Cognome</FormLabel>
        <Input
          placeholder="Inserisci il tuo cognome"
          color="neutral"
          disabled={false}
          size="lg"
          variant="outlined"
          sx={{ mb: 2 }} 
        />

      {/* Input per inserire l'email */}
        <FormLabel>Email</FormLabel>
        <Input
          color="neutral"
          disabled={false}
          placeholder="Inserisci l'email"
          size="lg"
          variant="outlined"
          sx={{ mb: 2 }}
        />

      {/* Input per inserire la password */}
        <FormLabel>Password</FormLabel>
        <Input
          type={showPassword ? 'text' : 'password'} // Mostra o nasconde la password
          placeholder="Inserisci la tua password"
          color="neutral"
          size="lg"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
          sx={{ mb: 1 }}
        />
        {/* Barre colorate per l'indicatore di forza */}
        <Box sx={{ display: 'flex', gap: '4px', mb: 0}}>
          {[...Array(4)].map((_, index) => (
            <Box
              key={index}
              sx={{
                height: '10px',
                width: '25%',
                backgroundColor: getBarColor(index),
                borderRadius: '2px'
              }}
            />
          ))}
        </Box>
        <FormHelperText
         sx={{ mb: 2 }}
        >
          La password deve essere lunga almeno 8 caratteri e contenere lettere maiuscole, minuscole, numeri e simboli speciali.

        </FormHelperText>
          <Checkbox
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            label="Mostra password"
            sx={{ mb: 2 }}
          />

      {/* Input per confermare la password */}
        <FormLabel>Conferma password</FormLabel>
        <Input
          type={showConfirmPassword ? 'text' : 'password'} // Mostra o nasconde la conferma della password
          placeholder="Conferma la password"
          color="neutral"
          size="lg"
          variant="outlined"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          sx={{ mb: 2 }}
        />
          <Checkbox
            checked={showConfirmPassword}
            onChange={() => setShowConfirmPassword(!showConfirmPassword)}
            label="Mostra conferma password"
            sx={{ mb: 2 }}
          />



      <Button variant="solid" color="primary" fullWidth >
        Register
      </Button>
      </form>

    </div>
  );
};
