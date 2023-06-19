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
import { useAsyncFn } from '../../hooks/useAsync'  
import { createPost } from '../../Services/Post'
import { Post,postListState } from '../../atoms/postAtom'
import { useRecoilState } from 'recoil'
import { PostForm } from './PostForm'

export const CreatePost = () => {
    const [post, setPost] = useRecoilState<Post[]>(postListState);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {loading,error,execute: createPostFn}= useAsyncFn<Post>(createPost);
    
    const onCreatePost = (description: string) => {
      return createPostFn({description: description}).then((post)=>{
        setPost((oldPost)=>[post,...oldPost]);
      });
    };

  return (
    <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem colSpan={1} m={1}>
             <Avatar size="xs" name=""/>
            </GridItem>
            <GridItem colSpan={4} >
              <Box border={1}>
              <Button justifyContent="left" onClick={onOpen}>Create Post</Button>
              </Box>
            </GridItem>
        </Grid>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <PostForm loading={loading} error={error} onSubmit={onCreatePost}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
