export const loginstyles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });


export const leaderboardstyles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
});


export const dashboardstyles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
});

export const navstyles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


export const questionpagestyles = {
  card: {
    minWidth: 275,
  },
  title: {
      marginBottom: 16,
      fontSize: 14,
  },
  cover: {
      width: 151,
      height: 151,
  },
};


export const newquestionstyles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
      display: 'none',
    },
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
})


export const questionstyles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  row: {
      display: 'flex',
      justifyContent: 'center',
  },
  avatar: {
      margin: 10,
  },
  bigAvatar: {
      width: 60,
      height: 60,
  },
});