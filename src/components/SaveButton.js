import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  input: {
    display: 'none',
  },
});

function SaveButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button type="submit" variant="contained" size="small">
        <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
        Salvar contato
      </Button>
    </div>
  );
}

SaveButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SaveButton);
