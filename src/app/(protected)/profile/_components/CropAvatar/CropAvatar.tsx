'use client';

import { useRef, useState } from 'react';
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, Stack, SvgIcon, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import CreditCard01 from '@/lib/icons/untitled-ui/duocolor/CreditCard01';
import 'cropperjs/dist/cropper.css';
import { Cropper } from 'react-cropper';
import { MdAccountCircle } from 'react-icons/md';
import CropperJs from 'cropperjs';

interface IExtendedImageElement extends HTMLImageElement {
  cropper?: CropperJs;
}

const CropAvatar: React.FC = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const cropperRef = useRef<IExtendedImageElement>(null);

  const rotateImage = (degree: number): void => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    if (cropper) {
      cropper.rotate(degree);
    }
  };

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(files[0]);
      setOpenDialog(true);
    }
    e.target.value = '';
  };

  const cropImage = (): void => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    if (cropper?.getCroppedCanvas()) {
      setCroppedImage(cropper.getCroppedCanvas().toDataURL());
      setOpenDialog(false);
    }
  };

  return (
    <>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogContent>
          <Cropper src={String(imageSrc)} ref={cropperRef} aspectRatio={1} viewMode={1} dragMode="move" />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => rotateImage(90)}>
            Rotate Right
          </Button>
          <Button color="primary" onClick={() => rotateImage(-90)}>
            Rotate Left
          </Button>
          <Button color="primary" onClick={cropImage}>
            Crop
          </Button>
          <Button color="secondary" onClick={() => setOpenDialog(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Stack alignItems="center" direction="row" spacing={2}>
        <Box
          sx={{
            borderColor: 'neutral.300',
            borderRadius: '50%',
            borderStyle: 'dashed',
            borderWidth: 1,
            p: '4px',
          }}
        >
          <Box
            sx={{
              borderRadius: '50%',
              height: '100%',
              width: '100%',
              position: 'relative',
            }}
          >
            <input type="file" accept="image/*" style={{ display: 'none' }} id="avatarInput" onChange={onSelectFile} />
            <label htmlFor="avatarInput">
              <Box
                sx={{
                  alignItems: 'center',
                  backgroundColor: (theme) => alpha(theme.palette.neutral[700], 0.5),
                  borderRadius: '50%',
                  color: 'common.white',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '100%',
                  justifyContent: 'center',
                  left: 0,
                  opacity: 0,
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                  zIndex: 1,
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
                <Stack alignItems="center" direction="row" spacing={1}>
                  <SvgIcon color="inherit">
                    <CreditCard01 />
                  </SvgIcon>
                  <Typography color="inherit" variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Select
                  </Typography>
                </Stack>
              </Box>
            </label>
            <Avatar
              src={croppedImage || 'avatar'}
              sx={{
                height: 100,
                width: 100,
              }}
            >
              <SvgIcon>
                <MdAccountCircle />
              </SvgIcon>
            </Avatar>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default CropAvatar;
