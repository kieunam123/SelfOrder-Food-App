import { Box, Card, CardActionArea, Typography } from '@material-ui/core'
import React from 'react'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import { useStyles } from '../styles'

export default function HomeScreen() {
    const styles = useStyles();
  return (
    <Card>
        <CardActionArea>
            <Box className={[styles.root, styles.red]}>
                <Box>
                    <Typography component="h6" variant="h6">
                        Nhanh chóng & Tiện lợi
                    </Typography>
                    <Typography component={"h1"} variant="h1">
                        Đặt món <br/> & Thanh toán <br/> Tại quầy
                    </Typography>
                    <TouchAppIcon fontSize='large'> </TouchAppIcon>
                </Box>
                <Box>
                    <logo large></logo>
                    <Typography component={"h5"} variant="h5">
                        Chạm để bắt đầu
                    </Typography>
                </Box>
            </Box>
        </CardActionArea>
    </Card>
  )
}
