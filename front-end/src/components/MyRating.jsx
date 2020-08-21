import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Box from '@material-ui/core/Box';

const styles = {
  root: {
    background: 'black',
    label: {
      width: '100px',
    },
  },
};

const customIcons = {
  1: {
    icon: <SentimentVerySatisfiedIcon />,
    label: '1',
  },
  2: {
    icon: <SentimentSatisfiedAltIcon />,
    label: '2',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: '3',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: '4',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: '5',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function MyRating({ left, right, value, onChangeRating, name }) {
  return (
    <RatingBox>
      <div>{left}</div>
      <Box component="fieldset" mb={3} borderColor="transparent" style={{ margin: '0', padding: '0' }}>
        <Rating
          name={name}
          defaultValue={3}
          value={parseInt(value)}
          onChange={onChangeRating}
          getLabelText={(value) => customIcons[value].label}
          IconContainerComponent={IconContainer}
          size="large"
        />
      </Box>
      <div>{right}</div>
    </RatingBox>
  );
}

const RatingBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  margin-bottom: 15px;
  padding: 0 25px;
  font-size: 18px;
`;

export default withStyles(styles)(MyRating);
