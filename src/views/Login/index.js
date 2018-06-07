import React, { Component } from 'react';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { Button, Typography, CardContent, CardActions, Card, TextField } from '@material-ui/core'
import { FormGroup, For, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
import { FormInputs } from '../../components/FormInputs/FormInputs'
import styles from './styles.css'
class Login extends Component {
    render() {
        return (
            <div className="container-fluid home">
                <div className="col-md-12">
                    <Card className="card">
                        <CardContent>
                            <Typography className="title" color="textSecondary">
                                Admin
                            </Typography>
                            <TextField
                                id="with-placeholder"
                                label="Izina ry'ukoresha"
                                placeholder="Placeholder"
                                // className={classes.textField}
                                margin="normal"
                                required
                                fullWidth
                            />
                            <br />
                            <TextField
                                id="password-input"
                                label="Ijambobanga"
                                // value={this.state.password}
                                // onChange={e => this.setState({ password: e.target.value })}
                                type="Password"
                                autoComplete="current-password"
                                required
                                fullWidth
                            // margin="normal"
                            />
                            <br />
                            <br />
                            <Button variant="outlined" size="large" color="primary" fullWidth>
                                Fungura
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

        )
    }
}
export default Login;