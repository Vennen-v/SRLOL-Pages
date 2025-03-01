import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MicIcon from "@mui/icons-material/Mic";

function EventPage() {
  return (
    <Container sx={{ height: "100%" }}>
      <Stack
        direction="column"
        useFlexGap={true}
        spacing={{ lg: 1, md: 1, sm: 7, xs: 0 }}
        sx={{ marginY: 7 }}
      >
        {/* First Flex Box */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
            gap: { lg: 8, md: 10, sm: 7, xs: 5 },
            padding: { sm: 0, xs: 0 },
            marginX: { lg: 0, md: 0, sm: 0, xs: "auto" },
          }}
        >
          <Card
            raised={true}
            sx={{
              height: { lg: "24rem", md: "21rem", sm: "20rem", xs: "12rem" },
              width: { lg: "43rem", md: "40rem", sm: "43rem", xs: "22.5rem" },
              marginBottom: 3,
            }}
          >
            <CardMedia
              component="img"
              // height="400"
              sx={{
                height: { lg: "24rem", md: "21rem", sm: "20rem", xs: "12rem" },
                width: { lg: "43rem", md: "40rem", sm: "43rem", xs: "22.5rem" },
              }}
              image="https://www.iheartraves.com/cdn/shop/articles/share.jpg?v=1724192722&width=1200"
            />
          </Card>

          <Box
            sx={{
              marginX: { lg: 4, sm: 0, xs: 0 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Card
              raised={true}
              sx={{
                borderRadius: { lg: "25px", md: "25px", sm: "25px", xs: 0 },
                width: { xs: "100%" },
              }}
            >
              <CardContent
                sx={{
                  display: {
                    lg: "block",
                    md: "block",
                    sm: "block",
                    xs: "none",
                  },
                }}
              >
                <Typography
                  align="center"
                  gutterBottom={true}
                  sx={{ display: "flex", gap: 3, padding: 1 }}
                >
                  <PlaceIcon color="primary" />
                  Mulberry Mountain
                </Typography>

                <Typography
                  align="center"
                  gutterBottom={true}
                  sx={{ display: "flex", gap: 3, padding: 1 }}
                >
                  <AttachMoneyIcon color="info" />
                  10.00
                </Typography>
                <Typography
                  align="center"
                  gutterBottom={true}
                  sx={{ display: "flex", gap: 3, padding: 1 }}
                >
                  <MicIcon color="error" />
                  Open Mic
                </Typography>
              </CardContent>
            </Card>
            <Card
              raised={true}
              sx={{
                height: { lg: "210px", sm: "250px" },
                width: { lg: "210px", xs: "230px" },
                display: { lg: "block", md: "block", sm: "block", xs: "none" },
              }}
            >
              <CardMedia
                component="img"
                // height="210"
                // width="100"
                sx={{ height: "210px", width: { lg: "210px", xs: "230px" } }}
                image="https://media.istockphoto.com/id/2181757105/vector/qr-code-scan-vector-abstract-barcode-icon-for-mobile-isolated-on-white-background-encoded.jpg?s=2048x2048&w=is&k=20&c=fxOl12i9jbUIewWLvWzm8NwkAYa54gjGrIFjwl5w0ec="
              />
            </Card>
          </Box>
        </Box>

        {/* Second Flex Box */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginX: { lg: 0, md: 0, sm: 0, xs: "auto" },
          }}
        >
          <Typography
            align="center"
            gutterBottom={true}
            sx={{
              fontWeight: "bold",
              textAlign: "left",
              display: { lg: "block", md: "block", sm: "block", xs: "none" },
            }}
          >
            {/* <AccessTimeIcon /> */}
            9/26/2024 12:00pm
          </Typography>
          <Typography
            // variant="h2"
            noWrap={false}
            sx={{
              fontWeight: "bold",
              width: { lg: "43rem", md: "40rem", sm: "43rem", xs: "20rem" },
              fontSize: { lg: "3.7em", xs: "3em" },
              lineHeight: { xs: 1.2 },
              textAlign: { lg: "left", md: "left", sm: "left", xs: "center" },
            }}
          >
            Wakaan Music Festival
          </Typography>
          <Typography
            align="center"
            gutterBottom={true}
            sx={{
              marginTop: 3,
              fontWeight: "bold",
              textAlign: "left",
              display: { lg: "none", md: "none", sm: "none", xs: "block" },
            }}
          >
            {/* <AccessTimeIcon /> */}
            9/26/2024 12:00pm
          </Typography>
          <Card
            sx={{
              borderRadius: { lg: "25px", md: "25px", sm: "25px", xs: 0 },
              width: { xs: "100%" },
              marginY: 2,
            }}
          >
            <CardContent
              sx={{
                display: {
                  lg: "none",
                  md: "none",
                  sm: "none",
                  xs: "block",
                },
              }}
            >
              <Typography
                align="center"
                gutterBottom={true}
                sx={{ display: "flex", gap: 3, padding: 1 }}
              >
                <PlaceIcon color="primary" />
                Mulberry Mountain
              </Typography>

              <Typography
                align="center"
                gutterBottom={true}
                sx={{ display: "flex", gap: 3, padding: 1 }}
              >
                <AttachMoneyIcon color="info" />
                10.00
              </Typography>
              <Typography
                align="center"
                gutterBottom={true}
                sx={{ display: "flex", gap: 3, padding: 1 }}
              >
                <MicIcon color="error" />
                Open Mic
              </Typography>
            </CardContent>
          </Card>
          <Typography
            noWrap={false}
            sx={{
              width: { lg: "43rem", md: "40rem", sm: "43rem", xs: "20rem" },
              marginTop: 2,
            }}
          >
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vel finibus
            gravida, fermentum netus lacinia class lectus. Cubilia ante
            hendrerit per aliquet scelerisque sollicitudin. Risus nisi tincidunt
            semper tempor commodo aliquam elementum. Senectus sit id tempor
            himenaeos, euismod dapibus integer. Vestibulum primis congue porta
            hac arcu morbi commodo. Platea orci ligula turpis dapibus urna
            fermentum. Cubilia aenean vivamus orci sodales pulvinar pellentesque
            ullamcorper. Volutpat tortor platea pretium quis himenaeos mauris
            pharetra risus. Orci himenaeos ac vestibulum faucibus vestibulum mi
            etiam.
          </Typography>
          <Card
            raised={true}
            sx={{
              height: { lg: "210px", sm: "250px" },
              width: { lg: "210px", xs: "230px" },
              display: { lg: "none", md: "none", sm: "none" },
              alignContent: "center",
              margin: "auto",
              marginTop: 5,
            }}
          >
            <CardMedia
              component="img"
              // height="210"
              // width="100"
              sx={{ height: "210px", width: { lg: "210px", xs: "230px" } }}
              image="https://media.istockphoto.com/id/2181757105/vector/qr-code-scan-vector-abstract-barcode-icon-for-mobile-isolated-on-white-background-encoded.jpg?s=2048x2048&w=is&k=20&c=fxOl12i9jbUIewWLvWzm8NwkAYa54gjGrIFjwl5w0ec="
            />
          </Card>
        </Box>
      </Stack>
    </Container>
  );
}

export default EventPage;
