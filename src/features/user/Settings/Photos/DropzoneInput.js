import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Typography } from '@mui/material';

function DropzoneInput({ setFiles }) {
    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }, [setFiles])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false, accept: 'image/*' })

    return (
        <div {...getRootProps()} className={'dropzone ' + (isDragActive && 'dropzone--isActive')}>
            <input {...getInputProps()} />
            <FileUploadIcon fontSize='large' />
            <Typography variant='body1' sx={{ fontWeight: 600 }}>Drop Image Here</Typography>
        </div>
    )
}
export default DropzoneInput;