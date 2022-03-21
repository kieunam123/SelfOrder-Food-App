import { Box, Typography,Fade, Card, CardActionArea, CardMedia } from '@material-ui/core'
import React from 'react'
import Logo from '../components/Logo'
import { useStyles } from '../styles'

export default function ChooseScreen() {
    const styles = useStyles();
  return (
    <Fade in={true}>
        <Box className={[styles.root, styles.navy]}>
            <Box className={[styles.main, styles.center]}>
                <Logo large></Logo>
                <Typography variant='h3' component={'h3'}
                className={[styles.center]} gutterBottom>
                    Bạn sẽ ăn ở đâu hôm nay?
                </Typography>
                <Box className={[styles.cards]}>
                    <Card className={[styles.cards, styles.space]}>
                        <CardActionArea>
                            <CardMedia>
                                
                            </CardMedia>
                        </CardActionArea>
                    </Card>
                </Box>
            </Box>
        </Box>
    </Fade>
  )
}
