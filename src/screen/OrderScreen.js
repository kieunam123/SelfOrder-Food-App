import React,{useContext, useEffect, useState} from 'react'
import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, DialogTitle, Grid, List, ListItem, TextField, Typography } from '@material-ui/core';
import { useStyles } from '../styles'
import { listCategories, listProducts } from '../actions';
import Logo from '../components/Logo';
import {Alert} from '@material-ui/lab';
import { Store } from '../Store';
import RemoveIcon from '@material-ui/icons/Remove';
import { addToOrder,removeFromOrder,clearOrder } from '../actions';

// import { products } from '../data';

export default function OrderScreen(props) {
    const styles=useStyles();
    const [categoryName, setCategoryName] = useState('');
    const [quantity,setQuantity] = useState(1);
    const [isOpen, setIsOpen] = UseState(false);
    const [product, setProduct] = UseState({});

    const closeHandler = () => {
        setIsOpen(false);
    };

    const productClickHandler = (p) => {
        setProduct(p);
        setIsOpen(true);
    };

    const addToOrderHandler = () => {
        addToOrder(dispatch, {...product, quantity});
        setIsOpen(false);
    };

    const cancelOrRemoveFromOrder = () => {
        removeFromOrder(dispatch, product);
        setIsOpen(false);
    };

    const {state,dispatch}=useContext(Store); 
    const {categories, loading, error} = state.categoryList;
    const{
        products,
        loading: loadingProducts,
        error: errorProducts,
    }  = state.productList;

    const {
        orderItems,
        itemsCount,
        totalPrice,
        taxPrice,
        orderType,
    } = state.order;

    useEffect(()=>{
        if(!categories){
            listCategories(dispatch);
        } else {
            listProducts(dispatch, categoryName);
        }
        },[dispatch, categories, categoryName]);

    const categoryClickHandler = (name) => {
        setCategoryName(name);
        listProducts(dispatch, categoryName); 
    };

    const previewOrderHandler = () => {
        props.history.push(`/review`);
    };

  return (
    <Box className={styles.root}>
        <Diaglog
        maxWidth="sm"
        fullWidth={true}
        open={isOpen}
        onClose={closeHandler}
        >
            <DialogTitle className={styles.center}>
                Add {product.name}
            </DialogTitle>
             <Box className={[styles.row, styles.center]}>
                <Button 
                    variant="contained"
                    color="primary"
                    disabled={quanlity === 1}
                    onClick={(e) => quantity > 1 && setQuantity(quantity - 1)}
                    >
                        <RemoveIcon/>
                    </Button>
                    <TextField
                    inputProps={{className: styles.largeInput}}
                    InputProps={{
                        bar: true,
                        inputProps :{
                            className:styles.largeInput,
                        },
                    }}
                    className={styles.largeNumber}
                    type="number"
                    variant="filled"
                    min={1}
                    value={quantity}
                    />
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={(e)=>setQuantity(quantity + 1)}
                    >
                        <AddIcon/>
                    </Button>
             </Box>
             <Box className={[styles.row, styles.around]}>
                 <Button
                 onClick={cancelOrRemoveFromOrder}
                 variant="contained"
                 color = "primary"
                 size="large"
                 className={styles.largeButton}
                 >
                     {OrderItem.find((x)=>x.name === product.name)
                     ? 'Xoá khỏi giỏ hàng'
                     : 'Huỷ'
                     }
                 </Button>

                 <Button
                 onClick={addToOrderHandler}
                 variant="contained"
                 color="primary"
                 size="large"
                 className={styles.largeButton}
                 >
                     Thêm Vào Giỏ Hàng
                 </Button>

             </Box>
        </Diaglog>
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
                                        onClick={() => productClickHandler(product)}
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
        <Box>
            <Box>
                <Box className={[styles.bordered, styles.space]}>
                    Đơn hàng của bạn : {orderType} | Tax: {taxPrice}VNĐ | Tổng: {totalPrice}VNĐ |
                    Số lượng: {itemsCount}
                </Box>
                <Box className={[styles.row, styles.around]}>
                    <Button
                    onClick={() => {
                        clearOrder(dispatch);
                        props.history.push('/');
                    }}
                    variant="contained"
                    color="primary"
                    className={styles.largeButton}
                    >
                        Huỷ
                    </Button>
                    <Button
                    onClick={previewOrderHandler}
                    variant="contained"
                    color="primary"
                    disabled={orderItems.length === 0}
                    className={styles.largeButton}
                    >
                        Đặt món
                    </Button>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}
