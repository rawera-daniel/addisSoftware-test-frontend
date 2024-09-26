import React from 'react'
import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { addNewSong, getSongsFetch } from '../../reducers/songSlice'

interface IFormInput {
  title: string
  artist: string
  album: string
  genre: string
}

interface CreateSongFormProps {
  onClose: () => void
}

function CreateSongForm({ onClose }: CreateSongFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<IFormInput> = function (data) {
    const newSong = { ...data }
    console.log('FORM', newSong)

    dispatch(addNewSong(newSong))
    onClose()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Title" error={errors?.title?.message?.toString()}>
        <Input
          type="text"
          id="title"
          {...register('title', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label="Artist" error={errors?.artist?.message?.toString()}>
        <Input
          type="text"
          id="artist"
          {...register('artist', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label="Album" error={errors?.album?.message?.toString()}>
        <Input
          type="text"
          id="album"
          {...register('album', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label="Genre" error={errors?.genre?.message?.toString()}>
        <Input
          type="text"
          id="genre"
          {...register('genre', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new song</Button>
      </FormRow>
    </Form>
  )
}

export default CreateSongForm
