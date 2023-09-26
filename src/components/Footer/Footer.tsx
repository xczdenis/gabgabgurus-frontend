import { cmpInfo } from '@/config';
import { Box, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { sections } from './sections';
import FooterContainer from '@/components/Footer/FooterContainer';
import { LogoButton } from '@/components/LogoButton';

const Footer: React.FC = () => {
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
              {section.items.map((item) => (
                <Stack alignItems="center" direction="row" key={item.title} spacing={2}>
                  <Box
                    sx={{
                      backgroundColor: 'primary.main',
                      height: 2,
                      width: 12,
                    }}
                  />
                  <Link href={item.path} color="text.primary" variant="subtitle2">
                    {item.title}
                  </Link>
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
