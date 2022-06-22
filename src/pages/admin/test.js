import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import { Formik, Form } from 'formik'
import WInput from 'src/components/common/WInput'
import WSelect from 'src/components/common/WSelect'
import * as Yup from 'yup';

function test() {
    return (
        <Card>
            <CardHeader title='SAMPLE FORM' titleTypographyProps={{ variant: 'h6' }} />
            <CardContent>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        role: '',
                        status: '',
                        company: '',
                    }}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values, null, 2))
                    }}
                    validationSchema={
                        Yup.object().shape({
                            firstName: Yup.string()
                                .required('First name is required'),
                            lastName: Yup.string()
                                .required('Last name is required'),
                            status: Yup.string()
                                .required('Status is required'),
                        })}
                >
                    <Form>
                        <Grid container spacing={7}>
                            <Grid item xs={12} sm={6}>
                                <WInput fullWidth placeholder="John Doe" label="First Name" name="firstName" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <WInput fullWidth placeholder="last Name" label="Last Name" name="lastName" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <WInput
                                    fullWidth
                                    type='email'
                                    label='Email'
                                    placeholder='johnDoe@example.com'
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <WSelect
                                    list={['Active', 'Inactive', 'Banned']}
                                    fullWidth
                                    label="Status"
                                    name="status" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <WSelect
                                    list={['Admin', 'Agent', 'User']}
                                    fullWidth
                                    label="Role"
                                    name="role" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <WInput
                                    fullWidth
                                    label='Company'
                                    placeholder='ABC (pvt) LTD'
                                    name="company"
                                />                            </Grid>

                            <Grid item xs={12}>
                                <Button type="submit" variant='contained' sx={{ marginRight: 3.5 }}>
                                    Save Changes
                                </Button>
                                <Button type='reset' variant='outlined' color='secondary'>
                                    Reset
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>

            </CardContent>
        </Card>
    )
}

export default test