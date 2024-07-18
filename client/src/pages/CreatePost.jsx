import { Button, FileInput, Select, TextInput } from 'flowbite-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React from 'react'

const CreatePost = () => {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center my-7 text-3xl font-semibold'>
        Create a Post
      </h1>
     <form className='flex flex-col gap-4'>
<div className='flex flex-col gap-4 sm:flex-row justify-between'>
<TextInput type='text' placeholder='title' required id='title' className='flex-1'></TextInput>
<Select>
  <option value='uncatagorized'> Select a catagory</option>
  <option value='JavaScript'>JavaScript</option>
  <option value='React'>React</option>
  <option value='Next.js'>Next.js</option>
  <option value='Node.js'>Node.js</option>
</Select>
</div>
<div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
  <FileInput type = 'file' accept='image/*'/>
  <Button type='button' gradientDuoTone='purpleToBlue'size='sm' outline>Upload Image </Button>
</div>
<ReactQuill theme='snow'placeholder='write somethings......'className='h-72 mb-12'></ReactQuill>
<Button type='submit' gradientDuoTone='purpleToPink'>Publish</Button>
     </form>
    </div>
  )
}

export default CreatePost