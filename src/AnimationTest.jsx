import React, { useState } from 'react';
import { Card, Icon, Button } from '@salesforce/design-system-react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './AnimationTest.css';

const AnimationTest = () => {

  const [roll, setRoll] = useState(true);
  const [pop, setPop] = useState(true);

  const iconList = [
    {
      iconName: 'animal_and_nature',
      fillColor: 'brown'
    },
    {
      iconName: 'classic_interface',
      fillColor: 'green'
    },
    {
      iconName: 'emoji',
      fillColor: 'orange'
    },
    {
      iconName: 'einstein',
      fillColor: 'black'
    },
    {
      iconName: 'rating',
      fillColor: 'gold'
    },
    {
      iconName: 'world',
      fillColor: 'blue'
    }
  ]

  return (
    
    <Card
      heading="Animation Test"
      icon={
        <Icon
          category='action'
          name='flow'
          size='small'
        />
      }
      bodyClassName="slds-p-horizontal_small"
    >
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Button style={{marginRight: '10px'}} onClick={() => setRoll(!roll)}>Start Animation</Button>
        <CSSTransition in={roll} timeout={1000} classNames={'defaultStyle horizFlow'} appear={true} style={{fill: 'black'}}>
          <Icon
            category='utility'
            name='activity'
            size='large'
          />
        </CSSTransition>
        <Button style={{margin: '10px'}} onClick={() => setPop(!pop)}>Start Animation</Button>
        {
          iconList.map((iconData, index) => {
            const delay = index * 100;
            return <CSSTransition key={iconData.iconName} in={pop} timeout={1000 + delay} classNames={`popDefault delay-${index} popAnim`} appear style={{fill: `${iconData.fillColor}`}}>
              <Icon
                category='utility'
                name={iconData.iconName}
                size='large'
              />
            </CSSTransition>
          })
        }
      </div>
    </Card>
  );
};

export default AnimationTest;