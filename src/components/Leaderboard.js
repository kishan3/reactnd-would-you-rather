import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
});

class Leaderboard extends Component {
    render(){
        const { classes, users } = this.props

        return(
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell>Avatar</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell numeric>Answered Questions</TableCell>
                    <TableCell numeric>Created Questions</TableCell>
                    <TableCell numeric>Score</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(u => {
                        return (
                            <TableRow key={u.id}>
                                <TableCell>
                                    <Avatar
                                        alt={`Avatar for ${u.name}`}
                                        src={u.avatarURL}
                                        className={classes.bigAvatar}
                                    />
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {u.name}
                                </TableCell>
                                <TableCell numeric>{Object.keys(u.answers).length}</TableCell>
                                <TableCell numeric>{Object.keys(u.questions).length}</TableCell>
                                <TableCell numeric>{u.total}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        )
    }
}

function mapStateToProps({users}) {
    let score = []
    const usrs = Object.values(users)
    usrs.map((u) => (
        score.push({
            ...u,
            total: u.questions.length + Object.keys(u.answers).length
        })
    ))
    score.sort((a,b) => b.total - a.total)
    return {
        users: score,       
    }
}

export default withStyles(styles)(connect(mapStateToProps)(Leaderboard))