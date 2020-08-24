import React from 'react';
import { Card, Icon } from '@salesforce/design-system-react';
import { ceil } from 'lodash';

const LodashTest = () => {
  return (
    <Card
      heading='Lodash Test'
      icon={
        <Icon
          category='custom'
          name='custom113'
          size='medium'
        />
      }
      bodyClassName="slds-p-horizontal_small"
    >
      Testing lodash library  - ceil(4.006) method should resolve to 5 -&gt; { ceil(4.0006) }
    </Card>
  );
};

export default LodashTest;