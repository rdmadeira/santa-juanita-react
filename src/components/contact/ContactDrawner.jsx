import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  CircularProgress,
  CircularProgressLabel,
  useToast,
  Center,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import ContactDrawnerForm from './ContactDrawnerForm';
import { useForm } from 'react-hook-form';
import { setContactDocument } from '../../firebase/firebase_utils';

const ContactDrawner = ({ isOpen, onClose }) => {
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState,
    formState: { errors, dirtyFields, isSubmitting },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      telefono: '',
      mensaje: '',
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      toast({
        title: 'Mensaje enviada con suceso!',
        status: 'success',
        description:
          'Gracias por dejarnos su mensaje. Contestaremos en las próximas 48 horas',
        position: 'top',
        isClosable: true,
        duration: 4000,
      });
      reset();
    }

    if (formState.isSubmitted && !formState.isSubmitSuccessful) {
      toast({
        title: 'Hubo un error inesperado!',
        status: 'error',
        description:
          'Servidor de mensajes no pudo grabar su mensaje. Probá más tarde.',
        position: 'top',
        isClosable: true,
        duration: 3000,
      });
    }
  }, [reset, formState]);

  const onSubmit = async (data) => {
    await setContactDocument(data);
  };
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
      <DrawerOverlay />
      <DrawerContent bg="#faf7f9e3">
        <DrawerCloseButton />
        <DrawerHeader color="var(--twolight-lavender)">
          Dejanos su mensaje!
        </DrawerHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DrawerBody>
            <ContactDrawnerForm
              onClose={onClose}
              dirtyFields={dirtyFields}
              errors={errors}
              register={register}
            />
            {isSubmitting && (
              <Center
                bg="#00000070"
                sx={{
                  height: '100%',
                  width: '100%',
                  top: '0',
                  left: 0,
                  position: 'absolute',
                }}>
                <CircularProgress
                  isIndeterminate
                  position="absolute"
                  size="28"
                  color="var(--twilight-lavender)"
                  trackColor="thistle">
                  <CircularProgressLabel fontSize="md">
                    Sending
                  </CircularProgressLabel>
                </CircularProgress>
              </Center>
            )}
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose} type="button">
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit">
              Save
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default ContactDrawner;
