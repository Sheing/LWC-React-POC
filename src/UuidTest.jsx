import React from 'react';
import { Card, Icon } from '@salesforce/design-system-react';
import { v4 as uuidv4 } from 'uuid';

const UuidTest = () => {
  return (
    <Card
      heading="UUID Test"
      icon={
        <Icon
          category='action'
          name='password_unlock'
          size='small'
        />
      }
      bodyClassName="slds-p-horizontal_small"
    >
      Testing UUID Package. Here is a generated Id -&gt; {uuidv4()}
    </Card>
  );
};

export default UuidTest;