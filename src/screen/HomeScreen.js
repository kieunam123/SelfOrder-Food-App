import { Box, Card, CardActionArea, Typography } from '@material-ui/core';
import React from 'react';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
import {useNavigate} from 'react-router-dom'                                
import { Replay } from '@material-ui/icons';

export default function HomeScreen() {
    const styles = useStyles();
    const navigate = useNavigate();
    // const confirm = () =>{navigate.push('/choose')}
  return (
    <Card>
        <CardActionArea onClick={()=>navigate('/choose') }>
            <Box className={[styles.root, styles.red]}>
                <Box className={[styles.main, styles.center]}>
                    <Typography component="h6" variant="h6">
                        Nhanh chóng & Tiện lợi
                    </Typography>
                    <Typography component="h1" variant="h1" className={styles.bold}>
                        Đặt món <br/> & Thanh toán <br/> Tại quầy
                    </Typography>
                    <TouchAppIcon fontSize="large"> </TouchAppIcon>
                </Box>
                <Box className={[styles.center, styles.green]}>
                    <Logo large/>
                    <Typography component="h5" variant="h5">
                        Chạm để bắt đầu
                    </Typography>
                </Box>
            </Box>
        </CardActionArea>
    </Card>
  );
}
