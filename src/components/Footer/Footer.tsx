import { LogoButton } from '@/components/LogoButton';
import { cmpInfo } from '@/config';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import { FooterContainer } from './FooterContainer';
import { FooterItem } from './FooterItem';
import { sections } from './sections';

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          sx={{
            order: {
              xs: 4,
              md: 1,
            },
          }}
        >
          <Stack spacing={1}>
            <LogoButton />
            <Typography color="text.secondary" variant="caption">
              © {new Date().getFullYear()} {cmpInfo.name}
            </Typography>
          </Stack>
        </Grid>
        {sections.map((section, index) => (
          <Grid
            key={section.title}
            item
            xs={12}
            sm={4}
            md={3}
            sx={{
              order: {
                md: index + 2,
                xs: index + 1,
              },
            }}
          >
            <Typography color="text.secondary" variant="overline">
              {section.title}
            </Typography>
            <Stack
              component="div"
              spacing={1}
              sx={{
                m: 0,
                p: 0,
              }}
            >
              {section.items &&
                section.items.map((item) => (
                  <Stack alignItems="center" direction="row" key={item.title} spacing={2}>
                    <Box
                      sx={{
                        backgroundColor: 'primary.main',
                        height: 2,
                        width: 12,
                      }}
                    />
                    <FooterItem item={item} />
                  </Stack>
                ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: 6 }} />
      <Typography color="text.secondary" variant="caption">
        All Rights Reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
