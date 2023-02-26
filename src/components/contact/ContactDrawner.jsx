import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import ContactDrawnerForm from './ContactDrawnerForm';
import { useForm } from 'react-hook-form';

const ContactDrawner = ({ isOpen, onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
              isSubmitting={isSubmitting}
              errors={errors}
              register={register}
            />
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
