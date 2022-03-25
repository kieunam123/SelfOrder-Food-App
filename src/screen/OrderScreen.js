import React,{useContext, useEffect} from 'react'
import { Avatar, Box, CircularProgress, Grid, List, ListItem } from '@material-ui/core';
import { useStyles } from '../styles'
import { listCategories } from '../actions';
import Logo from '../components/Logo';
import {Alert} from '@material-ui/lab';
import { Store } from '../Store'

export default function OrderScreen() {
    const styles=useStyles();
    const {state,dispatch}=useContext(Store); 
    const {categories, loading, error} = state.categoryList;  
    useEffect(()=>{listCategories(dispatch);},[dispatch]);
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
                                <ListItem>
                                    <Logo>

                                    </Logo>
                                </ListItem>
                                
                                {categories.map((category) => (
                                    <ListItem key={category.name}>
                                      <Avatar alt = {category.name} src={category.image}/>
                                    </ListItem>
                                ))}
                            </>
                            
                            )}
                      
                    </List>
                </Grid>
                <Grid item md={10}>
                    Danh sách món
                </Grid>
            </Grid>
        </Box>

    </Box>
  )
}
