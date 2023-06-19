import React from 'react'
import { Button, Flex, FormLabel, Text, Textarea,Spinner } from '@chakra-ui/react'

type CommmentFormProp ={
    loading: boolean,
    error: any,
    autoFocus?:boolean
    onSubmit:(message: string) => Promise<void>,
    initialValue?:string
}

export const PostForm = ({loading,error,autoFocus=false,onSubmit,initialValue=""}: CommmentFormProp) => {

    const [message, setMessage] = React.useState(initialValue);

    const handlesubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(message);
        onSubmit(message).then(()=>setMessage(""));
    }

  return (
    <form onSubmit={handlesubmit}>
            <FormLabel>Post Title</FormLabel>
            <input type="text" />
            <Textarea my={2} autoFocus={autoFocus} placeholder="Text(requird)" onChange={(e)=>setMessage(e.target.value)}/>
            <Button type="submit">Post</Button>
            <Button type="submit" mt={2} disabled={loading}>{
            loading?<Spinner/>:"Post"
        }</Button>
    </form>
  )
}
