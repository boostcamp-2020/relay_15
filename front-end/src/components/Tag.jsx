import React from 'react';
import styled from 'styled-components';

const Tag = ({ title }) => <TagWrapper>{title}</TagWrapper>;

const TagWrapper = styled.div`
  padding: 4px 8px;
  background-color: #5b97fe;
  border-radius: 8px;
  margin-right: 4px;
  color: #fff;
`;

export default Tag;
