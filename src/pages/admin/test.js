import React from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const DemoGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        paddingTop: `${theme.spacing(1)} !important`
    }
}))
function test() {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>H1</Typography>
            </Grid>
            <DemoGrid item xs={12} sm={10}>
                <Typography variant='h1' sx={{ marginBottom: 2 }}>
                    Heading 1
                </Typography>
                <Typography variant='body2'>font-size: 96px / line-height: 112px / font-weight: 500</Typography>
            </DemoGrid>
        </Grid>
    )
}

export default test