import React,{useContext, useEffect, useState} from 'react'
import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, List, ListItem, Typography } from '@material-ui/core';
import { useStyles } from '../styles'
import { listCategories, listProducts } from '../actions';
import Logo from '../components/Logo';
import {Alert} from '@material-ui/lab';
import { Store } from '../Store'
// import { products } from '../data';

export default function OrderScreen() {
    const styles=useStyles();
    const {state,dispatch}=useContext(Store); 
    const {categories, loading, error} = state.categoryList;
    const{
        products,
        loading: loadingProducts,
        error: errorProducts,
    }  = state.productList;
    const [categoryName, setCategoryName] = useState('');

    useEffect(()=>{
        if(!categories){
            listCategories(dispatch);
        } else {
            listProducts(dispatch, categoryName);
        }
        },[categories, categoryName]);

    const categoryClickHandler = (name) => {
        setCategoryName(name);
        listProducts(dispatch, categoryName); 
    };

  return (
    <Box className={styles.root}>
        <Box className={styles.main}>
            <Grid Container>
                <Grid item md={2}>
                    <List>
                        {loading ? (
                            <CircularProgress/>
                            ): error ? (
                            <Alert severity="error">{error}</Alert>
                            ): 
                            (
                            <>
                                <ListItem button onClick={()=>categoryClickHandler('')}>
                                    <Logo></Logo>
                                </ListItem>
                                {categories.map((category) => (
                                    <ListItem 
                                        key={category.name}
                                        button onClick={()=>categoryClickHandler(category.name)}
                                    >
                                      <Avatar alt = {category.name} src={category.image}/>
                                    </ListItem>
                                ))}
                            </>
                            )}
                    </List>
                </Grid>
                <Grid item md={10}>
                    <Typography
                        gutterBottom
                        className={styles.title}
                        variant="h2"
                        component="h2"
                    >
                        {categoryName || "Main Menu"}
                    </Typography>
                    <Grid container spacing={1}>
                    {loadingProducts ? (
                            <CircularProgress/>
                        ): errorProducts ? (
                            <Alert severity="error">{errorProducts}</Alert>
                        ):(
                            products.map((product)=>(
                                <Grid item md={6}>
                                    <Card
                                        className={styles.card}
                                        >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt={product.name}
                                                image={product.image}
                                                className={styles.media}
                                                />
                                        
                                        <CardContent>
                                            <Typography
                                            gutterBottom
                                            variant="body2"
                                            color="textPrimary"
                                            component="p"
                                            >
                                                {product.name}
                                            </Typography>
                                            <Box className={styles.cardFooter}> 
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                    component="p"
                                                >
                                                    Khuyến mãi: {product.khuyenmai}  
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textPrimary"
                                                    component="p"
                                                >
                                                    Giá: {product.price}VNĐ
                                                </Typography>
                                                </Box>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )) 
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Box>

    </Box>
  )
}
