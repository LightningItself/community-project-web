import { Avatar, Box, Button, FormLabel, Grid, GridItem } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure
  } from '@chakra-ui/react'

export const CreatePost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem colSpan={2} >
             <Avatar name=""/>
            </GridItem>
            <GridItem colSpan={3} >
            <Button onClick={onOpen}>Create Post</Button>
            </GridItem>
        </Grid>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <form >
            <FormLabel>Post Title</FormLabel>
            <input type="text" />
            <Textarea my={2} placeholder="Text(requird)" />
            <Button type="submit">Post</Button>
           </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
