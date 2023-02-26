import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
  FormErrorIcon,
} from '@chakra-ui/react';
import { email, name, tel } from '../../utils/patterns/patterns';
import styled from '@emotion/styled';

const FormBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1vw;
  width: 100;
`;

const ContactDrawnerForm = ({ register, errors, isSubmitting }) => {
  return (
    <FormBox>
      <FormControl isInvalid={errors.firstName}>
        <FormLabel>Nombre</FormLabel>
        <Input
          type="text"
          {...register('firstName', {
            required: 'Campo Obligatório',
            pattern: { value: name, message: 'Ingrese un nombre válido' },
          })}
          variant="filled"
        />
        <FormErrorMessage>
          {errors.firstName && (
            <>
              <FormErrorIcon />
              <span>{errors.firstName.message}</span>
            </>
          )}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.lastName}>
        <FormLabel>Apellido</FormLabel>
        <Input
          type="text"
          {...register('lastName', {
            pattern: {
              value: name,
              message: 'Ingrese un nombre válido',
            },
          })}
          variant="filled"
        />
        <FormErrorMessage>
          {errors.lastName && (
            <>
              <FormErrorIcon />
              <span>{errors.lastName.message}</span>
            </>
          )}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          {...register('email', {
            required: 'Campo Obligatório',
            pattern: {
              value: email,
              message: 'Ingrese un email válido',
            },
          })}
          variant="filled"
        />
        <FormErrorMessage>
          {errors.email && (
            <>
              <FormErrorIcon />
              <span>{errors.email.message}</span>
            </>
          )}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.telefono}>
        <FormLabel>Telefono</FormLabel>
        <InputGroup>
          <InputLeftAddon> +54 </InputLeftAddon>
          <Input
            type="tel"
            {...register('telefono', {
              pattern: {
                value: tel,
                message: 'Ingrese un numero válido',
              },
            })}
            variant="filled"
          />
        </InputGroup>
        <FormErrorMessage>
          {errors.telefono && (
            <>
              <FormErrorIcon />
              <span>{errors.telefono.message}</span>
            </>
          )}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.mensaje}>
        <Textarea
          placeholder="Dejanos un mensaje!"
          variant="filled"
          {...register('mensaje', { required: 'Campo obligatório' })}
        />
        <FormErrorMessage>
          {errors.mensaje && (
            <>
              <FormErrorIcon />
              <span>{errors.mensaje.message}</span>
            </>
          )}
        </FormErrorMessage>
      </FormControl>
    </FormBox>
  );
};

export default ContactDrawnerForm;
