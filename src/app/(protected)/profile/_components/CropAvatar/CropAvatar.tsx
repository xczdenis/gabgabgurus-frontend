'use client';

import { useIam } from '@/lib/hooks/swr/use-iam';
import { useAuth } from '@/lib/hooks/use-auth';
import { showToastError } from '@/lib/utils/show-toast-error';
import { showToastSuccess } from '@/lib/utils/show-toast-success';
import { userService } from '@/modules/services';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import CropperJs from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import { useRef, useState } from 'react';
import { Cropper } from 'react-cropper';
import { AiOutlineRotateLeft, AiOutlineRotateRight } from 'react-icons/ai';
import { BsSave } from 'react-icons/bs';
import { FcCancel } from 'react-icons/fc';
import { HiOutlineCamera } from 'react-icons/hi';
import { HiOutlinePhoto } from 'react-icons/hi2';
import { RiDeleteBin2Fill } from 'react-icons/ri';

interface IExtendedImageElement extends HTMLImageElement {
  cropper?: CropperJs;
}

const CropAvatar = () => {
  const { user } = useAuth();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cropperRef = useRef<IExtendedImageElement>(null);
  const { revalidate } = useIam();

  const saveAvatar = () => {
    setIsSubmitting(true);
    if (croppedImage) {
      const formData = new FormData();
      formData.append('avatar', croppedImage);

      userService
        .updateAvatar(formData)
        .then(() => {
          setIsSubmitting(false);
          revalidate().then(() => showToastSuccess());
        })
        .catch((error) => {
          showToastError(error.message);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      setIsSubmitting(false);
    }
  };

  const deleteAvatar = () => {
    setIsSubmitting(true);
    userService
      .deleteAvatar()
      .then(() => {
        setIsSubmitting(false);
        setCroppedImage(null);
        revalidate().then(() => showToastSuccess());
      })
      .catch((error) => {
        showToastError(error.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
      setCroppedImage(cropper.getCroppedCanvas().toDataURL('image/jpeg'));
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
          <Button color="secondary" onClick={() => setOpenDialog(false)} startIcon={<FcCancel />}>
            Cancel
          </Button>
          <IconButton color="primary" onClick={() => rotateImage(-90)}>
            <AiOutlineRotateLeft />
          </IconButton>
          <IconButton color="primary" onClick={() => rotateImage(90)}>
            <AiOutlineRotateRight />
          </IconButton>
          <Button color="success" onClick={cropImage} startIcon={<HiOutlineCamera />} variant="contained">
            Crop
          </Button>
        </DialogActions>
      </Dialog>

      <Stack alignItems="center" direction="row">
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
                    <HiOutlinePhoto />
                  </SvgIcon>
                  <Typography color="inherit" variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Select
                  </Typography>
                </Stack>
              </Box>
            </label>
            <Avatar
              src={croppedImage || user?.avatar}
              sx={{
                height: 100,
                width: 100,
              }}
            />
          </Box>
        </Box>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button startIcon={<BsSave />} variant="contained" onClick={saveAvatar} disabled={isSubmitting}>
          Save avatar
        </Button>
        <Tooltip title="Delete avatar">
          <IconButton onClick={deleteAvatar} disabled={isSubmitting}>
            <RiDeleteBin2Fill />
          </IconButton>
        </Tooltip>
      </Stack>
    </>
  );
};

export default CropAvatar;
