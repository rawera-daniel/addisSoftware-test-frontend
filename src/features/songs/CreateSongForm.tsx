import React from 'react'
import { useDispatch } from 'react-redux'
import { SubmitHandler, useForm } from 'react-hook-form'

import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import { addNewSong, updateSong } from '../../reducers/songSlice'
import { closeModal } from '../../reducers/modelSlice'
import { Song } from '../../types/songType'

type IFormInput = {
  title: string
  artist: string
  album: string
  genre: string
}

type SongEditorProps = {
  songToEdit?: Song
  modalMode?: 'edit' | 'create'
}

function CreateSongForm({ modalMode, songToEdit }: SongEditorProps) {
  const dispatch = useDispatch()

  const editId = songToEdit?._id
  const editValues = { ...songToEdit }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: modalMode === 'edit' ? editValues : {},
  })

  function handleClose() {
    return dispatch(closeModal())
  }

  const onSubmit: SubmitHandler<IFormInput> = function (data) {
    if (modalMode === 'edit') {
      dispatch(updateSong({ ...data }))
    } else {
      dispatch(addNewSong({ ...data }))
      handleClose()
    }
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
        <Button>
          {modalMode === 'edit' ? 'Edit song' : 'Create new song'}
        </Button>
      </FormRow>
    </Form>
  )
}

export default CreateSongForm
