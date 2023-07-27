import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';



function Page () {

  const response = fetch("http://localhost:7000/menu", {
    method: 'POST', 
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
       
    })
}).then(res => res.json()).then(data => {
                       
  const Page = () => (
    <>
      <Head>
        <title>
          Menu
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {data.map((product) => (
                <Grid
                  item
                  key={product.id}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          >
            { <Pagination
              color="primary"
              count={3}
              size="small"
            /> }
          </Box>
        </Container>
      </Box>
    </>
  );   
  })




}




Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
